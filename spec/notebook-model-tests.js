var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed " + assertionToCheck + " is truthy");
    }
  }
}

function testNotebookInstantiate(){
  var noteBook = new NoteBook();

  assert.isTrue(noteBook.allNotes.length === 0);
}
testNotebookInstantiate();

function testCreateNote(){
  var noteBook = new NoteBook();
  noteBook.createNote("I love Javascript")

  assert.isTrue(noteBook.allNotes.length ===1);
}
testCreateNote();

function testReturnNoteBookNotes(){
  var noteBook = new NoteBook();
  noteBook.createNote("I love Javascript")

  var returnedNotes = noteBook.returnAllNotes();
  assert.isTrue (returnedNotes[0].returnText() === "I love Javascript");
}
testReturnNoteBookNotes();

function testUniqueID(){

}
testUniqueID();
