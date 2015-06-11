//Grooscript converted file
JQueryRestApi = function() {};
JQueryRestApi.gSaT = function(target) {
  target.add = function(x0, x1, x2) { return JQueryRestApi.add(target, x0, x1, x2); };
  target.one = function(x0, x1, x2, x3) { return JQueryRestApi.one(target, x0, x1, x2, x3); };
  target.all = function(x0, x1, x2) { return JQueryRestApi.all(target, x0, x1, x2); };
  target.ajaxCall = function(x0, x1, x2, x3, x4) { return JQueryRestApi.ajaxCall(target, x0, x1, x2, x3, x4); };
};
JQueryRestApi.$init$ = function($self) {
}
function JQueryRestApi$static$init$($static$self){
  
};
JQueryRestApi.add = function($self, onSuccess, onError) {
  return gs.mc($self,"ajaxCall",["POST", "" + (gs.gp($self,'url')) + "/" + (gs.gp($self,'resource')) + "", onSuccess, onError]);
}
JQueryRestApi.one = function($self, id, onSuccess, onError) {
  return gs.mc($self,"ajaxCall",["GET", "" + (gs.gp($self,'url')) + "/" + (gs.gp($self,'resource')) + "/" + (id) + "", onSuccess, onError]);
}
JQueryRestApi.all = function($self, onSuccess, onError) {
  return gs.mc($self,"ajaxCall",["GET", "" + (gs.gp($self,'url')) + "/" + (gs.gp($self,'resource')) + "", onSuccess, onError]);
}
JQueryRestApi.ajaxCall = function($self, type, url, onSuccess, onError) {
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
}
