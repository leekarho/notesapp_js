(function(exports){

  var idcounter = 0

  function Note(text) {
    this._text = text;
    this.id = idcounter++;
  }

  Note.prototype.returnText = function() {
    return this._text;
  }

  Note.prototype.returnUniqueID = function(){
    return this.id
  }

 exports.Note = Note;
})(this);
