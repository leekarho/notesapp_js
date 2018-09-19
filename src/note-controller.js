(function(exports){
  function NoteController(notebook = new NoteBook){
    this.noteBook = notebook;
  };

  NoteController.prototype.addNote = function(text){
    this.noteBook.createNote(text);
  };

  NoteController.prototype.getsHtml = function(){
    var view = new NoteBookView(this.noteBook);
    document.getElementById("app").innerHTML = view.returnHtml();
  };

  exports.NoteController = NoteController;
})(this);
