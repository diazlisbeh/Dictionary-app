"use stict";
import getApi from './utils/getApi.js'
import getAudio from './utils/getAudio.js';
import meanings from './Components/meanings.js'
import getMean from './utils/getMean.js';

let screnWord = document.querySelector(".word-container__word");
let phonetics = document.querySelector(".word-container__phonectics");
const search = document.getElementById("search-button");
const input = document.getElementById("input-text")
const wordBody = document.getElementById("word-body")
const audio = document.querySelector(".audio")
let word = "hello"
const icon = document.getElementById("word-container__icon")

icon.addEventListener("click", playaudio)

function playaudio(){
    audio.play()
}


function removeAllChidrens(){
    while(wordBody.children[0].firstChild){
        wordBody.children[0].removeChild(wordBody.children[0].firstChild)
    }
   while(wordBody.children[1].firstChild){
        wordBody.children[1].removeChild(wordBody.children[1].firstChild)
   } 
}
search.addEventListener("click",()=>{
    word = input.value
    console.log(input.value)
    screnWord.textContent = input.value
    removeAllChidrens()
    
    getApi(word)
    .then(res =>phonetics.textContent = res[0].phonetics[1].text)
    .catch(err=>console.log(err))
    
    getAudio(word)
    .then(res => audio.setAttribute("src",res))
    
    meanings(word)
})

screnWord.textContent = word;

getApi(word)
.then(res =>phonetics.textContent = res[0].phonetics[1].text)
.catch(err=>console.log(err))


    getAudio(word)
    .then(res => audio.setAttribute("src",res))
meanings(word)
.catch(err=>console.log(err))







