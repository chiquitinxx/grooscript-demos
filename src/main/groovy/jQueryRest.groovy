import rest.JQueryRestApi

class Author implements JQueryRestApi {
    Long id
    String name
    String city
    String image
    int age

    String toString() {
        "id: ${id} name: ${name}"
    }
}

def onError = { jqXHR, status ->
    println "Error jqXHR: ${jqXHR} status: ${status}"
}

Author.url = 'http://localhost:3000'
Author.resource ='authors'

def api = new Author()
api.one(1, { data ->
    def author = new Author(data)
    println "Success one: ${author}"
}, onError)
api.all({ authors ->
    println "Success all: ${authors.size()}"
    authors.findAll { it.image }.each {
        $('body').append("<img src='${it.image}'/>")
    }
}, onError)

def newAuthor = new Author(name: "Jorge Franco", city: "Madrid / Sevilla", image: "img/logo.png")
newAuthor.add({ data ->
    println "Success add: ${data.id}"
    api.all({ authors ->
        println "Success after insert ${data.name}: ${authors.size()}"
    }, onError)
}, onError)