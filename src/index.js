"use stict";
import getApi from './utils/getApi.js'
import getMean from './utils/getMean.js'
import getAudio from './utils/getAudio.js'

import meanings from './Components/meanings.js'

let screnWord = document.querySelector(".word-container__word");
let phonetics = document.querySelector(".word-container__phonectics");
let word = prompt("type a word in English")

getApi(word)
.then(res=>screnWord.textContent = res[0].word)

getApi(word)
.then(res => phonetics.textContent = res[0].phonetic)


meanings(word)








