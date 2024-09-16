console.log("hello")

var prompt=require("prompt-sync")({sigint:true});

var msg = prompt("Input your name: ");
console.log("Hi ", msg);