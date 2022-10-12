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
// wordlist.add('tank')

async function handleSubmit(event) {
  event.preventDefault();
const clmsg = document.getElementById("clmsg")
const clent = document.getElementById("clent")
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
    clmsg.append(`Already found ${$entry}`, " err");
    return;
  }

  const resp = await axios.get("/check-word", { params: { word: $entry }});

  if (resp.data.result === "not-word") {
    clmsg.append(`${$entry} is not a valid English word`, " err");
  } 
  else if 
  (resp.data.result === "not-on-board") {
    clmsg.append(`${$entry} is not a valid English word on this board`, " err");
  } 
  else 
  {
    clent.append($entry);
    // this.showWord(word);
    // this.score += word.length;
    // this.showScore();
    // this.words.add(word);
    clmsg.append(`${$entry} added to your score`, " ok");
  }
  console.log(resp)

  // $word.val("").focus();
}
 
gubut.addEventListener("click", handleSubmit) 

