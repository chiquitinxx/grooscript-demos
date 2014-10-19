package countries

import groovy.json.JsonSlurper
import org.grooscript.asts.GsNotConvert
import org.grooscript.jquery.GQuery

/**
 * User: jorgefrancoleza
 * Date: 19/10/14
 */
class CountriesPresenter {

    def countries
    CustomSigma customSigma
    GQuery gQuery

    def purpleColor = '#b0b'
    def greyColor = '#aaa'

    @GsNotConvert
    def loadCountries() {
        new JsonSlurper().parseText(new File('src/test/resources/miniCountries.json').text)
    }

    def start() {
        countries = loadCountries().
                findAll { it.population > 100000 && it.alpha3Code != 'COD' }.
                unique { it.alpha3Code }
        countries.each { country ->
            customSigma.addNode id: country.alpha3Code, label: country.name,
                    x: country.latlng[1], y: country.latlng[0], color: purpleColor
        }
        countries.each { country ->
            country.borders?.each { border ->
                if (countries.find { it.alpha3Code == border} != null) {
                    customSigma.addEdge((country.alpha3Code + border), country.alpha3Code, border)
                }
            }
        }
        updateNumberCountries countries.size()
        customSigma.refresh()
    }

    def onChangeCountry(searchString) {
        def listMatches = []
        if (searchString) {
            customSigma.applyToNodes { node ->
                if (node.label.toUpperCase().contains(searchString.toUpperCase())) {
                    node.color = purpleColor
                    listMatches << node
                } else {
                    node.color = greyColor
                }
            }
            updateNumberCountries listMatches.size(),
                    listMatches.size() < 5 ? listMatches.collect { it.label }.join(', ') : ''
        } else {
            customSigma.applyToNodes { node ->
                node.color = purpleColor
            }
            updateNumberCountries countries.size()
        }
        if (listMatches && listMatches.size() == 1) {
            def node = listMatches.first()
            customSigma.moveCamaraToNode node
        } else {
            customSigma.moveCamaraTo 0, 0, 1
        }
        customSigma.refresh()
    }

    private updateNumberCountries(number, message = '') {
        gQuery.html('#searchResult', "${number} found. ${message}")
    }
}
