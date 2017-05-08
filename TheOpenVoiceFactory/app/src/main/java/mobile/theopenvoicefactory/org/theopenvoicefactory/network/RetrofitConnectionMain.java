package mobile.theopenvoicefactory.org.theopenvoicefactory.network;

import android.content.Context;
import android.util.Log;

import java.io.IOException;

import okhttp3.HttpUrl;
import okhttp3.Interceptor;
import okhttp3.OkHttpClient;
import okhttp3.Request;
import okhttp3.Response;
import okhttp3.logging.HttpLoggingInterceptor;
import retrofit2.Retrofit;
import retrofit2.converter.gson.GsonConverterFactory;

public class RetrofitConnectionMain {
    private static final String TAG = RetrofitConnectionMain.class.getSimpleName();

    private static final String BASE_URL = "http://equalitytime.github.io/";        //staging instance

    public static Retrofit provideRetrofit(String path) {
        return new Retrofit.Builder()
                .baseUrl(path)
                .client(provideOkHttpClient())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    public static Retrofit provideRetrofit() {
        return new Retrofit.Builder()
                .client(provideOkHttpClient())
                .addConverterFactory(GsonConverterFactory.create())
                .build();
    }

    private static OkHttpClient provideOkHttpClient() {
        return new OkHttpClient.Builder()
                .retryOnConnectionFailure(true)
                .addInterceptor(new RequestInterceptor())
                .addInterceptor(provideHttpLoggingInterceptor())
                .build();
    }

    private static HttpLoggingInterceptor provideHttpLoggingInterceptor() {
        HttpLoggingInterceptor httpLoggingInterceptor =
                new HttpLoggingInterceptor(new HttpLoggingInterceptor.Logger() {
                    @Override public void log(String message) {
                        Log.i("logging message", message);
                    }
                });
        httpLoggingInterceptor.setLevel(HttpLoggingInterceptor.Level.BODY);
        return httpLoggingInterceptor;
    }

    public static class RequestInterceptor implements Interceptor {
        @Override
        public Response intercept(Chain chain) throws IOException {
            Request request = chain.request();
            HttpUrl originalHttpUrl = request.url();
            HttpUrl url = originalHttpUrl.newBuilder().build();
            Request.Builder requestBuilder = request.newBuilder().url(url);

            Request final_request = requestBuilder.build();
            Response response  = chain.proceed(final_request);

            return response;
        }
    }

//    public static ApiInterface getService() {
//        return provideRetrofit().create(ApiInterface.class);
//    }

    public static ApiInterface getService() {
        return provideRetrofit(BASE_URL).create(ApiInterface.class);
    }
}