"use strict"

var Puppy = function(name, age, id) {
    this.age = age;
    this.name = name;
    this.id = id
}

var pupArray = [new Puppy("Wilson", 12, 1)];

module.exports = {
    Puppy,
    pupArray
}
