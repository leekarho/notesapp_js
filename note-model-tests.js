(function(exports){
  function testNoteTakesAnArgument(){
    var note = new Note("our first note");

    if (note.text !== "our first note") {
      throw new Error("note is empty")
    } else {
      console.log("This worked")
    }
  }
  testNoteTakesAnArgument();
})(this);
