"use strict";
let $ = require('jquery'),
    firebase = require('./fb-Config.js'),
    db = require('./db-interaction.js'),
    build = require('./dom-builder.js'),
    add = require('./add.js'),
    dlt = require('./delete.js');

console.log("hi main");

$(document).ready(function(){
  db.getFamily()
  .then(function(data){
    console.log("this is the data", data);
    build.showFamily(data);
  });
});

$(document).on("click", ".submit-btn", function(event){
  let personObj = add.makeNewMember();
  db.addToFirebase(personObj)
  .then(function(){
    clearInputs();
    db.getFamily()
    .then(function(data){
      build.showFamily(data);
    });
  });
});

function clearInputs(){
  $('#name').val("");
  $('#age').val("");
  $('#gender').val("");
  $('#first').val("");
  $('#second').val("");
  $('#third').val("");
  $('#fourth').val("");
}

$(document).on("click", ".delete-btn", function(event){
  let personID = event.target.id;
  dlt.deletePerson(personID)
  .then(function(){
    db.getFamily()
    .then(function(data){
      build.showFamily(data);
    });
  });
});
