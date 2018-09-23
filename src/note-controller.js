(function(exports){
  function NoteController(notebook = new NoteBook, view = NoteBookView){
    this.noteBook = notebook;
    this.view = new view(this.noteBook);
  };

  NoteController.prototype.addNote = function(text){
    this.noteBook.createNote(text);
  };

  NoteController.prototype.getsHtml = function(element = document.getElementById("app")){
    element.innerHTML = this.view.returnHtml();
  };

  NoteController.prototype.showNote = function(note) {
    document.getElementById("app").innerHTML = note;
  };

  NoteController.prototype.getNoteIDFromUrl = function(location){
    return location.hash.split('#notes/')[1]
  };

  NoteController.prototype.showNoteForCurrentPage = function(){
    this.showNote(this.getNoteIDFromUrl(window.location));
  };

  NoteController.prototype.singleNotePage = function() {
    window.addEventListener("hashchange", this.showNoteForCurrentPage());
  };

  exports.NoteController = NoteController;
})(this);
