xx.Router = Backbone.Router.extend({

  routes: {
    "":                     "home",    // index.html
    "search/:query":        "search",  // index.html#search/kiwis
    "search/:query/p:page": "search"   // index.html#search/kiwis/p7
  },

  initialize: function(){
    this.createSubView();
    this.renderSubView();
  },

  // instantiate views that will be used in the whole application.
  createSubView: function(){
    dc.view.todo = new dc.view.Todo();
    // ...
  },

  // insert the application views inside the DOM.
  renderSubView: function(){
    $('body').append(dc.view.todo.render().el);
    // ...
  },

  // Index page
  home: function() {
    // ...
  },

  // Search page
  search: function(query, page) {
    // ...
  }

});

$(function(){
  xx.router = new xx.Router();
  Backbone.history.start();
});
