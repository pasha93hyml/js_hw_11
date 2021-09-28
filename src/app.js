import _ from 'lodash';
import { alert, error, defaultModules, defaults } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/Material.css';
import './styles.css'
import templateCountries from './templates/countries.hbs'
import templateCountry from './templates/country.hbs'
import Search from './js/searchClass.js'
import refs from './js/refs.js'
defaults.styling = 'material'
defaults.delay = 2000


new Search(refs, 'https://restcountries.com/v2/name/').addListeners()









// import template from './templates/menu-template.handlebars'
// const markup = template(data);
// refs.menu.innerHTML = markup;



// console.log(divRef);
// searchInputRef.addEventListener('input', _.debounce(searchCountry, 1000))

// function searchCountry(event) {
//     let value = event.target.value;
//     fetchDataFromInput(value);
// }

// function fetchDataFromInput(value) {
//     return fetch(`https://restcountries.com/v2/name/${value}`)
//     .then(res => res.json())
//     .then(countries => {
//         console.log(countries);
//         let len = countries.length;
//         if(len > 10) {
//             const Myerror = error({
//                 text: 'Нашло слишком много стран, уточните поиск...'
//             })
//             return;
//         }
//         if(len > 1 && len < 10) {
//             const markup = templateCountries(countries)
//             divRef.insertAdjacentHTML('beforeend', markup)
//             console.log(markup);
//         }
//         if(len === 1) {
//             const markup = templateCountry(countries)
//             document.body.insertAdjacentHTML('beforeend', markup)
//         }
//     }).catch(err => {
//         const myErr = error({
//             text: err
//         })
//     });
// }

