const inputEl = document.getElementById("input");
const infoTextEl = document.getElementById("info-text");
const meaningCont = document.getElementById("meaning-container");
const titleEl = document.getElementById("title");
const meaningEl = document.getElementById("meaning");
const audioEl = document.getElementById("audio");


async function fetchAPI(word) {
    try {
        infoTextEl.style.display="block";
        meaningCont.style.display="none"
        infoTextEl.innerText=`Searching teh meaning of ${word}`;
        let api = `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`;
        const result = await fetch(api).then((res) => res.json());


            infoTextEl.style.display="none";
            meaningCont.style.display="block"
            audioEl.style.display="inline-flex";
            titleEl.innerText=result[0].word;
            meaningEl.innerText=result[0].meanings[0].definitions[0].definition;
            audioEl.src=result[0].phonetics[0].audio;
        
    } catch (error) {
        titleEl.innerText=word;
        meaningEl.innerText="N/A"
        audioEl.style.display="none";
        console.log(error);
    }
    
}

inputEl.addEventListener('keyup', (e)=>{
    if(e.target.value && e.key==="Enter"){
        fetchAPI(e.target.value);
    }
})