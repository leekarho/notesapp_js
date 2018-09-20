(function(exports){
  function SingleNote(note){
    this.note = note
  }

  SingleNote.prototype.showsSingleHtmlNote = function(){
    return "<div>" + this.note.returnText() + "</div>"
  }

  exports.SingleNote = SingleNote;

})(this);
