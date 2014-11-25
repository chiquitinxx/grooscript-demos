//Grooscript converted file
SnapSvg.snapSvg("svg", function(it) {
  var middle = gs.map().add("x",150).add("y",150);
  gs.mc(this,"circle",[gs.map().add("cx",gs.gp(middle,"x")).add("cy",gs.gp(middle,"y")).add("r",145).add("fill","none").add("stroke","#000").add("strokeWidth",3)]);
  gs.mc(this,"circle",[gs.map().add("cx",gs.gp(middle,"x")).add("cy",gs.gp(middle,"y")).add("r",76).add("fill","none").add("stroke","#000").add("strokeWidth",1)]);
  var hourText = gs.mc(this,"text",[gs.map().add("x",gs.gp(middle,"x")).add("y",30).add("text","XII").add("fontSize","30px").add("text-anchor","middle").add("fill","#666")]);
  gs.sp(hourText,"verticalScale",2.4);
  var romanNumbers = gs.list(["I" , "II" , "III" , "IV" , "V" , "VI" , "VII" , "VIII" , "IX" , "X" , "XI"]);
  (11).times(function(val) {
    var newHour = gs.mc(hourText,"copy",[]);
    gs.sp(newHour,"text",(romanNumbers [ val]));
    return gs.mc(newHour,"rotateAndScale",[gs.multiply(30, (gs.plus(val, 1))), 2.4, gs.gp(middle,"x"), gs.gp(middle,"y")]);
  });
  var secondPoint = gs.mc(this,"circle",[gs.map().add("cx",gs.gp(middle,"x")).add("cy",13).add("r",3).add("fill","black").add("stroke","#000")]);
  (59).times(function(val) {
    return gs.sp(gs.mc(gs.mc(secondPoint,"copy",[]),"rotate",[gs.multiply(6, (gs.plus(val, 1))), gs.gp(middle,"x"), gs.gp(middle,"y")]),"r",((gs.plus(val, 1)) % 5 ? 2 : 3));
  });
  var hours = gs.mc(this,"rect",[gs.map().add("x",gs.minus(gs.gp(middle,"x"), 2)).add("y",65).add("width",4).add("height",85).add("fill","#000")]);
  var minutes = gs.mc(this,"rect",[gs.map().add("x",gs.minus(gs.gp(middle,"x"), 1)).add("y",40).add("width",2).add("height",110).add("fill","#000")]);
  var seconds = gs.mc(this,"rect",[gs.map().add("x",gs.minus(gs.gp(middle,"x"), 0.5)).add("y",13).add("width",1).add("height",150).add("fill","red")]);
  var rotateClockHands = function(it) {
    var nowValues = gs.mc(gs.mc(gs.mc(gs.date(),"format",["HH:mm:ss"]),"split",[":"]),"collect",[function(it) {
      return gs.mc(it,"toInteger",[]);
    }]);
    var hour = (nowValues [ 0]) % 12;
    var minute = nowValues [ 1];
    gs.mc(hours,"rotate",[gs.plus((gs.multiply(hour, 30)), (minute / 2)), gs.gp(middle,"x"), gs.gp(middle,"y")]);
    gs.mc(minutes,"rotate",[gs.multiply(minute, 6), gs.gp(middle,"x"), gs.gp(middle,"y")]);
    return gs.mc(seconds,"rotate",[gs.multiply((nowValues [ 2]), 6), gs.gp(middle,"x"), gs.gp(middle,"y")]);
  };
  (rotateClockHands.delegate!=undefined?gs.applyDelegate(rotateClockHands,rotateClockHands.delegate,[]):gs.execCall(rotateClockHands, this, []));
  return gs.mc(this,"repeat",[1000, rotateClockHands]);
});
