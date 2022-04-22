"use stict";
import getApi from './utils/getApi.js'
import getAudio from './utils/getAudio.js';
import meanings from './Components/meanings.js'

let screnWord = document.querySelector(".word-container__word");
let phonetics = document.querySelector(".word-container__phonectics");
const search = document.getElementById("search-button");
const input = document.getElementById("input-text")
const wordBody = document.getElementById("word-body")
const audio = document.querySelector(".audio")
let word = "hello"

function removeAllChidrens(){
    while(wordBody.firstChild){
        wordBody.removeChild(wordBody.firstChild)
    }
}
search.addEventListener("click",()=>{
    word = input.value
    console.log(input.value)
    screnWord.textContent = word
    removeAllChidrens()
    getApi(word)
    .then(res => phonetics.textContent = res[0].phonetic)
    .then(res=>screnWord.textContent = res[0].word)
    .catch(err=>console.log(err))

    getAudio(word)
    .then(res => audio.setAttribute("src",res))
    meanings(word)

})

getAudio(word)
.then(res => audio.setAttribute("src",res))

getApi(word)
.then(res=>screnWord.textContent = res[0].word)
.catch(err=>console.log(err))


getApi(word)
.then(res => phonetics.textContent = res[0].phonetic)
.catch(err=>console.log(err))


meanings(word)
.catch(err=>console.log(err))







