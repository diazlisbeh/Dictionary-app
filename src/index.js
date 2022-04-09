"use stict";
import getApi from './utils/getApi.js'
import getMean from './utils/getMean.js'
import getAudio from './utils/getAudio.js'

let word = prompt("Write a word") 
getApi(word)
  .then((res)=>console.log(res[0].word))
getApi(word)
  .then((res)=>console.log(res[0].phonetic))
getAudio(word)
  .then((res)=>console.log(res))
  
async function nose(){
 let h = await getMean(word)
  h.forEach(element => {
   //getting part of speech
    console.log(`<br>${element.partOfSpeech}</br>`)
    //getting definitions
    element.definitions.forEach(i=>{
      console.log(i.definition)
    })
    //getting synonyms
    element.synonyms.forEach((j)=>{
      console.log(j)
    })
    //getting antonyms
    element.antonyms.forEach((u)=>{
      console.log(u)
    })
    
  });
}



 nose();



