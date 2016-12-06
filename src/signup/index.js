var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
page('/signup', function(ctx, next){
        title("Platzigram - Sign Up");
var main = document.getElementById('Main-container');
        empty(main).appendChild(template);
    
})