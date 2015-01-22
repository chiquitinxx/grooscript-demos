//Grooscript converted file
function CountriesPresenter() {
  var gSobject = gs.inherit(gs.baseClass,'CountriesPresenter');
  gSobject.clazz = { name: 'countries.CountriesPresenter', simpleName: 'CountriesPresenter'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject.countries = null;
  gSobject.customSigma = null;
  gSobject.gQuery = null;
  gSobject.purpleColor = "#b0b";
  gSobject.greyColor = "#aaa";
  gSobject['start'] = function(it) {
    gSobject.countries = gs.mc(gs.mc(gs.mc(gSobject,"loadCountries",[]),"findAll",[function(it) {
      return (gs.gp(it,"population") > 100000) && (gs.gp(it,"alpha3Code") != "COD");
    }]),"unique",[function(it) {
      return gs.gp(it,"alpha3Code");
    }]);
    gs.mc(gSobject.countries,"each",[function(country) {
      return gs.mc(gSobject.customSigma,"addNode",[gs.map().add("id",gs.gp(country,"alpha3Code")).add("label",gs.gp(country,"name")).add("x",gs.gp(country,"latlng")[1]).add("y",gs.gp(country,"latlng")[0]).add("color",gSobject.purpleColor)]);
    }]);
    gs.mc(gSobject.countries,"each",[function(country) {
      return gs.mc(gs.gp(country,"borders"),"each",[function(border) {
        if (gs.mc(gSobject.countries,"find",[function(it) {
          return gs.equals(gs.gp(it,"alpha3Code"), border);
        }]) != null) {
          return gs.mc(gSobject.customSigma,"addEdge",[gs.plus(gs.gp(country,"alpha3Code"), border), gs.gp(country,"alpha3Code"), border]);
        };
      }]);
    }]);
    gs.mc(gSobject,"updateNumberCountries",[gs.mc(gSobject.countries,"size",[])]);
    return gs.mc(gSobject.customSigma,"refresh",[]);
  }
  gSobject['onChangeCountry'] = function(searchString) {
    var listMatches = gs.list([]);
    if (gs.bool(searchString)) {
      gs.mc(gSobject.customSigma,"applyToNodes",[function(node) {
        if (gs.mc(gs.mc(gs.gp(node,"label"),"toUpperCase",[]),"contains",[gs.mc(searchString,"toUpperCase",[])])) {
          gs.sp(node,"color",gSobject.purpleColor);
          return gs.mc(listMatches,'leftShift', gs.list([node]));
        } else {
          return gs.sp(node,"color",gSobject.greyColor);
        };
      }]);
      gs.mc(gSobject,"updateNumberCountries",[gs.mc(listMatches,"size",[]), (gs.mc(listMatches,"size",[]) < 5 ? gs.mc(gs.mc(listMatches,"collect",[function(it) {
        return gs.gp(it,"label");
      }]),"join",[", "]) : "")]);
    } else {
      gs.mc(gSobject.customSigma,"applyToNodes",[function(node) {
        return gs.sp(node,"color",gSobject.purpleColor);
      }]);
      gs.mc(gSobject,"updateNumberCountries",[gs.mc(gSobject.countries,"size",[])]);
    };
    if ((gs.bool(listMatches)) && (gs.equals(gs.mc(listMatches,"size",[]), 1))) {
      var node = gs.mc(listMatches,"first",[]);
      gs.mc(gSobject.customSigma,"moveCamaraToNode",[node]);
    } else {
      gs.mc(gSobject.customSigma,"moveCamaraTo",[0, 0, 1]);
    };
    return gs.mc(gSobject.customSigma,"refresh",[]);
  }
  gSobject['updateNumberCountries'] = function(number, message) {
    if (message === undefined) message = "";
    return gs.mc(gs.mc(gSobject,"gQuery",["#searchResult"]),"html",["" + (number) + " found. " + (message) + ""]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
