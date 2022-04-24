import getMean from '../utils/getMean.js'



const wordBody = document.querySelector("#word-body")



export default async function meanings(word){
    let resolve;
    
    await getMean(word)
    .then(res => resolve = res)
    .catch(err => console.log(err))
        
    resolve.map(i =>{
      
        let part = document.createElement("h3");
        wordBody.appendChild(part)
        part.textContent = i.partOfSpeech
    
        i.definitions.map(j=>{

            let def = document.createElement("p")
            wordBody.appendChild(def)
            def.textContent = j.definition
        })
    
        if(i.synonyms.length >0){
            let synonyms = document.createElement("h3")
            wordBody.appendChild(synonyms)
            synonyms.textContent = "Synonyms"
            let ul = document.createElement("ul")
            wordBody.appendChild(ul)

            i.synonyms.map(s=>{
                let li = document.createElement("li")
                ul.appendChild(li)
                li.textContent =s
            })
        }    
        if(i.antonyms.length >0){
            let antonyms = document.createElement("h3")
            wordBody.appendChild(antonyms)
            antonyms.textContent = "Antonyms"
            let ul = document.createElement("ul")
            wordBody.appendChild(ul)

            i.antonyms.map(s=>{
                let li = document.createElement("li")
                ul.appendChild(li)
            })

        }


    })    

    

    
}