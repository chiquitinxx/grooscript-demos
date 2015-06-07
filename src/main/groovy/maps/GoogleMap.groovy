package maps

import org.grooscript.asts.GsNative

/**
 * Created by jorgefrancoleza on 7/6/15.
 */
class GoogleMap {

    Map options = [
        zoom: 8
    ]
    private List<Map> _style
    private List<Map> _marks = []

    static GoogleMap init(@DelegatesTo(GoogleMap) Closure actions) {
        def map = new GoogleMap()
        actions.delegate = map
        actions()
        map
    }

    @GsNative
    def ltlg(latitude, longitude) {/*
        return new google.maps.LatLng(latitude, longitude);
    */}

    void putStyle(List<Map> styles) {
        _style = styles
    }

    void mark(Map options) {
        _marks << options
    }

    @GsNative
    void start(String selectorId) {/*
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
    */}
}
