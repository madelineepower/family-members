"use strict";

let $ = require('jquery'),
    firebase = require('./fb-Config');

function deletePerson(personID) {
 return new Promise(function(resolve, reject){
   $.ajax({
     url: `${firebase.getFBsettings().databaseURL}/family/${personID}.json`,
     method: 'DELETE'
   }).done(function(){
     resolve();
   });
 });
}

module.exports = {deletePerson};
