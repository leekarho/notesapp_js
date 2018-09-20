var assert = {
  isTrue: function(assertionToCheck) {
    if (!assertionToCheck) {
      throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
    } else {
      console.log("Test passed " + assertionToCheck + " is truthy");
    }
  }
}

function NoteBookDouble(){}

NoteBookDouble.prototype = {
  createNote: function(){}
};

function NoteBookViewDouble(){}

NoteBookViewDouble.prototype.returnHtml = function(){
  return "test note"
};

function testGetsHtml(){
  var noteBookDouble = new NoteBookDouble;
  var testController = new NoteController(noteBookDouble, NoteBookViewDouble);
  var mockElement = {
    innerHTML: ""};
  testController.getsHtml(mockElement)
  assert.isTrue(mockElement.innerHTML === "test note");
};

testGetsHtml();
