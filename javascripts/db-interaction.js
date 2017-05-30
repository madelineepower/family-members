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

module.exports = {getFamily};
