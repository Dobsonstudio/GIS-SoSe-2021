// AUFGABE 1A

function min(...numbers: number[]): number {
    let x: number = numbers[0];
    for (let index: number = 0; index < numbers.length; index++) {
        if (numbers[index] < x) {
            x = numbers[index];
        }
    } 
    return x;
}

console.log(min(4, 3, 2));

// AUFGABE 1B

console.log(" ");

function isEven(_n: number): boolean {
    if (_n == 0) {
        return true;
    } else if (_n == 1) { 
        return false;
    } else if (_n > 0) {
        return isEven(_n - 2);
    } else {
        return isEven(_n + 2);
    }
}

console.log(isEven(50));
console.log(isEven(-1));

// AUFGABE 1C

console.log(" ");

interface Studentinterface {
    vorname: string;
    nachname: string;
    matrikelnummer: number;
}

function genericstudent(studentvalues: Studentinterface): void {
    console.log(studentvalues.vorname);
    console.log(studentvalues.nachname);
    console.log(studentvalues.matrikelnummer);
}

function showInfo(studi: Studentinterface): void {
    console.log("Name: " + studi.vorname + "\n" + "Nachname: " + studi.nachname + "\n" + "Matrikelnummer: " + studi.matrikelnummer);
}

let student01: Studentinterface = {vorname: "Peter", nachname: "Maier", matrikelnummer: 123456};
let student02: Studentinterface = {vorname: "Hans", nachname: "Wurst", matrikelnummer: 364783};
let student03: Studentinterface = {vorname: "Shlimmar", nachname: "Fienger", matrikelnummer: 666666};

let studentArray: Studentinterface[] = [student01, student02, student03];
studentArray.push({vorname: "Benjamin", nachname: "Siedler", matrikelnummer: 3237812});

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

function backwards(_arrei: number[]): number[] {
    let x: number[] = [];
    for (let index: number = 0; index < _arrei.length; index++) {
        x[index] = _arrei[_arrei.length - index - 1];
    }
    return x;
}

console.log(backwards([1, 2, 5, 7, 7, 2]));

// AUFGABE 2B

console.log(" ");

function join(_arone: number[], _artwo: number[]): number[] {
    return [..._arone, ..._artwo];
}

console.log(join([1, 2, 3, 4, 5, 6], [3, 2, 1 , 3, 4]));

// AUFGABE 2C

console.log(" ");

function split(_arrone: number[], _indone: number, _indtwo: number): number[] {
    let x: number[] = [];
    for (let index: number = _indone; index <= _indtwo; index++) {
        x[index - _indone] = _arrone[index];
    }
    return x;
}

console.log(split([1, 3, 4, 5, 6], 1, 3));

// AUFGABE 3A

console.log(" ");

let canvas: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("myFirstCanvas");
let context: CanvasRenderingContext2D = canvas.getContext("2d");

context.lineWidth = 3;

function himmel(): void {
    context.beginPath();
    context.fillStyle = "lightblue";
    context.fillRect(0, 0, 500, 200);
    context.closePath();
}

function grasboden(): void {
    context.beginPath();
    context.fillStyle = "green";
    context.fillRect(0, 200, 500, 200);
    context.closePath();
}

function berge(): void {
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

function sonne(): void {
    context.beginPath();
    context.fillStyle = "yellow";
    context.arc(70, 70, 50, 0, 2 * Math.PI);
    context.closePath();
    context.fill();
}

function wolken(): void {
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

let canvas2: HTMLCanvasElement = <HTMLCanvasElement> document.getElementById("mySecondCanvas");
let context2: CanvasRenderingContext2D = canvas.getContext("2d");

interface Rechteck {
    x: number;
    y: number;
    breite: number;
    höhe: number;
}

function createRect(): Rechteck {
    let rechteckrandom: Rechteck = {x: Math.floor(Math.random() * 501), y: Math.floor(Math.random() * 501), breite: Math.floor(Math.random() * 501), höhe: Math.floor(Math.random() * 501)};
    return rechteckrandom;
}

function drawRect(_rechteckrandom: Rechteck): void {
    context2.fillRect(_rechteckrandom.x, _rechteckrandom.y, _rechteckrandom.breite, _rechteckrandom.höhe);
}

let rectArray: Rechteck[] = [];
for (let i: number = 0; i < 5; i++) {
    rectArray.push(createRect());
    drawRect(rectArray[i]);
}

