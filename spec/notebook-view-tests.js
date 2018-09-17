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
  var notebook = new Notebook();
  notebook.createNote("I love Javascript")
  notebook.createNote("I love Ruby")
  var htmlString = "<li>I love Javascript</li><li>I love Ruby</li>"
  var notebookView = new NotebookView(notebook);

  assert.isTrue(notebookView.returnHtml === htmlString);
}
testReturnsHtml();
