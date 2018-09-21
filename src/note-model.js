(function(exports){

  var id = 0;

  function Note(text) {
    this._text = text;
    this._id = id++;
  }

  Note.prototype.returnText = function() {
    return this._text;
  }

 exports.Note = Note;
})(this);
