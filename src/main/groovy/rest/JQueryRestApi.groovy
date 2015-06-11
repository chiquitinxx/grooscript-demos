package rest

import org.grooscript.asts.GsNative

trait JQueryRestApi {
    static String url
    static String resource

    void add(Closure onSuccess, Closure onError) {
        ajaxCall('POST', "${url}/${resource}", onSuccess, onError)
    }

    void one(Long id, Closure onSuccess, Closure onError) {
        ajaxCall('GET', "${url}/${resource}/${id}", onSuccess, onError)
    }

    void all(Closure onSuccess, Closure onError) {
        ajaxCall('GET', "${url}/${resource}", onSuccess, onError)
    }

    @GsNative
    void ajaxCall(String type, String url, Closure onSuccess, Closure onError) {/*
        jQuery.ajax({
            type: type,
            url: url,
            data: (type == 'POST' ? JSON.stringify(gs.toJavascript($self)) : null),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            success: function (data, status, jqXHR) {
                onSuccess(data);
            },
            error: function (jqXHR, status) {
                onError(jqXHR, status);
            }
        });
    */}
}
