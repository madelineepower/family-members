"use strict";
let $ = require('jquery'),
    firebase = require('./fb-Config.js'),
    db = require('./db-interaction.js');

console.log("hi main");

$(document).ready(function(){
  db.getFamily()
  .then(function(data){
    console.log("this is the data", data);
  });
});
