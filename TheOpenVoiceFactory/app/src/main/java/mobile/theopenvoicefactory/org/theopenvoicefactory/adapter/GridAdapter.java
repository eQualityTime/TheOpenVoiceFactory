package mobile.theopenvoicefactory.org.theopenvoicefactory.adapter;

import android.content.Context;
import android.graphics.drawable.GradientDrawable;
import android.os.Build;
import android.support.v7.widget.AppCompatImageView;
import android.support.v7.widget.AppCompatTextView;
import android.support.v7.widget.RecyclerView;
import android.util.DisplayMetrics;
import android.util.Log;
import android.view.Display;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.view.WindowManager;

import com.bumptech.glide.Glide;

import org.greenrobot.eventbus.EventBus;

import java.util.List;

import butterknife.BindView;
import butterknife.ButterKnife;
import mobile.theopenvoicefactory.org.theopenvoicefactory.events.MyEvents;
import mobile.theopenvoicefactory.org.theopenvoicefactory.R;
import mobile.theopenvoicefactory.org.theopenvoicefactory.model.Grid;

/**
 * Created by arpitgoyal on 28/04/17.
 */

public class GridAdapter extends RecyclerView.Adapter<RecyclerView.ViewHolder> {

    private Context mContext;
    private List<Grid> mGrids;
    private String imgBaseUrl;
    private int mGridSize = 5;

    public GridAdapter(Context context, List<Grid> grids, int gridSize) {
        this.mContext = context;
        this.mGrids = grids;
        this.mGridSize = gridSize;
    }

    public class ViewHolder extends RecyclerView.ViewHolder {

        @BindView(R.id.title)
        AppCompatTextView title;

        @BindView(R.id.imageView)
        AppCompatImageView imageView;

        @BindView(R.id.container)
        public View container;

        @BindView(R.id.clickable)
        View clickable;

        public ViewHolder(View itemView) {
            super(itemView);
            ButterKnife.bind(this, itemView);
        }
    }

    public void setGridSize (int gridSize) {
        this.mGridSize = gridSize;
    }

    @Override
    public RecyclerView.ViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        Context context = parent.getContext();
        LayoutInflater inflater = LayoutInflater.from(context);
        View view = inflater.inflate(R.layout.item_grid, parent, false);

        /*int height = (int) getScreenHeight() / mGridSize;

        Log.i("TAG", height + " -- height");

        view.setMinimumHeight(height);*/

        return new ViewHolder(view);
    }

    public void setImageUrl(String baseUrl) {
        this.imgBaseUrl = baseUrl;
    }

    @Override
    public void onBindViewHolder(RecyclerView.ViewHolder holder, int position) {

        final ViewHolder viewHolder = (ViewHolder) holder;

        Grid grid = mGrids.get(position);

        viewHolder.title.setText(grid.getTitle());

        if(grid.getTitle().equals("")) {
            viewHolder.title.setVisibility(View.GONE);
        } else {
            viewHolder.title.setVisibility(View.VISIBLE);
        }

        Glide.with(mContext).load(imgBaseUrl + grid.getIconUrl()).into(viewHolder.imageView);
        viewHolder.container.setTag(position);

        GradientDrawable border = new GradientDrawable();
        border.setColor(grid.getColor());
        border.setStroke(1, 0xFF000000);                 //black border with full opacity

        if (Build.VERSION.SDK_INT >= Build.VERSION_CODES.JELLY_BEAN) {
            viewHolder.container.setBackground(border);
        } else {
            viewHolder.container.setBackgroundDrawable(border);
        }

        if(grid.isLeaf()) {
            viewHolder.clickable.setVisibility(View.INVISIBLE);
        } else {
            viewHolder.clickable.setVisibility(View.VISIBLE);
        }

        int height = (int) getScreenHeight() / mGridSize;

        RecyclerView.LayoutParams params = new RecyclerView.LayoutParams(RecyclerView.LayoutParams.MATCH_PARENT, height); // (width, height)
        viewHolder.container.setLayoutParams(params);

        viewHolder.container.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {
                onItemClicked(v);
            }
        });
    }

    private void onItemClicked(View v) {

        int pos = (Integer) v.getTag();
        EventBus.getDefault().post(new MyEvents.ItemClicked(mGrids.get(pos)));

    }

    @Override
    public int getItemCount() {
        return mGrids.size();
    }

    private float getScreenHeight()
    {
        WindowManager wm = (WindowManager) mContext.getSystemService(Context.WINDOW_SERVICE);
        Display display = wm.getDefaultDisplay();
        DisplayMetrics metrics = new DisplayMetrics();
        display.getMetrics(metrics);
        int width = metrics.widthPixels;
        int height = metrics.heightPixels;

        if(width > height) return height;
        else return width;

    }
}
