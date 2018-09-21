(function(exports){
  function NoteBookView(noteBook){
    this.noteBook = noteBook
  }

  NoteBookView.prototype.returnHtml = function(){
    var noteBookArray = this.noteBook.returnAllNotes();
    // var noteArray = noteBookArray.map(note => note._text.substring(0,20));
    string = "<ul>"
    noteBookArray.forEach(function(note) {
      string += (`<li><div><a href="#notes/${note._id}">${note._text.substring(0,20)}</a></div></li>`)
    })
    string += ("</ul>")
    return string;
    // return "<ul><li><div>" + noteArray.join("</div></li><li><div>") + "</div></li></ul>"
  };

  exports.NoteBookView = NoteBookView;

})(this);
