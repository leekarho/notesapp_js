var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed " + assertionToCheck + " is truthy");
    }
  }
}

function testReturnsHtml(){

  var noteBook = new NoteBook()
  noteBook.createNote('test 1')
  noteBook.createNote('test 2')
  var noteBookView = new NoteBookView(noteBook)

  assert.isTrue((noteBookView.noteBook) === noteBook)

  assert.isTrue(noteBookView.returnHtml() === "<ul><li><div>test 1</div></li><li><div>test 2</div></li></ul>")
}
testReturnsHtml();
