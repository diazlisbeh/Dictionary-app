export default async function getMean(word){
  let proof;
  await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
    .then(res=> res.json())
    .then(data=>{proof =  data[0].meanings})
    .catch(error=>console.log(error))
  return proof
}