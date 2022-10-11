console.log("I am here")
// Checking link between app.py and boggle.js



    
// const guput = document.getElementsByClassName("guess")
// const guval = guput[0]
 

// async function asyncCall(evt) {
//   // evt.preventDefault;
//   console.log(guput);
//   const result = await console.log(guval);
//   // console.log(result);
//   // expected output: "resolved"
// }

// asyncCall();


wordlist = new Set()
wordlist.add('tank')

async function handleSubmit(event) {
  event.preventDefault();
const gubut = document.querySelector("#gubut");
const $guval = $(".uguess");
const $entry = $guval[0].value.toLowerCase()
  console.log(event) 
  console.log(gubut) 
  console.log($entry) 
//   event.preventDefault();
//   const $word = $(".word", this.board);

//   let word = $word.val();
  if (!$entry) return;

  if (wordlist.has($entry)) {
    function showMessage(`Already found ${$entry}`, "err");
    showMessage();
    return;
  }

//   // check server for validity
//   const resp = await axios.get("/check-word", { params: { word: word }});
//   if (resp.data.result === "not-word") {
//     this.showMessage(`${word} is not a valid English word`, "err");
//   } else if (resp.data.result === "not-on-board") {
//     this.showMessage(`${word} is not a valid word on this board`, "err");
//   } else {
//     this.showWord(word);
//     this.score += word.length;
//     this.showScore();
//     this.words.add(word);
//     this.showMessage(`Added: ${word}`, "ok");
//   }

//   $word.val("").focus();
}
 
gubut.addEventListener("click", handleSubmit) 

