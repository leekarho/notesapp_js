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

  var noteBook = new NoteBook
  var noteBookView = new NoteBookView(noteBook)
  noteBook.createNote("123456789012345678901234")
  noteBook.createNote('test 2')

  assert.isTrue((noteBookView.noteBook) === noteBook)

  assert.isTrue(noteBookView.returnHtml() === "<ul><li><div>12345678901234567890</div></li><li><div>test 2</div></li></ul>")
};
testReturnsHtml();
