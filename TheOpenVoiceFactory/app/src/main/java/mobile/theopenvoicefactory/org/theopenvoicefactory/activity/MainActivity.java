package mobile.theopenvoicefactory.org.theopenvoicefactory.activity;

import android.content.Context;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.net.Uri;
import android.os.Build;
import android.speech.tts.TextToSpeech;
import android.support.annotation.Nullable;
import android.support.v4.text.TextUtilsCompat;
import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;
import android.support.v7.widget.AppCompatImageButton;
import android.support.v7.widget.AppCompatTextView;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.LinearLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.Toolbar;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MenuItem;
import android.view.View;
import android.view.ViewGroup;
import android.widget.LinearLayout;
import android.widget.RelativeLayout;
import android.widget.TextView;
import android.widget.Toast;

import org.greenrobot.eventbus.EventBus;
import org.greenrobot.eventbus.Subscribe;
import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.io.IOException;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;
import java.util.Locale;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import mobile.theopenvoicefactory.org.theopenvoicefactory.MyEvents;
import mobile.theopenvoicefactory.org.theopenvoicefactory.R;
import mobile.theopenvoicefactory.org.theopenvoicefactory.adapter.GridAdapter;
import mobile.theopenvoicefactory.org.theopenvoicefactory.model.Data;
import mobile.theopenvoicefactory.org.theopenvoicefactory.model.Grid;
import mobile.theopenvoicefactory.org.theopenvoicefactory.network.RetrofitConnectionMain;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.Callback;
import retrofit2.Response;

public class MainActivity extends AppCompatActivity implements TextToSpeech.OnInitListener {

   /* @BindView(R.id.toolbar)
    Toolbar toolbar;

    @BindView(R.id.title)
    AppCompatTextView title;*/

    @BindView(R.id.grid_view)
    RecyclerView gridView;

   /* @BindView(R.id.text_box)
    AppCompatTextView textBox;*/

    /*@BindView(R.id.speak)
    AppCompatImageButton speak;*/

    @BindView(R.id.layout)
    RelativeLayout layout;

    @BindView(R.id.settingsLayout)
    View settingsLayout;

    AppCompatTextView textBox;

    private JSONObject gridObject;

    private List<Grid> mGrid = new ArrayList<>();
    private GridAdapter adapter;
    private GridLayoutManager gridLayoutManager;

    private TextToSpeech tts;

    int gridSize = 5;

    private boolean canSpeak = false;

    private boolean lastPlaceWithSingleCharacter = false;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        ButterKnife.bind(this);

       /* setSupportActionBar(toolbar);
        getSupportActionBar().setDisplayHomeAsUpEnabled(true);
        getSupportActionBar().setDisplayShowTitleEnabled(false);*/

