"use strict";

let $ = require('jquery'),
    firebase = require('./fb-Config');

function getFamily() {
      return new Promise(function(resolve,reject) {
        $.ajax({
          url: `${firebase.getFBsettings().databaseURL}/family/.json`
        }).done(function(songData){
          resolve(songData);
        }).fail(function(error){
          reject(error);
        });
      });
    }

function addToFirebase(newObj) {
  console.log("add person", newObj);
    return new Promise (function(resolve, reject) {
      $.ajax({
        url: `${firebase.getFBsettings().databaseURL}/family.json`,
        type: 'POST',
        data: JSON.stringify(newObj),
        dataType: 'json'
      }).done(function(personID){
        resolve(personID);
      });
    });
}

module.exports = {getFamily, addToFirebase};
