"use strict";
// TESTING
/*
console.log("Hallo Welt");
var bEZEICHNUNG: Typ = Wert;
let = besser als var (RICHTIGE Block Sichtbarkeit)
const = Konstante also -> nach der ersten Zweisung nicht mehr überschreib-bar

// console.log(true + true);
console.log(5 + 1);
console.log(5 + "1");
console.log("5" + 1);
// console.log('5' - 1);

//BONUS:
console.log(("b" + "a" + + "a" + "a").toLowerCase());

let x: number = 10;

let five: number = 5;
console.log(five * five);

let weather: string = "sunny";
console.log(weather);
weather = "dark";
console.log(weather);

let lukasDebt: number = 1000;
lukasDebt = lukasDebt - 50;
console.log(lukasDebt);

let one: number = 1, two: number = 2;
console.log(one + two);

let name: string = "Lukas";
const greeting: string = "Hello ";
console.log(greeting + name);

prompt("Passwort eingeben");

let userInput: string = prompt("Pick a number");
let userNumber: number = Number(userInput);
console.log("The square of your number is " + userNumber * userNumber);
*/
// AUFGABE 1
function a2() {
    const x = "Alles";
    //debugger;
    console.log(x);
    func1();
    console.log("Logo!");
}
a2();
function func1() {
    console.log("Klar?");
}
// AUFGABE 1A
// Für Zeile 51 ist auch eine "const" möglich, alles andere müssen allerdings functions bleiben.
// Für die Variablennamen sind alle Buchstaben und Zahlen möglich zum Beispiel Kartoffelsalat. Sonderzeichen sind nicht möglich bis auf _ und $.
// Man kann allerdings "func1" sowie "a1" (jetzt a2) auch beliebig benennen
// AUFGABE 1B
// Als erstes wird in Zeile 51 für die Variable "x" das Wort "Alles" generiert
// Dann startet der Debugger bei Zeile 52 "debugger;"
// Danach printed die Konsole in Zeile 53 das vorher generierte Wort "Alles"
// Dann liest die Konsole in Zeile 54 und springt die zu Zeile 60, "func1()"
// Die neu erstellte Funktion "func1()" in Zeile 60 printed in Zeile 61 das Wort "Klar?" in der nächsten Zeile
// Anschließend springt die Konsole wieder zurück zu der Zeile 55 und printed den String "Logo!"
// AUFGABE 1C “Alles Gute! Alles klar? Alles Logo!”
console.log(" ");
function a3() {
    const y = "Alles";
    let x = "Gute!";
    console.log(y);
    console.log(x);
    console.log(y);
    func2();
    console.log(y);
    console.log("Logo!");
}
a3();
function func2() {
    console.log("Klar?");
}
// AUFGABE 2
// Als erstes wird eine neue Funktion erstellt in der die Variable i mit dem Wert 9 versehen wird
// Als nächstes wird eine do Schleife ausgeführt, in der erst "i" also "9" geprinted wird
// als nächstes wird von "9" -1 abgezogen, sodass dann "8" geprinted wird
// Dann wird geprüft, ob i größer als 0 ist. Wenn dies stimmt beginnt die Schleife erneut.
// i ist nun überschrieben worden mit 8 und wird daher durch eine subtrahierte 1 zu einer 7
// Dies passiert so lange, bis i = 0 erreicht hat
// AUFGABE 3AB
/*
console.log(" ");

function a4(): void {
    const x: string = "Alles";
    //debugger;
    console.log(x);
    func1();
    console.log("Logo!");
}

a4();

function func4(void): {
    console.log("Klar?");
}

console.log(" ");

function a5(void): {
    const p: string = "Alles";
    let x: string = "Gute!";
    console.log(p);
    console.log(x);
    console.log(p);
    func5()
    console.log(b);
    console.log("Logo!");
    let p: string = "Heute Alles";
}

a5();

function func5(): void {
    console.log("Klar?");
}
*/
// AUFGABE 4A
console.log(" ");
//debugger;
let b = "Hallo";
console.log(b);
func7(b);
console.log(b);
func6();
func8();
console.log(b);
function func7(y) {
    y = "Bla";
    console.log(y);
}
function func6() {
    let b = "Blubb";
    console.log(b);
}
function func8() {
    b = "Test";
}
//Annahmen:
//Als erstes wird für die Variable b der String "Hallo" generiert
//Als nächstes wird b also "Hallo" geprinted
//Dann springt die Konsole zu Zeile 153, in der für die Variable y "Bla" eingefügt wird
//Danach wird "Bla" geprinted
//Dann springt die Konsole wieder zurück zu Zeile 148 und printed nochmal "Hallo"
//Bei Zeile 149 "func6();" springt die Konsole zu Zeile 158
//Hier wird die Variable b zu dem string "Blubb" und printed dann auch "Blubb"
//Als nächstes springt die Konsole wieder zu Zeile 150 und dann wieder zu Zeile 163
//Hier wird dann für die Variable b "Test" eingefügt
//Dann springt die Konsole wieder zu Zeile 156 und printed wieder "Hallo"
//Tatsächlich printed die Konsole bei Zeile 156 "Test", da die Variable b am Anfang eine Globale Variable ist, die überall im Code definiert werden kann.
// AUFGABE 4B
//Eine Globale Variable kann überall im Code deklariert werden. Sie entsteht automatisch, wenn eine Funktion nicht speziell anders deklariert wurde
//Eine Variable ist dann Lokal, wenn diese im gleichen Block (meist gekennzeichnet mit {}) verwendet wird. Sie kann nur in dem entsprechenden Block verwendet werden
//Eine Lokale Variable mit dem selben Namen wie eine Globale Variable kann diese "überschreiben" bzw. verstecken, allerdings wird dadurch die gleichnamige globale Variable nicht gelöscht bzw. beeinflusst.
//"Normale" Variablen können außerhalb von Funktionen erstellt werden. Dazu müssen nicht unbedingt Funktionen erstellt werden.
//Eine Funktion läuft nur ab, wenn irgendetwas die Funktion "triggert" also abruft.
// AUFGABE 5A
console.log(" ");
function multiply() {
    let v = 4;
    let w = 5;
    console.log(v * w);
}
multiply();
// AUFGABE 5B
console.log(" ");
function max() {
    let v = 1;
    let w = 5;
    if (v > w) {
        console.log(v + " ist größer als " + w);
    }
    else {
        console.log(w + " ist größer als " + v);
    }
}
max();
// AUFGABE 5C
console.log(" ");
function zaehlen() {
    //debugger;
    let x = 100;
    let y = 1;
    do {
        x -= 1;
        y += 1;
    } while (x >= 50 && y <= 50);
    console.log((x += y) * 50);
}
zaehlen();
// AUFGABE 5D
console.log(" ");
let min = 1;
let maex = 100;
let i = 1;
for (i = 1; i <= 10; i++) {
    console.log(Math.random() * (maex - min + 1));
}
// AUFGABE 5E
console.log(" ");
//debugger;
function factorial() {
    let n = 1;
    for (n = 1; n <= 100; n += n)
        ;
    console.log(n);
}
factorial();
// AUFGABE 5F
console.log(" ");
function leapyear() {
    for (let year = 1900; year < 2021; year++) {
        if (year % 4 === 0 && year % 100 !== 0) {
            console.log("leapyear: " + year);
        }
        if (year % 400 === 0) {
            console.log("leapyear: " + year);
        }
    }
}
leapyear();
// AUFGABE 6A
function pyramid() {
    for (let i = 0; i < 8; i++) {
        console.log("#".repeat(i));
    }
}
pyramid();
// AUFGABE 6B
console.log(" ");
for (i = 1; i <= 100; i++) {
    if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
// AUFGABE 6C
console.log(" ");
for (i = 1; i <= 100; i++) {
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}
// AUFGABE 6D + 6E
console.log(" ");
let sizee = 8;
let board = "";
for (let y = 0; y < sizee; y++) {
    for (let x = 0; x < sizee; x++) {
        if ((x + y) % 2 == 0)
            board += " ";
        else
            board += "#";
    }
    board += "\n";
}
console.log(board);
//# sourceMappingURL=script.js.map