import getMean from '../utils/getMean.js'



const wordBody = document.querySelector("#word-body")
const definitionBody = wordBody.children[0]

export default async function meanings(word){
    let resolve;
    
    await getMean(word)
    .then(res => resolve = res)
    .catch(err => console.log(err))
     if(resolve[0]){   
    resolve.map(i =>{
      
        let part = document.createElement("h3");
        part.classList.add("part-of-speech")
        definitionBody.appendChild(part)
        part.textContent = i.partOfSpeech
    
        i.definitions.map(j=>{

            let def = document.createElement("p")
            def.classList.add("definition-paragraf")
            definitionBody.appendChild(def)
            def.textContent = `- ${j.definition}`
        })
    
        if(i.synonyms.length){
            let synonyms = document.createElement("h3")
            wordBody.children[1].appendChild(synonyms)
            synonyms.textContent = "Synonyms"
            let ul = document.createElement("ul")
            wordBody.children[1].appendChild(ul)

            i.synonyms.map(s=>{
                let li = document.createElement("li")
                ul.appendChild(li)
                li.textContent =s
            })
        }    
        if(i.antonyms.length){
            let antonyms = document.createElement("h3")
            wordBody.children[1].appendChild(antonyms)
            antonyms.textContent = "Antonyms"
            let ul = document.createElement("ul")
            wordBody.children[1].appendChild(ul)

            i.antonyms.map(s=>{
                let li = document.createElement("li")
                ul.appendChild(li)
            })

        }


    })}
    
    else{
        let error = document.createElement("h2")
        wordBody.children[0].appendChild(error)
        error.textContent = resolve.title
        let text1 = document.createElement("p")
        let text2 = document.createElement("p")
        wordBody.children[0].appendChild(text1)
        wordBody.children[0].appendChild(text2)
        text1.textContent = resolve.message
        text2.textContent = resolve.resolution
    }    

    

    
}