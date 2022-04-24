import getApi from "./getApi.js";

export default async function getAudio(word){
    let resolve;
    await getApi(word)
        .then((data=>resolve = data[0].phonetics[1].audio))
        .catch(err=> console.log(err))
        

        return resolve
    
}