(function(){ window.JST || (window.JST = {}) 
window.JST["README"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var foundHelper, self=this;


  return "Call a JST compiler inside this folder.\n\nAll your templates will be compiled into a single JS file.\n\nIf you use Handlebars template, you can use this JST compiler:\n<https://github.com/wookiehangover/handlebars-jst>\n\n    $ npm install -g handlebars-jst\n\n    $ cd template\n\n    $ tmpl\n";});
Handlebars.partials["README"] = window.JST["README"]
window.JST["todo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, foundHelper, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<!--\nThis is a handlebars template.\nThis template will be transformed into a function by the handlebars\ncompiler.\n\nYou just have to include the result of the compilation\n`template/templates.js` into the `index.html` to access your templates via\nthe JST namespace.\n\n    JST[\"your-template-name\"]({ name: 'Hello', text: 'You rock !' });\n\nYou can use the following Handlebars JST compiler <https://github.com/wookiehangover/handlebars-jst>\n-->\n\n<h2>";
  foundHelper = helpers.name;
  stack1 = foundHelper || depth0.name;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n<p>A custom paragraph here.</p>\n<p>";
  foundHelper = helpers.text;
  stack1 = foundHelper || depth0.text;
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n";
  return buffer;});
Handlebars.partials["todo"] = window.JST["todo"]
})();