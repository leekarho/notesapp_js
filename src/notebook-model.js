(function(exports){
  function NoteBook(){
    this.allNotes = [];
    this.note = Note
  }

  NoteBook.prototype.createNote = function(text){
    this.allNotes.push(new this.note(text));
  }

  NoteBook.prototype.returnAllNotes = function() {
    return this.allNotes;
  }

  exports.NoteBook = NoteBook;
})(this);
