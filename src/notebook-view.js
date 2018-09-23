(function(exports){
  function NoteBookView(noteBook){
    this.noteBook = noteBook
  }

  NoteBookView.prototype.returnHtml = function(){
    var noteBookArray = this.noteBook.returnAllNotes();
    string = "<ul>"
    noteBookArray.forEach(function(note) {
      string += (`<li><div><a href="#notes/${note._id}">${note._text.substring(0,20)}</a></div></li>`)
    })
    string += ("</ul>")
    return string;
  };

  exports.NoteBookView = NoteBookView;

})(this);
