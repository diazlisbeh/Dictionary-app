import getApi from "./getApi.js";

export default async function getMean(word){
  let proof;
await  getApi(word)  

    .then(data=>{proof =  data[0].meanings})
    .catch(error=>console.log(error))
  return proof
}