(function(exports){
  function testNotebookInstantiate(){
    var notebook = new Notebook();

    if (notebook.allNotes.length > 0) {
      throw new Error("notebook is not empty")
    } else {
      console.log("it worked - notebook is empty")
    }
  }
  testNotebookInstantiate();
})(this);
