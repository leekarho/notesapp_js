(function(exports){
  function testNoteTakesAnArgument(){
    var note = new Note("our first note");

    if (note._text !== "our first note") {
      throw new Error("note is empty")
    } else {
      console.log("This worked")
    }
  }
  testNoteTakesAnArgument();
})(this);


(function(exports) {
  function testNoteReturnsText() {
    var note = new Note ("our first note");

    if (note.returnText() !== "our first note") {
      throw new Error("Did not match text")
    } else {
      console.log("returnText worked");
    }
  }

  testNoteReturnsText();
})(this);

(function(exports) {
  function testReturnUniqueID() {
    var note = new Note("our first note");
    var note2 = new Note("our second note");

    assert.isTrue(note._id !== note2._id)

  }

  testReturnUniqueID();
})(this);
