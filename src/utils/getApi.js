export default async function getApi(word){
  let proof;
  let status;
  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res=> res.json())
    .then(data=>{proof =  data})
  
    .catch(error=>{console.log(error)})
  
  
  
  
    return proof
}












