"use strict";

let $ = require('jquery');

function makeNewMember() {
    let personObj = {
    name: $("#name").val(),
    age: parseInt($("#age").val()),
    gender: $("#gender").val(),
    skills: [$("#first").val(),
    $("#second").val(),
    $("#third").val(),
    $("#fourth").val()
    ]
  };
  return personObj;
}

module.exports = {makeNewMember};
