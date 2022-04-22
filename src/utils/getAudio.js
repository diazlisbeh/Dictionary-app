export default async function getAudio(word){
    const url = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    let resolve;
    await fetch(url)
        .then((res=>res.json()))
        .then((data=>resolve = data[0].phonetics[1].audio))
        .catch(err=> console.log(err))

        return resolve
    
}