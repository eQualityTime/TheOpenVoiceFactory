package mobile.theopenvoicefactory.org.theopenvoicefactory.activity;

import android.app.ProgressDialog;
import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.graphics.Color;
import android.graphics.drawable.GradientDrawable;
import android.media.AudioManager;
import android.net.Uri;
import android.os.Build;
import android.os.Bundle;
import android.os.Handler;
import android.speech.tts.TextToSpeech;
import android.support.annotation.Nullable;
import android.support.v7.app.AlertDialog;
import android.support.v7.app.AppCompatActivity;
import android.support.v7.widget.AppCompatTextView;
import android.support.v7.widget.GridLayoutManager;
import android.support.v7.widget.RecyclerView;
import android.support.v7.widget.SwitchCompat;
import android.text.TextUtils;
import android.util.Log;
import android.view.LayoutInflater;
import android.view.MotionEvent;
import android.view.View;
import android.view.WindowManager;
import android.widget.CompoundButton;
import android.widget.EditText;
import android.widget.RelativeLayout;
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
import java.util.Timer;
import java.util.TimerTask;

import butterknife.BindView;
import butterknife.ButterKnife;
import butterknife.OnClick;
import butterknife.OnTouch;
import mobile.theopenvoicefactory.org.theopenvoicefactory.R;
import mobile.theopenvoicefactory.org.theopenvoicefactory.adapter.GridAdapter;
import mobile.theopenvoicefactory.org.theopenvoicefactory.events.MyEvents;
import mobile.theopenvoicefactory.org.theopenvoicefactory.model.Grid;
import mobile.theopenvoicefactory.org.theopenvoicefactory.network.RetrofitConnectionMain;
import mobile.theopenvoicefactory.org.theopenvoicefactory.util.PrefManager;
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

    @BindView(R.id.scan)
    SwitchCompat scan;

    AppCompatTextView textBox;
    View scanningBox;

    private JSONObject gridObject;

    private List<Grid> mGrid = new ArrayList<>();
    private GridAdapter adapter;
    private GridLayoutManager gridLayoutManager;

    private TextToSpeech tts;

    int gridSize = 5;

    private boolean canSpeak = false;

    private boolean lastPlaceWithSingleCharacter = false;

    private ProgressDialog dialog;

    private Timer timer;

    private String baseUrl;

    private boolean isScanning = false;

    int timeSec;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);

        getWindow().addFlags(WindowManager.LayoutParams.FLAG_FULLSCREEN);       //hiding status bar

        setContentView(R.layout.activity_main);                                 //setting layout file

        ButterKnife.bind(this);                                                //Butterknife to bind views

        /*
         * Adding textView which will display commands
         */
        LayoutInflater inflater = (LayoutInflater) getSystemService(Context.LAYOUT_INFLATER_SERVICE);
        textBox = (AppCompatTextView) inflater.inflate(R.layout.textbox, null);
        textBox.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                speak();
            }
        });

        scanningBox = new View(this);
        GradientDrawable border = new GradientDrawable();
        border.setStroke(6, 0xFFFF0000);
        scanningBox.setBackgroundDrawable(border);

        scan.setOnCheckedChangeListener(new CompoundButton.OnCheckedChangeListener() {
            @Override
            public void onCheckedChanged(CompoundButton buttonView, boolean isChecked) {
                if (isChecked) {
                    startScan();
                    isScanning = true;
                } else {
                    stopScan();
                    isScanning = false;
                }

                layout.requestDisallowInterceptTouchEvent(!isScanning);
            }
        });

        baseUrl = PrefManager.with(this).getBaseUrl();

        //setup grids
        setupRecyclerView();

        /*
         * Below is the check to fetch from offline cache instead of making requests
         * each time user opens the app
         */
        if (PrefManager.with(this).getJson() == null) {
            fetchJson(null);                                        //this will load default url
        } else {
            handleResponse(PrefManager.with(this).getJson());      //this will load JSON from cache
        }

        tts = new TextToSpeech(this, this);                       //initializing Text-to-Speech Engine

        setupVolumeLimit();

        layout.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                if(isScanning) {
                    Grid grid = mGrid.get((scanIndex == 0)?(mGrid.size()-1):(scanIndex-1));
                    handleClicks(grid);
                }
            }
        });

      /* layout.setOnTouchListener(new View.OnTouchListener() {
            @Override
            public boolean onTouch(View v, MotionEvent event) {
                if(isScanning) {
                    Grid grid = mGrid.get((scanIndex == 0)?(mGrid.size()-1):(scanIndex-1));
                    handleClicks(grid);
                }

                return true;
            }
        });*/

        gridView.addOnItemTouchListener(new RecyclerView.SimpleOnItemTouchListener() {
            @Override
            public boolean onInterceptTouchEvent(RecyclerView rv, MotionEvent e) {
                switch (e.getAction()) {
                    case MotionEvent.ACTION_DOWN:
                        if(isScanning) {
                            layout.callOnClick();
                        }
                        break;
                }

                return isScanning;
            }
        });
    }

    /**
     * Setting up grids with default colun count as gridSize (default is 5)
     */
    private void setupRecyclerView() {
        gridView.setLayoutManager(new GridLayoutManager(this, gridSize));
        adapter = new GridAdapter(this, mGrid, gridSize);
        gridView.setAdapter(adapter);

    }

    /**
     * adjust volume. make is maximum.
     * Also, even if earphones are plugged in, it puts on speaker mode.
     */
    private void setupVolumeLimit() {
        AudioManager am =
                (AudioManager) getSystemService(Context.AUDIO_SERVICE);

        am.setMode(AudioManager.MODE_IN_COMMUNICATION);
        am.setSpeakerphoneOn(true);

        am.setStreamVolume(
                AudioManager.STREAM_SYSTEM,
                am.getStreamMaxVolume(AudioManager.STREAM_SYSTEM),
                0);
    }

    int scanIndex = 0;

    private void startScan() {

        final Handler handler = new Handler();

        timer = new Timer();
        TimerTask scanningTask = new TimerTask() {
            @Override
            public void run() {
                handler.post(new Runnable() {
                    public void run() {
                        try {
                            showScanningBox(scanIndex);
                            scanIndex++;
                            if(scanIndex >= mGrid.size()) {
                                scanIndex = 0;
                            }
                        } catch (Exception e) {

                        }
                    }
                });
            }
        };
        timer.schedule(scanningTask, 0, 2000);

    }

    private void showScanningBox(int pos) {
        View v = gridLayoutManager.findViewByPosition(pos);

        if (v == null) {
            return;
        }

        float a = v.getX() + gridView.getX();
        float b = v.getY();

        RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(v.getWidth(), v.getHeight());
        params.leftMargin = (int) a;
        params.topMargin = (int) b;

        if (scanningBox.getParent() != null) {
            layout.removeView(scanningBox);
        }

        layout.addView(scanningBox, params);
    }

    private void stopScan() {
        if (timer != null) {
            timer.cancel();
            timer.purge();
            timer = null;
            scanIndex = 0;
            layout.removeView(scanningBox);
        }
    }

    /**
     * This function fetches JSON from the url
     *
     */
    private void fetchJson(String s) {
        if (s == null) {
            baseUrl = "http://equalitytime.github.io/CommuniKate/demos/CK20V2.pptx/";
        } else {
            baseUrl = s.split("\\?")[0];                                     //removing query params
        }

        String url = baseUrl + "pageset.json";

        dialog = ProgressDialog.show(this, "Loading", "loading...", true);     //loader to show progress

        RetrofitConnectionMain.getService().getJSON(url).enqueue(new Callback<ResponseBody>() {
            @Override
            public void onResponse(Call<ResponseBody> call, Response<ResponseBody> response) {
                dialog.dismiss();
                textBox.setText("");
                if (response.isSuccessful()) {
                    PrefManager.with(MainActivity.this).setBaseUrl(baseUrl);
                    settingsLayout.setVisibility(View.VISIBLE);
                    try {
                        handleResponse(response.body().string());
                    } catch (IOException e) {
                        e.printStackTrace();
                    }
                } else {
                    Toast.makeText(MainActivity.this, "Network Error with response", Toast.LENGTH_SHORT).show();
                }
            }

            @Override
            public void onFailure(Call<ResponseBody> call, Throwable t) {
                dialog.dismiss();
                Toast.makeText(MainActivity.this, "Network Error", Toast.LENGTH_SHORT).show();
            }
        });
    }

    /**
     * This function parses JSON and put values in the views
     *
     * @param json
     */
    private void handleResponse(String json) {
        JSONObject object;
        try {
            object = new JSONObject(json);

            PrefManager.with(this).setJson(json);

            gridObject = object.getJSONObject("Grid");
            gridSize = object.getJSONArray("Settings").getInt(0);

            gridLayoutManager = new GridLayoutManager(this, gridSize);

            gridView.setLayoutManager(gridLayoutManager);
            getSlide(null);

        } catch (JSONException e) {
            e.printStackTrace();
        }

    }

    /**
     * Open the page with title as key
     *
     * @param key, if null first page is shown
     */

    private void getSlide(@Nullable String key) {
        int slideNo;
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
        scanIndex = 0;

        try {
            JSONArray slide = gridObject.getJSONArray(slideNo + "");

            JSONArray labels = slide.getJSONArray(1);             //labels for each cell
            JSONArray utterance = slide.getJSONArray(2);          //utterances
            JSONArray links = slide.getJSONArray(3);              //links or actions
            JSONArray icons = slide.getJSONArray(4);              //icons for each cell
            JSONArray colors = slide.getJSONArray(5);             //color in RGB for each cell

            int x = labels.length();
            int y = labels.getJSONArray(0).length();

            for (int j = 0; j < x; j++) {

                for (int i = 0; i < y; i++) {

                    Grid grid = new Grid();
                    grid.setTitle(labels.getJSONArray(i).getString(j));
                    grid.setUtterance(utterance.getJSONArray(i).getString(j));
                    grid.setIconUrl(icons.getJSONArray(i).getString(j));

                    int color = Color.rgb(255, 255, 255);       // if color array is empty,
                    // WHITE color is used
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

            adapter.setGridSize(gridSize);
            adapter.setImageUrl(baseUrl);
            adapter.notifyDataSetChanged();

            /*
             * Below module places the text box properly in first row
             */
            gridView.post(new Runnable() {
                @Override
                public void run() {

                    View v = gridLayoutManager.findViewByPosition(1);

                    if (v == null) {
                        return;
                    }

                    float a = v.getX() + gridView.getX();
                    float b = v.getY();

                    int mult = 3;
                    if(gridSize == 5) mult = 3;
                    else mult = gridSize - 2;

                    RelativeLayout.LayoutParams params = new RelativeLayout.LayoutParams(v.getWidth() * mult, v.getHeight());
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

    /**
     * Processes special commands
     *
     * @param command Only commands implemented for now are
     *                CLEAR
     *                BACKSPACE
     *                DELETEWORD
     *                PLACE
     *                OPEN
     */
    private void specialCommands(String command) {

        if (command.startsWith("ovf(")) {
            command = command.substring(4, command.length() - 1);
        } else {
            return;
        }

        Log.i("TAG", "command: " + command);

        String text = textBox.getText().toString();

        String[] commandArray = command.split(",");

        for (String aCommandArray : commandArray) {

            String functionname = aCommandArray.split("\\(")[0];

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
                    String arg = aCommandArray.split("\\(")[1];
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
                    arg = aCommandArray.split("\\(")[1];
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

    /**
     * Item click listener
     *
     * @param itemClicked
     */
    @Subscribe
    public void getItemClicks(MyEvents.ItemClicked itemClicked) {

        Grid grid = itemClicked.getGrid();
        handleClicks(grid);
    }

    private void handleClicks(Grid grid) {
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

    /**
     * Add the word to the textbox
     *
     * @param s If single character was placed before, space won't be added
     */
    private void append(String s) {

        if (s == null || s.length() < 1) return;

        if (!lastPlaceWithSingleCharacter) {
            textBox.setText(textBox.getText() + " " + s);
        } else {
            textBox.setText(textBox.getText() + s);
        }
        lastPlaceWithSingleCharacter = false;
    }

    /**
     * TTS to speak when textbox is pressed
     */
    void speak() {
        if (!canSpeak) return;
        String txt = textBox.getText().toString();
        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.LOLLIPOP) {
            tts.speak(txt, TextToSpeech.QUEUE_FLUSH, null, null);
        } else {
            tts.speak(txt, TextToSpeech.QUEUE_FLUSH, null);
        }
    }

    /**
     * Open settings to enter custom url
     */
    @OnClick(R.id.settings)
    void openSettings() {

        final EditText txtUrl = new EditText(this);

        txtUrl.setHint("Enter url to load");

        new AlertDialog.Builder(this)
                .setTitle("Url")
                .setMessage("Add URL to add below")
                .setView(txtUrl)
                .setPositiveButton("Load", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int whichButton) {
                        String url = txtUrl.getText().toString();
                        if (TextUtils.isEmpty(url)) {
                            Toast.makeText(MainActivity.this, "Enter a url", Toast.LENGTH_SHORT).show();
                        } else {
                            fetchJson(url);
                        }

                    }
                })
                .setNegativeButton("Cancel", new DialogInterface.OnClickListener() {
                    public void onClick(DialogInterface dialog, int whichButton) {
                        dialog.dismiss();
                    }
                })
                .show();

    }

    /**
     * Search for the text on YouTube
     */
    @OnClick(R.id.youtube)
    void youtube() {
        if (TextUtils.isEmpty(textBox.getText().toString())) {
            Toast.makeText(this, "Empty text", Toast.LENGTH_SHORT).show();
            return;
        }
        String url = "http://www.youtube.com/results?search_query=" + textBox.getText().toString() + "&search_type=&aq=0";
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(url));
        startActivity(i);
    }

    /**
     * Search for the text on Google
     */
    @OnClick(R.id.google)
    void google() {
        if (TextUtils.isEmpty(textBox.getText().toString())) {
            Toast.makeText(this, "Empty text", Toast.LENGTH_SHORT).show();
            return;
        }
        String url = "http://www.google.co.uk/images?q=" + textBox.getText().toString();
        Intent i = new Intent(Intent.ACTION_VIEW);
        i.setData(Uri.parse(url));
        startActivity(i);
    }

    /**
     * Tweet the text
     */
    @OnClick(R.id.twitter)
    void twitter() {
        if (TextUtils.isEmpty(textBox.getText().toString())) {
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
        canSpeak = status == TextToSpeech.SUCCESS;
    }

    /**
     * Close TTS Engine when app is destroyed
     */
    @Override
    protected void onDestroy() {
        if (tts != null) {
            tts.stop();
            tts.shutdown();
        }
        super.onDestroy();
    }
}
