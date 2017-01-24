var page = require('page');
var empty = require('empty-element');
var template = require("./template");
var title = require('title');
page('/', function (ctx, next) {
    title("Platzigram");
    var main = document.getElementById('Main-container');
    var pictures = [
        {
            user: {
                username: 'Cristian',
                avatar: 'https://fb-s-c-a.akamaihd.net/h-ak-xfp1/v/t1.0-9/15822907_10202743927236618_8031951167360709933_n.jpg?oh=c50d151d761ba0760e03132c5ba93f25&oe=591DB492&__gda__=1493648153_8e710caad166cb1a76146080d881ed3c'
            },
            url: 'office.jpg',
            likes: 1024,
            liked: true
        },
        {
            user: {
                username: 'Cristian',
                avatar: 'https://fb-s-c-a.akamaihd.net/h-ak-xfp1/v/t1.0-9/15822907_10202743927236618_8031951167360709933_n.jpg?oh=c50d151d761ba0760e03132c5ba93f25&oe=591DB492&__gda__=1493648153_8e710caad166cb1a76146080d881ed3c'
            },
            url: 'office.jpg',
            likes: 1024,
            liked: true
        }
    ]
    empty(main).appendChild(template(pictures));

})