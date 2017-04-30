package mobile.theopenvoicefactory.org.theopenvoicefactory.network;

import mobile.theopenvoicefactory.org.theopenvoicefactory.model.Data;
import okhttp3.Response;
import okhttp3.ResponseBody;
import retrofit2.Call;
import retrofit2.http.FormUrlEncoded;
import retrofit2.http.GET;
import retrofit2.http.POST;



public interface ApiInterface {

    @GET("CommuniKate/demos/CK20V2.pptx/pageset.json")
    Call<ResponseBody> getJSON();

}
