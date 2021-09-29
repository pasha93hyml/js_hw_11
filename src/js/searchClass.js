import _ from 'lodash';
import { error } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import templateCountries from '../templates/countries.hbs'
import templateCountry from '../templates/country.hbs'

export default class Search {
    constructor({input, countriesData, root}, URL) {
        this.input = input;
        this.countriesData = countriesData;
        this.URL = URL;
        this.root = root;
    }

    addListeners = () => {
        addEventListener('input', _.debounce(this.searchCountry, 1000))
    }

    searchCountry = (event) => {
        this.countriesData.innerHTML = '';
        let value = event.target.value;
        if (!value.length) {
            this.root.innerHTML = '';
            return;
        }
        this.fetchDataFromInput(value);
    }

    fetchDataFromInput = (value) => {
        return fetch(this.URL + value)
        .then(res => res.json())
        .then(this.renderMarkup).catch(err => {
            const myErr = error({
                text: `${err}`
            })
        });
    }

    renderMarkup = countries => {
        console.log(countries);
        if (countries.status === 404) {
            const Myerror = error({
                text: 'Ничего не нашлось по вашему запросу (404)'
            })
        }
        let len = countries.length;
        if(len > 10) {
            this.root.innerHTML = '';
            const Myerror = error({
                text: 'Нашло слишком много стран, уточните поиск...'
            })
            return;
        }
        if(len > 1) {
            const markup = templateCountries(countries)
            this.countriesData.innerHTML = markup;
            return
        }
        if(len === 1) {
            this.root.innerHTML = '';
            const markup = templateCountry(countries)
            this.root.innerHTML = markup;
        }
    }
}