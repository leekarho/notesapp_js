(function(exports){
  function NoteBook(){
    this.allNotes = [];
    // this._note = Note
  }

  NoteBook.prototype.createNote = function(text){
    this.allNotes.push(new Note(text));
  }

  NoteBook.prototype.returnAllNotes = function() {
    return this.allNotes;
  }

  exports.NoteBook = NoteBook;
})(this);
