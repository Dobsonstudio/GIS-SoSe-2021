"use strict";
// AUFGABE 1A
let nummer1 = 8;
let nummer2 = 3;
let nummer3 = 4;
let nummer4 = 9;
let nummer5 = 1;
function min() {
    //let minimum: number[] = [2, 9, 3, 4, 5];
    console.log("Die kleinste Nummer ist: " + Math.min(nummer1, nummer2, nummer3, nummer4, nummer5));
    //console.log(Math.min(...minimum));
}
min();
// AUFGABE 1B
console.log(" ");
function isEven() {
    let x = -1;
    let even = 0;
    let uneven = 1;
    if (x % 2 == 0) {
        x = even;
        console.log("true / even");
    }
    else {
        x = uneven;
        console.log("false / uneven");
    }
}
isEven();
// -1 gibt uneven aus, also ist das richtig.
// AUFGABE 1C
console.log(" ");
function genericstudent(studentvalues) {
    console.log(studentvalues.vorname);
    console.log(studentvalues.nachname);
    console.log(studentvalues.matrikelnummer);
}
function showInfo(studi) {
    console.log("Name: " + studi.vorname + "\n" + "Nachname: " + studi.nachname + "\n" + "Matrikelnummer: " + studi.matrikelnummer);
}
let student01 = { vorname: "Peter", nachname: "Maier", matrikelnummer: 123456 };
let student02 = { vorname: "Hans", nachname: "Wurst", matrikelnummer: 364783 };
let student03 = { vorname: "Shlimmar", nachname: "Fienger", matrikelnummer: 666666 };
let studentArray = [student01, student02, student03];
studentArray.push({ vorname: "Benjamin", nachname: "Siedler", matrikelnummer: 3237812 });
for (let student of studentArray) {
    showInfo(student);
}
// AUFGABE 2A
console.log(" ");
function backwards() {
    let numbers = [1, 3, 7, 3, 2];
    console.log("Array: " + numbers);
    let reversed = numbers.reverse();
    console.log("Reversed: " + reversed);
}
backwards();
// AUFGABE 2B
console.log(" ");
function join() {
    let numbers1 = [1, 2, 5];
    let numbers2 = [...numbers1, 2, 3, 6];
    console.log(numbers2);
}
join();
// AUFGABE 2C
console.log(" ");
function split() {
    let numbers3 = [2, 1, 3, 7, 8, 9];
    console.log(numbers3.slice(1, numbers3.length - 1));
}
split();
function splitright() {
    let numbers4 = [2, 1, 3, 7, 8, 9];
    let index1 = 2;
    let index2 = 9;
    let stelle1 = numbers4.findIndex(element => element == index1);
    let stelle2 = numbers4.findIndex(element => element == index2);
    console.log(numbers4.slice(stelle1, stelle2));
}
splitright();
// AUFGABE 3A
console.log(" ");
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 3;
function himmel() {
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 500, 200);
}
function grasboden() {
    context.fillStyle = "green";
    context.fillRect(0, 200, 500, 200);
}
function berge() {
    context.fillStyle = "grey";
    context.beginPath();
    context.moveTo(100, 250);
    context.lineTo(180, 100);
    context.lineTo(200, 170);
    context.lineTo(250, 120);
    context.lineTo(400, 250);
    context.closePath();
    context.fill();
}
function sonne() {
    context.fillStyle = "yellow";
    context.arc(70, 70, 50, 0, 2 * Math.PI);
    context.fill();
}
function wolken() {
    context.fillStyle = "white";
    context.beginPath();
    context.moveTo(170, 80);
    context.bezierCurveTo(420, 150, 420, 120, 390, 100);
    context.bezierCurveTo(420, 40, 370, 30, 340, 50);
    context.bezierCurveTo(320, 5, 250, 20, 250, 50);
    context.bezierCurveTo(200, 5, 150, 20, 150, 50);
    context.closePath();
    context.fill();
}
himmel();
grasboden();
berge();
sonne();
wolken();
// AUFGABE 3B - 3E
let canvas2 = document.getElementById("mySecondCanvas");
let context2 = canvas.getContext("2d");
function createRect() {
    let rechteckrandom = { x: Math.floor(Math.random() * 501), y: Math.floor(Math.random() * 501), breite: Math.floor(Math.random() * 501), höhe: Math.floor(Math.random() * 501) };
    return rechteckrandom;
}
function drawRect(_rechteckrandom) {
    context2.fillRect(_rechteckrandom.x, _rechteckrandom.y, _rechteckrandom.breite, _rechteckrandom.höhe);
}
let rectArray = [];
for (let i = 0; i < 5; i++) {
    rectArray.push(createRect());
    drawRect(rectArray[i]);
}
//# sourceMappingURL=script.js.map