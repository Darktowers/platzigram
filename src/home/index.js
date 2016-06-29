var page = require('page');
page('/', function(ctx, next){
    var main = document.getElementById('Main-container');    
    main.innerHTML= '<a href="/signup">Sign Up</a>';

})