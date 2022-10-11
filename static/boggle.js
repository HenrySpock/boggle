console.log("I am here")
// Checking link between app.py and boggle.js



    
 

async handleSubmit(evt) {
    evt.preventDefault();
    const $guess = $(".guess", this.board);

    let guess = $guess.val();
    if (!guess) return;

    if (this.words.has(guess)) {
      this.showMessage(`Already found ${guess}`, "err");
      return;
    }

    // check server for validity
    const resp = await axios.get("/check-word", { params: { word: guess }});
    if (resp.data.result === "not-word") {
      this.showMessage(`${guess} is not a valid English word`, "err");
    } else if (resp.data.result === "not-on-board") {
      this.showMessage(`${guess} is not a valid word on this board`, "err");
    } else {
      this.showWord(guess);
      this.score += guess.length;
      this.showScore();
      this.words.add(guess);
      this.showMessage(`Added: ${guess}`, "ok");
    }

    $guess.val("").focus();
  }

board.on("submit", this.handleSubmit.bind(this))