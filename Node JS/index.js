"use strict"
const fs = require("fs");

const superheroes = require("superheroes");
const supervillain = require("supervillains")
let myHeroName = superheroes.random()
let myVillainName = superheroes.random()

console.log(`Hero Name: ${myHeroName}`)
console.log(`Villain Name: ${myVillainName}`)