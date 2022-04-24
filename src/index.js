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


meanings(word)
.catch(err=>console.log(err))







