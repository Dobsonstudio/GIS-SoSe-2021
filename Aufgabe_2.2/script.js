"use strict";
// AUFGABE 1A
function min(...numbers) {
    let x = numbers[0];
    for (let index = 0; index < numbers.length; index++) {
        if (numbers[index] < x) {
            x = numbers[index];
        }
    }
    return x;
}
console.log(min(4, 3, 2));
// AUFGABE 1B
console.log(" ");
function isEven(_n) {
    if (_n == 0) {
        return true;
    }
    else if (_n == 1) {
        return false;
    }
    else if (_n > 0) {
        return isEven(_n - 2);
    }
    else {
        return isEven(_n + 2);
    }
}
console.log(isEven(50));
console.log(isEven(-1));
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
/*
function backwards(): void {
    let numbers: Array<number> = [1, 3, 7, 3, 2];
    console.log("Array: " + numbers);
    let reversed: Array<number> = numbers.reverse();
    console.log("Reversed: " + reversed);
}

backwards();
*/
function backwards(_arrei) {
    let x = [];
    for (let index = 0; index < _arrei.length; index++) {
        x[index] = _arrei[_arrei.length - index - 1];
    }
    return x;
}
console.log(backwards([1, 2, 5, 7, 7, 2]));
// AUFGABE 2B
console.log(" ");
function join(_arone, _artwo) {
    return [..._arone, ..._artwo];
}
console.log(join([1, 2, 3, 4, 5, 6], [3, 2, 1, 3, 4]));
// AUFGABE 2C
console.log(" ");
function split(_arrone, _indone, _indtwo) {
    let x = [];
    for (let index = _indone; index <= _indtwo; index++) {
        x[index - _indone] = _arrone[index];
    }
    return x;
}
console.log(split([1, 3, 4, 5, 6], 1, 3));
// AUFGABE 3A
console.log(" ");
let canvas = document.getElementById("myFirstCanvas");
let context = canvas.getContext("2d");
context.lineWidth = 3;
function himmel() {
    context.beginPath();
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 500, 200);
    context.closePath();
}
function grasboden() {
    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0, 200, 500, 200);
    context.closePath();
}
function berge() {
    context.beginPath();
    context.fillStyle = "grey";
    context.moveTo(100, 250);
    context.lineTo(180, 100);
    context.lineTo(200, 170);
    context.lineTo(250, 120);
    context.lineTo(400, 250);
    context.closePath();
    context.fill();
}
function sonne() {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(70, 70, 50, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}
function wolken() {
    context.beginPath();
    context.fillStyle = "white";
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