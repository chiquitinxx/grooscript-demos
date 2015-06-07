//Grooscript converted file
gs.mc(gs.execStatic(GoogleMap,'init', this,[function(it) {
  gs.sp(gs.fs('options', this),"zoom",6);
  gs.sp(gs.fs('options', this),"center",gs.mc(this,"ltlg",[40.4379543, -3.6795367]));
  gs.mc(this,"putStyle",[gs.list([gs.map().add("stylers",gs.list([gs.map().add("visibility","simplified") , gs.map().add("gamma",0.5) , gs.map().add("weight",0.5)])) , gs.map().add("featureType","water").add("stylers",gs.list([gs.map().add("color","#b77fd7")]))])]);
  gs.mc(this,"mark",[gs.map().add("position",gs.mc(this,"ltlg",[40.4379543, -3.6795367])).add("title","grooscript").add("icon","img/gs.png")]);
  return gs.mc(this,"mark",[gs.map().add("position",gs.mc(this,"ltlg",[41.39479, 2.1487679])).add("title","Champions!").add("icon","img/barcelona.png").add("infoWindow","<img class=\"campeon\" src=\"img/campeon.jpg\"/>")]);
}]),"start",["map-canvas"]);
