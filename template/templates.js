

(function(){this.JST || (this.JST = {});this.JST["todo"] = function(context) { return HandlebarsTemplates["todo"](context); };this.HandlebarsTemplates || (this.HandlebarsTemplates = {});this.HandlebarsTemplates["todo"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  helpers = helpers || Handlebars.helpers;
  var buffer = "", stack1, self=this, functionType="function", helperMissing=helpers.helperMissing, undef=void 0, escapeExpression=this.escapeExpression;


  buffer += "<!--\nThis is a handlebars template.\nThis template will be transformed into a function by the handlebars\ncompiler.\n\nYou just have to include the result of the compilation\n`template/templates.js` into the `index.html` to access your templates via\nthe JST namespace.\n\n    JST[\"your-template-name\"]({ name: 'Hello', text: 'You rock !' });\n\nYou can use the following Handlebars JST compiler <https://github.com/wookiehangover/handlebars-jst>\n-->\n\n<h2>";
  stack1 = helpers.name || depth0.name
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "name", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</h2>\n<p>A custom paragraph here.</p>\n<p>";
  stack1 = helpers.text || depth0.text
  if(typeof stack1 === functionType) { stack1 = stack1.call(depth0, { hash: {} }); }
  else if(stack1=== undef) { stack1 = helperMissing.call(depth0, "text", { hash: {} }); }
  buffer += escapeExpression(stack1) + "</p>\n";
  return buffer;});}).call(this);