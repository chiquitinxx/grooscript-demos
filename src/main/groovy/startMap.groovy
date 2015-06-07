/**
 * Created by jorgefrancoleza on 7/6/15.
 */
import maps.GoogleMap

GoogleMap.init {
    options.zoom = 6
    options.center = ltlg(40.4379543,-3.6795367 )
    putStyle([
        [stylers: [ [ visibility: 'simplified' ],[ gamma: 0.5 ],[ weight: 0.5 ] ] ],
        [featureType: 'water', stylers: [ [color: '#b77fd7'] ] ]
    ])
    mark(position: ltlg(40.4379543,-3.6795367),
            title: 'grooscript',
            icon: "img/gs.png"
    )
    mark(position: ltlg(41.39479,2.1487679),
            title: 'Champions!',
            icon: "img/barcelona.png",
            infoWindow: '<img class="campeon" src="img/campeon.jpg"/>'
    )
}.start('map-canvas')