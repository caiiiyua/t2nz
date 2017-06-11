package com.t2nz;

import android.content.Context;

import com.facebook.react.modules.network.OkHttpClientProvider;
import com.facebook.stetho.Stetho;
import com.facebook.stetho.okhttp3.StethoInterceptor;

/**
 * Created by pp on 4/06/17.
 */

public class StethoWrapper {
    public static void initialize(Context context) {
        Stetho.initializeWithDefaults(context);
    }

    public static void addInterceptor() {
        OkHttpClientProvider.replaceOkHttpClient(OkHttpClientProvider.getOkHttpClient()
                .newBuilder()
                .addInterceptor(new StethoInterceptor())
                .addNetworkInterceptor(new StethoInterceptor())
                .build());
    }
}
