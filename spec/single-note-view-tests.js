var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed " + assertionToCheck + " is truthy");
    }
  }
}

function testSingleNote(){
  var text = "Favourite drink: seltzer"
  var note = new Note(text);
  var singleNote = new SingleNote(note);

  assert.isTrue(singleNote.showsSingleHtmlNote() === "<div>Favourite drink: seltzer</div>")
}

testSingleNote();
