var gs = require('grooscript');
function Faker() {
  var gSobject = gs.inherit(gs.baseClass,'Faker');
  gSobject.clazz = { name: 'Faker', simpleName: 'Faker'};
  gSobject.clazz.superclass = { name: 'java.lang.Object', simpleName: 'Object'};
  gSobject._faker = null;
  gSobject.faker = function() {
    if (!this._faker) {
            this._faker = require('faker');
        }
        return this._faker;
  }
  gSobject.nodeExports = function(map) {
    module.exports = function() {
            return gs.toJavascript(map);
        };
  }
  gSobject['resolveConfig'] = function(value, counter) {
    if (gs.equals(value, "inc")) {
      return gs.plus(counter, 1);
    } else {
      var path = gs.mc(value,"split",["."]);
      if (gs.equals((path[0]), "random")) {
        return gs.mc(gs.random(),"nextInt",[parseInt(path[1])]);
      } else {
        return gs.execCall((gs.mc(gSobject,"faker",[])[(path[0])])[(path[1])], this, []);
      };
    };
  }
  gSobject['exports'] = function(name, number, configuration) {
    var list = gs.list([]);
    gs.println("Exporting " + (number) + " " + (name) + ".");
    gs.mc(number,"times",[function(it) {
      return gs.mc(list,'leftShift', gs.list([gs.mc(configuration,"inject",[gs.map(), function(map, conf) {
        (map[gs.gp(conf,"key")]) = gs.mc(gSobject,"resolveConfig",[gs.gp(conf,"value"), it]);
        return map;
      }])]));
    }]);
    return gs.mc(gSobject,"nodeExports",[gs.map().add("" + (name) + "",list)]);
  }
  if (arguments.length == 1) {gs.passMapToObject(arguments[0],gSobject);};
  
  return gSobject;
};
gs.mc(Faker(),"exports",["authors", 3, gs.map().add("id","inc").add("name","name.firstName").add("city","address.city").add("image","image.image").add("birthDate","date.past").add("age","random.99")]);
