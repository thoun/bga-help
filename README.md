# Links
[Documentation](https://thoun.github.io/bga-help/docs/index.html)

[Demo](https://thoun.github.io/bga-help/demo/index.html)

# Concept
Show floating help button to the bottom left corner of the screen.

# Integration
## On standard BGA project
Copy bga-help.css and bga-help.js files to the `modules` directory.  
Then you can include the module on your game :

CSS file: 
```css
@import url(modules/bga-help.css);
```
JS file:
```js
define([
   "dojo","dojo/_base/declare",
   "dojo/debounce",
   "ebg/core/gamegui",
   /*...,*/
   g_gamethemeurl + "modules/bga-help.js",
],
function (dojo, declare, debounce, gamegui, /*...,*/ bgaZoom) {
   return declare("bgagame.mygame", gamegui, {
      constructor: function() {

        // create the help manager
        this.helpManager = new HelpManager(game, {
            buttons: [
                new BgaHelpPopinButton({
                    title: _("Card help"),
                    html: `
                        <h1>Main section</h1>
                        <div>The HTML content of the popin</div>
                    `,
                })
            ],
        });
```
