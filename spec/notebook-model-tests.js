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
  var notebook = new Notebook();

  assert.isTrue(notebook.allNotes.length === 0);
}
testNotebookInstantiate();

function testCreateNote(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")

  assert.isTrue(notebook.allNotes.length ===1);
}
testCreateNote();

function testReturnNoteBookNotes(){
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")

  var returnedNotes = notebook.returnAllNotes();
  assert.isTrue (returnedNotes[0].returnText() === "I love Javascript");
}
testReturnNoteBookNotes();
