import getApi from "./getApi.js";

export default async function getMean(word){
  let proof;
await  getApi(word)  
     
    .then(data=>{
      if(data[0]){
        proof = data[0].meanings
      }else{proof = data}
    })
    .catch(error=>console.log(error))
  return proof
}