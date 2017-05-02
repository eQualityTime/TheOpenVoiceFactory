package mobile.theopenvoicefactory.org.theopenvoicefactory.model;

import android.graphics.Color;

/**
 * Created by arpitgoyal on 28/04/17.
 */

public class Grid {

    private String title;
    private String utterance;
    private int color;
    private String iconUrl;
    private boolean isLeaf;
    private String action;                 //0 for clear 1 for delete 2 for prev slide 3 for main slide

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public int getColor() {
        return color;
    }

    public void setColor(int color) {
        this.color = color;
    }

    public String getIconUrl() {
        return iconUrl;
    }

    public void setIconUrl(String iconUrl) {
        this.iconUrl = iconUrl;
    }

    public boolean isLeaf() {
        return isLeaf;
    }

    public void setLeaf(boolean leaf) {
        isLeaf = leaf;
    }

    public String getUtterance() {
        return utterance;
    }

    public void setUtterance(String utterance) {
        this.utterance = utterance;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }
}
