(function(exports){
  function NotebookView(notebook){
    this.notebook = notebook
  }

  NotebookView.prototype.returnHtml = function(){
    var allNotes = this.notebook.returnAllNotes();
    var joined = allNotes.join("</li><li>")
    var allNotesJoined = "<li>" + joined + "</li>"
    return allNotesJoined

  }

  exports.NotebookView = NotebookView;
})(this);
