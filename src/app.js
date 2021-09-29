import { defaults } from '@pnotify/core';
import './styles.css'
import Search from './js/searchClass.js'
import refs from './js/refs.js'
defaults.styling = 'material'
defaults.delay = 2000


new Search(refs, 'https://restcountries.com/v2/name/').addListeners()