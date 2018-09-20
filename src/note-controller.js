(function(exports){
  function NoteController(notebook = new NoteBook, view = NoteBookView){
    this.noteBook = notebook;
    this.view = new view(this.noteBook);
  };

  NoteController.prototype.addNote = function(text){
    this.noteBook.createNote(text);
  };

  NoteController.prototype.getsHtml = function(element){
    element.innerHTML = this.view.returnHtml();
  };

  exports.NoteController = NoteController;
})(this);
