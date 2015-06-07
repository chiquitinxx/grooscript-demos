//Grooscript converted file
function GoogleMap() {
  var gSobject = gs.inherit(gs.baseClass,'GoogleMap');
  gSobject.clazz = { name: 'maps.GoogleMap', simpleName: 'GoogleMap'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.options = gs.map().add("zoom",8);
  gSobject._style = null;
  gSobject._marks = gs.list([]);
  gSobject.init = function(x0) { return GoogleMap.init(x0); }
  gSobject.ltlg = function(latitude, longitude) {
    return new google.maps.LatLng(latitude, longitude);
  }
  gSobject['putStyle'] = function(styles) {
    return gSobject._style = styles;
  }
  gSobject['mark'] = function(options) {
    return gs.mc(gSobject._marks,'leftShift', gs.list([options]));
  }
  gSobject.start = function(selectorId) {
    var style = this._style;
        var options = this.options;
        var marks = this._marks;
        google.maps.event.addDomListener(window, 'load', function() {
            var MY_MAPTYPE_ID = 'custom_style';
            if (style) {
                options['mapTypeControlOptions'] = {
                    mapTypeIds: [google.maps.MapTypeId.ROADMAP, MY_MAPTYPE_ID]
                }
                options['mapTypeId'] = MY_MAPTYPE_ID;
            }
            var map = new google.maps.Map(document.getElementById(selectorId), gs.toJavascript(options));
            if (style) {
                var styledMapOptions = {name: 'Custom Style'};
                var customMapType = new google.maps.StyledMapType(gs.toJavascript(style), styledMapOptions);
                map.mapTypes.set(MY_MAPTYPE_ID, customMapType);
            }
            marks.each(function(mark) {
                mark.map = map;
                var googleMark = new google.maps.Marker(gs.toJavascript(mark));
                if (mark.infoWindow) {
                    var infowindow = new google.maps.InfoWindow({content: mark.infoWindow});
                    google.maps.event.addListener(googleMark, 'click', function() {
                        infowindow.open(map, googleMark);
                    });
                }
            });
        });
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
GoogleMap.init = function(actions) {
  var map = GoogleMap();
  gs.sp(actions,"delegate",map);
  gs.execCall(actions, this, []);
  return map;
}
