//Grooscript converted file
function GamePresenter() {
  var gSobject = gs.init('GamePresenter');
  gSobject.clazz = { name: 'game.GamePresenter', simpleName: 'GamePresenter'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.game = null;
  gSobject.allowMove = true;
  gSobject['init'] = function(it) {
    gSobject.game = Game();
    gs.mc(gs.mc(this,"$",["#result"], gSobject),"html",[""]);
    return gs.mc(gSobject,"drawGame",[]);
  }
  gSobject['drawGame'] = function(it) {
    return gs.mc(gs.mc(this,"$",["#gameTable"], gSobject),"html",[gs.fs('htmlFromGame', this, gSobject)]);
  }
  gSobject['getHtmlFromGame'] = function(it) {
    return gs.execStatic(HtmlBuilder,'build', this,[function(it) {
      return gs.mc(this,"table",[gs.map().add("class","table"), function(it) {
        return gs.mc(gs.gp(gSobject.game,"rows"),"each",[function(row) {
          return gs.mc(this,"tr",[function(it) {
            return gs.mc(row,"each",[function(cell) {
              return gs.mc(this,"td",[gs.map().add("class","cell"), function(it) {
                return gs.mc(this,"p",["" + (gs.elvis(gs.bool(gs.gp(cell,"value")) , gs.gp(cell,"value") , "")) + ""], gSobject);
              }], gSobject);
            }]);
          }], gSobject);
        }]);
      }], gSobject);
    }]);
  }
  gSobject['move'] = function(adress) {
    if (gs.bool(gSobject.allowMove)) {
      gs.mc(gSobject.game,"move" + (gs.mc(adress,"capitalize",[])) + "",[]);
      if (gs.mc(gSobject.game,"isFull",[])) {
        gSobject.allowMove = false;
        gs.mc(gs.mc(this,"$",["#result"], gSobject),"html",["<h2>You have lost</h2>"]);
      } else {
        if (gs.mc(gSobject.game,"isDone",[])) {
          gSobject.allowMove = false;
          gs.mc(gs.mc(this,"$",["#result"], gSobject),"html",["<h2>Congratulations, you have finished!</h2>"]);
        } else {
          gs.mc(gSobject.game,"addRandomNumber",[]);
        };
      };
      return gs.mc(gSobject,"drawGame",[]);
    };
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
