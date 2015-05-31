import org.grooscript.asts.GsNative

/**
 * Created by jorgefrancoleza on 31/5/15.
 */

class Faker {
    private _faker

    @GsNative
    private faker() {/*
        if (!this._faker) {
            this._faker = require('faker');
        }
        return this._faker;
    */}

    @GsNative
    private nodeExports(map) {/*
        module.exports = function() {
            return gs.toJavascript(map);
        };
    */}

    private resolveConfig(value, counter) {
        if (value == 'inc') {
            return counter + 1
        } else {
            def path = value.split('.')
            if (path[0] == 'random') {
                return new Random().nextInt(Integer.parseInt(path[1]))
            } else {
                return faker()[path[0]][path[1]]()
            }
        }
    }

    void exports(String name, int number, Map configuration) {
        def list = []
        println "Exporting ${number} ${name}."
        number.times {
            list << configuration.inject([:]) { map, conf ->
                map[conf.key] = resolveConfig(conf.value, it)
                map
            }
        }
        nodeExports(["$name": list])
    }
}

new Faker().exports('authors', 100, [
        id: 'inc',
        name: 'name.firstName',
        city: 'address.city',
        image: 'image.image',
        birthDate: 'date.past',
        age: 'random.99'
])
