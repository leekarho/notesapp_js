(function(exports){
  function NoteBookView(noteBook){
    this.noteBook = noteBook
  }

  NoteBookView.prototype.returnHtml = function(){

    var noteBookArray = this.noteBook.returnAllNotes()
    var noteArray = noteBookArray.map(note => note._text);
    console.log(this.noteBook.returnAllNotes())
    return "<ul><li><div>" + noteArray.join("</div></li><li><div>") + "</div></li></ul>"
  }

  exports.NoteBookView = NoteBookView;
})(this);
