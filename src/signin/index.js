var page = require('page');
var empty = require('empty-element');
var template = require('./template');
var title = require('title');
page('/signin', function(ctx, next){
                title("Platzigram - Sign In");
var main = document.getElementById('Main-container');
        empty(main).appendChild(template);
    
})