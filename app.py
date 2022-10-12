from flask import Flask, render_template, request, redirect, session, jsonify
from flask_debugtoolbar import DebugToolbarExtension 
from boggle import Boggle

app = Flask(__name__)
app.config['SECRET_KEY'] = "ml_sec"

# debug = DebugToolbarExtension(app)

# app.config['TEMPLATES_AUTO_RELOAD'] = True
# app.config['DEBUG_TB_INTERCEPT_REDIRECTS'] = False

boggle_game = Boggle() 
#This sets a variable which holds the Boggle class from boggle.py.

@app.route('/')
def show_board():
    # newboard = Boggle.make_board()
    # This didn't work because there is no "Boggle", only Zuul. 
    newboard = boggle_game.make_board()
#     # This worked because I called make_board on the variable set in 
#     # this file rather than trying to call the class itself.
    print(newboard)
#     # This of course prints the board to the server, not the HTML.
#     # If I pass it through and simply put {{ newboard }} in my html, it renders 
#     # a list of lists rather than a board, hence the need for a table.
    session["currboard"] = newboard
    currboard = session["currboard"]

    print(currboard)
#     # Setting newboard to session variable - didn't work initially because session wasn't imported.
   
    return render_template('boggle.html', newboard = newboard, currboard=currboard)


@app.route('/check-word')
def check():
    
    # You have to check the word guess against the board itself using the name="" attribute:
    word = request.args["word"]
    print(word)
    board = session["currboard"]
    print(board)
    response = boggle_game.check_valid_word(board, word)
    #Returning from the server uses JSON, so:
    return jsonify({'result': response})
    # return jsonify({'result': word})