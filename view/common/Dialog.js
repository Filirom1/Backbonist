xx.view.Dialog = Backbone.View.extend({

  className : 'dialog',

  options : {
    title       : "Untitled Dialog",
    text        : null
  },

  events : {
    'click .cancel'   : 'cancel',
    'click .ok'       : 'confirm'
  },

  render : function(opts) {
    return this;
  },

  title : function(title) {
    this.$('.title').text(title);
  },

  cancel : function() {
    if (this.options.onCancel) this.options.onCancel(this);
    this.close();
  },
});

_.extend(xx.view.Dialog, {

  alert : function(text, options) {
    return new xx.view.Dialog(_.extend({
      mode      : 'alert',
      title     : null,
      text      : text
    }, options)).render();
  },

  prompt : function(text, content, callback, options) {
    var onConfirm = callback && function(dialog){ return callback(dialog.val(), dialog); };
    return new xx.view.Dialog(_.extend({
      mode      : 'prompt',
      title     : text,
      text      : '',
      content   : content,
      onConfirm : onConfirm
    }, options)).render();
  },

  confirm : function(text, callback, options) {
    return new xx.view.Dialog(_.extend({
      mode      : 'confirm',
      title     : null,
      text      : text,
      onConfirm : callback
    }, options)).render();
  },

  choose : function(text, choices, callback, options) {
    return new xx.view.Dialog(_.extend({
      mode      : 'prompt',
      title     : text,
      choices   : choices,
      text      : '',
      onConfirm : callback && function(dialog){ return callback(dialog.val()); }
    }, options)).render();
  },

  progress : function(text, options) {
    return new xx.view.Dialog(_.extend({
      mode  : 'progress',
      text  : text,
      title : null
    }, options)).render();
  }

});