        LayoutInflater inflater = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        textBox = (AppCompatTextView) inflater.inflate(R.layout.textbox, null);
        textBox.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                speak();
            }
        });

        setupRecyclerView();
        fetchJson();

        tts = new TextToSpeech(this, this);
        //tts.getLanguage();
    }

    private void setupRecyclerView() {
        gridView.setLayoutManager(new GridLayoutManager(this, 4));
        adapter = new GridAdapter(this, mGrid);
        gridView.setAdapter(adapter);

    }

    private void fetchJson() {

        RetrofitConnectionMain.getService().getJSON().enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {

                if (response.isSuccessful()) {
                    settingsLayout.setVisibility(View.VISIBLE);
                    handleResponse(response.body());
                }
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {

            }
        });
    }

    private void handleResponse(ResponseBody response) {
        JSONObject object;
        try {
            object = new JSONObject(response.string());

            gridObject = object.getJSONObject("Grid");
            gridSize = object.getJSONArray("Settings").getInt(0);

            gridLayoutManager = new GridLayoutManager(this, gridSize);

            gridView.setLayoutManager(gridLayoutManager);
            getSlide(null);

           /* RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(100,100);
            params.leftMargin = (int) a;
            params.rightMargin = (int) b;
            TextView tv = new TextView(this);
            tv.setText("Backchod");
            layout.addView(tv, params);*/

        } catch (JSONException | IOException e) {
            e.printStackTrace();
        }

    }

    private void getSlide(@Nullable String key) {
        int slideNo = 0;
        if (key != null) {

            Iterator<?> keys = gridObject.keys();
            int a = 0;
            while (keys.hasNext()) {
                String k = (String) keys.next();
                try {
                    if (gridObject.getJSONArray(k).getString(0).equals(key)) {
                        break;
                    }
                } catch (JSONException e) {
                    e.printStackTrace();
                }

                a++;
            }

            slideNo = a;

        } else {
            slideNo = 0;
        }

        mGrid.clear();

        try {
            JSONArray slide = gridObject.getJSONArray(slideNo + "");

            JSONArray labels = slide.getJSONArray(1);
            JSONArray utterance = slide.getJSONArray(2);
            JSONArray links = slide.getJSONArray(3);
            JSONArray icons = slide.getJSONArray(4);
            JSONArray colors = slide.getJSONArray(5);

            int x = labels.length();
            int y = labels.getJSONArray(0).length();

            for (int j = 0; j < x; j++) {

                for (int i = 0; i < y; i++) {

                    Grid grid = new Grid();
                    grid.setTitle(labels.getJSONArray(i).getString(j));
                    grid.setUtterance(utterance.getJSONArray(i).getString(j));
                    grid.setIconUrl(icons.getJSONArray(i).getString(j));

                    int color = Color.rgb(255, 255, 255);
                    if (!colors.getJSONArray(i).getString(j).equals("")) {
                        color = Color.rgb(colors.getJSONArray(i).getJSONArray(j).getInt(0),
                                colors.getJSONArray(i).getJSONArray(j).getInt(1),
                                colors.getJSONArray(i).getJSONArray(j).getInt(2));
                    }

                    grid.setColor(color);

                    if (links.getJSONArray(i).getString(j).equals("")) {
                        grid.setAction("");
                        grid.setLeaf(true);
                    } else {
                        grid.setAction(links.getJSONArray(i).getString(j));
                        grid.setLeaf(false);
                    }

                    mGrid.add(grid);
                }

            }

            adapter.notifyDataSetChanged();

            gridView.post(new Runnable() {
                @Override
                public void run() {

                    View v = gridLayoutManager.findViewByPosition(1);

                    if (v == null) {
                        Log.i("TAG", "null view");
                        return;
                    }

                    float a = v.getX() + gridView.getX();
                    float b = v.getY();

                    Log.i("pos", "a: " + a + " *** " + b);

                    RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(v.getWidth() * 3, v.getHeight());
                    params.leftMargin = (int) a;
                    params.rightMargin = (int) b;

                    if (layout.findViewById(R.id.textView) == null) {
                        layout.addView(textBox, params);
                    }
                }
            });

        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    private void specialCommands(String command) {

        if (command.startsWith("ovf(")) {
            command = command.substring(4, command.length() - 1);
        } else {
            return;
        }

        Log.i("TAG", "command: " + command);

        String text = textBox.getText().toString();

        String[] commandArray = command.split(",");

        for (int i = 0; i < commandArray.length; i++) {

            String functionname = commandArray[i].split("\\(")[0];

            switch (functionname) {

                case "clear":
                    textBox.setText("");
                    break;

                case "deleteword":
                    int lastIndex = text.lastIndexOf(" ");
                    textBox.setText(text.substring(0, lastIndex));
                    break;

                case "backspace":
                    textBox.setText(text.substring(0, text.length() - 1));
                    break;

                case "place":
                    String arg = commandArray[i].split("\\(")[1];
                    arg = arg.substring(0, arg.length() - 1);
                    arg = arg.replaceAll("\"", "");
                    arg = arg.replaceAll("\'", "");
                    /*arg = arg.replaceAll("%20", " ");
                    arg = arg.replaceAll("%21", "!");*/
                    arg = Uri.decode(arg);
                    append(arg);
                    if (arg.length() == 1) lastPlaceWithSingleCharacter = true;
                    break;

                case "open":
                    arg = commandArray[i].split("\\(")[1];
                    arg = arg.substring(0, arg.length() - 1);
                    arg = arg.replaceAll("\"", "");
                    arg = arg.toLowerCase().replaceAll(" ", "");
                    arg = Uri.decode(arg);
                    getSlide(arg);
                    break;

                default:
                    Toast.makeText(this, "Other operations are not implemented yet", Toast.LENGTH_SHORT).show();
            }
        }

    }

    @Override
    public void onStart() {
        super.onStart();
        EventBus.getDefault().register(this);
    }

    @Override
    public void onStop() {
        super.onStop();
        EventBus.getDefault().unregister(this);
    }

    @Subscribe
    public void getItemClicks(MyEvents.ItemClicked itemClicked) {

        Grid grid = itemClicked.getGrid();

        if (grid.isLeaf()) {
            String txt = textBox.getText().toString();
            textBox.setText(txt + " " + (grid.getUtterance().equals("") ? grid.getTitle() : grid.getUtterance()));
        } else {

            if (grid.getAction().startsWith("ovf(")) {
                specialCommands(grid.getAction());
            } else {
                getSlide(grid.getAction());
            }
        }
    }

    private void append(String s) {

        if (s == null || s.length() < 1) return;

        if (!lastPlaceWithSingleCharacter) {
            textBox.setText(textBox.getText() + " " + s);
        } else {
            textBox.setText(textBox.getText() + s);
        }
        lastPlaceWithSingleCharacter = false;
    }

    //@OnClick(R.id.textView)
    void speak() {
        if (!canSpeak) return;
        String txt = textBox.getText().toString();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            tts.speak(txt, TextToSpeech.QUEUE_FLUSH, null, null);
        } else {
            tts.speak(txt, TextToSpeech.QUEUE_FLUSH, null);
        }
    }

    @OnClick(R.id.youtube)
    void youtube() {
        if(TextUtils.isEmpty(textBox.getText().toString())) {
            Toast.makeText(this, "Empty text", Toast.LENGTH_SHORT).show();
            return;
        }
        String url = "http://www.youtube.com/results?search_query=" + textBox.getText().toString() + "&search_type=&aq=0";
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(url));
        startActivity(i);
    }

    @OnClick(R.id.google)
    void google() {
        if(TextUtils.isEmpty(textBox.getText().toString())) {
            Toast.makeText(this, "Empty text", Toast.LENGTH_SHORT).show();
            return;
        }
        String url = "http://www.google.co.uk/images?q=" + textBox.getText().toString();
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(url));
        startActivity(i);
    }

    @OnClick(R.id.twitter)
    void twitter() {
        if(TextUtils.isEmpty(textBox.getText().toString())) {
            Toast.makeText(this, "Empty text", Toast.LENGTH_SHORT).show();
            return;
        }
        String url = "http://twitter.com/intent/tweet?text=" + textBox.getText().toString().replace(" ", "%20");
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(url));
        startActivity(i);
    }

    @Override
    public void onInit(int status) {

        if (status == TextToSpeech.SUCCESS) {

            //int result = tts.setLanguage(Locale.ENGLISH);

           /* if(LocaleHelper.getLanguage().equals("en")) {
                result = tts.setLanguage(Locale.ENGLISH);
            } else if(LocaleHelper.getLanguage().equals("hi")) {
                result = tts.setLanguage(new Locale ("hi_IN"));
            }*/

            /*if (result == TextToSpeech.LANG_MISSING_DATA
                    || result == TextToSpeech.LANG_NOT_SUPPORTED) {
                speak.setVisibility(View.INVISIBLE);
                canSpeak = false;
            } else {
                speak.setVisibility(View.VISIBLE);
                canSpeak = true;
            }*/

            canSpeak = true;

        } else {
            canSpeak = false;
        }
    }

    @Override
    protected void onDestroy() {
        if(tts != null) {
            tts.stop();
            tts.shutdown();
        }
        super.onDestroy();
    }
}
