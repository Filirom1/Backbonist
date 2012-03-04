Backbonist Style
================

WORK IN PROGRESS

Backbonist Style is a Minimalist Backbone BoilerPlate.
Yet an other Boilerplate for Backbone, like other boilerplates don't
take it too seriously.

Greatly inspired from [DocumentCloud sources](https://github.com/documentcloud/documentcloud/tree/master/public/javascripts) and [HTML5 BoilerPlate](http://html5boilerplate.com/)


### Clone

    git clone https://Filirom1@github.com/Filirom1/Backbonist.git .


### Choose your namespace

Look at application.js. By default the namespace is `xx`.
You can change it on Linux and Unix with a `sed` command:

    cd Backbonist
    find . -exec sed -i "s/xx/YOUR-NAMESPACE-HERE/g" {} \;


### Create your template

You want to create a web application, the first thing you need to do is
an HTML.

This takes place in the template folder.

Create an HTLM file with the `.jst` extension.
If you want to do some templating, choose a template compiler that is working with
JST :

* Handlebars : <https://github.com/wookiehangover/handlebars-jst>
* jQuery Tmpl, Handlebars, Underscore or pure string : <https://github.com/Filirom1/universal-jst>

But what is JST ?

JST means JavaScript Template, JST compile all your HTML into a
JavaScript file. Then you will be able to access your compiled templates
using the JST namespace :

    JST["your-template-name"]({name: "toto", age: "23", color: "red"});

Take a look inside the `template` folder.


### Create your Views

In Backbone Views are jsut some glue between the HTML template and user
interaction.

The simplest view in Backbone populate a template inside the `el`
attribute.

Take a look at the `view` folder.


### Edit your routes

Now that you have several views, you want to do a Single Page Web App
and make some views appear or disappear.

You will also want some views to be rendered during all the application.

Take a look at the `Router.js` file.


### Create your Models and Collections

Communicate between views using the views instances.

TODO

### Create your Models and Collections

It's time to make your aplication dynamic, call some remote JSON
files then show the result into custom views.

Like you have objects and arrays in JSON, you will have Models and Collections of Models.

For more information about Model and Collections, read the official
website : <http://documentcloud.github.com/backbone/>

In Backbonist, model and views are available in the `model` folder.


### Create jQuery and Backbone Plugins

To write DRY code you will have to avoid duplication.

That's why it's a good idea to extend jQuery with any function that is
relative to the DOM.

Look at `lib/jquery.plugin.js`


Extend Backbone with any function that is
relative to Views, Model, Collections, Events, ...

Look at `lib/Backbone.plugin.js`


### Create utils functions

In an application there is always very basic function but very
usefull: utils functions.

If what you want to do is not in [underscore](http://documentcloud.github.com/underscore/), create your own utilities functions in `lib/util.js`

### Add tests

TODO
