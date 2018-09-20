(function(exports){
  function NoteBookView(noteBook){
    this.noteBook = noteBook
  }

  NoteBookView.prototype.returnHtml = function(){
    var noteBookArray = this.noteBook.returnAllNotes();
    var noteArray = noteBookArray.map(note => note._text.substring(0,20));
    return "<ul><li><div>" + noteArray.join("</div></li><li><div>") + "</div></li></ul>"
  };

  exports.NoteBookView = NoteBookView;

})(this);
