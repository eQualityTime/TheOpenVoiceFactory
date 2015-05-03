package org.qtproject.example.testandroidextras;

import org.qtproject.qt5.android.bindings.QtActivity;
import org.qtproject.qt5.android.bindings.QtApplication;
import android.util.Log;
import android.content.Context;
import android.os.Bundle;
import android.speech.tts.TextToSpeech;
import java.util.Locale;
import java.lang.String;

public class AndroidTTSClient extends QtActivity implements TextToSpeech.OnInitListener
{

  private static AndroidTTSClient m_instance;
  private static TextToSpeech tts;

  public AndroidTTSClient()
  {
    System.out.println("Java constructor " );
    m_instance = this;
  }

  /** Called when the activity is first created. */
  @Override
  public void onCreate(Bundle savedInstanceState) {
    super.onCreate(savedInstanceState);
    tts = new TextToSpeech(this,this);
  }

  public void onInit(int status) {
    // TODO: Do we need to do any locale-checking here?
    // Probably need to check preferred language is available, at least.

    /*Locale loc = new Locale("es", "","");
    if(tts.isLanguageAvailable(loc) >= TextToSpeech.LANG_AVAILABLE){
            tts.setLanguage(loc);
    }
    tts.speak("hola mundos", TextToSpeech.QUEUE_FLUSH, null);
    */
  }

  @Override
  protected void onDestroy() {
    super.onDestroy();
    tts.shutdown();
  }

  public static void speak(String msg)
  {
    System.out.println(msg);
    tts.speak(msg, TextToSpeech.QUEUE_FLUSH, null);

  }
}
