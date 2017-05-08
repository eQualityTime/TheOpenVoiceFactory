package mobile.theopenvoicefactory.org.theopenvoicefactory.util;

import android.content.Context;
import android.content.SharedPreferences;

/**
 * Created by arpit on 15/01/17.
 */

public class PrefManager {

    private static final String PREF_NAME = "ovf.pref";
    private static final int PRIVATE_MODE = 0;

    private static final String KEY_BASE_URL = "base_url" ;
    private static final String KEY_JSON = "json";

    private static PrefManager mInstance;

    private static SharedPreferences pref;

    private static SharedPreferences.Editor editor;

    public static PrefManager with(Context context) {

        if (mInstance == null) {
            pref = context.getSharedPreferences(PREF_NAME, PRIVATE_MODE);
            editor = pref.edit();
            mInstance = new PrefManager();
            return mInstance;
        } else {
            return mInstance;
        }
    }

    public void setJson(String json) {
        editor.putString(KEY_JSON, json);
        editor.commit();
    }

    public String getJson() {
        return pref.getString(KEY_JSON, null);
    }

    public void setBaseUrl(String url) {
        editor.putString(KEY_BASE_URL, url);
        editor.commit();
    }

    public String getBaseUrl() {
        return pref.getString(KEY_BASE_URL, "");
    }
}

