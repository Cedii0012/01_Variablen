/***** Variablen 01 *******/

// Zeilen-Kommentar

/**
 *  Block -Kommentar
 *  
 */

// 01 Ausgabe
// console.log("Hallo Welt!");
// console.log(firstName); // nicht deklarierte Var. --> Fehler

// 02 Deklaration + Wertzuweisung I 

// let firstName; // Deklaration (Definition)
// firstName = "Max"; // Wertzuweisung
// console.log(firstName); // Ausgabe

// let familyName = "Mütze"; // Deklaration + Wertzuweisung
// console.log(familyName); // Ausgabe
// console.log(firstName + " " + familyName); // Ausgabe

// 03 Deklaration + Wertzuweisung II 

let firstName,familyName;
firstName = prompt("Bitte Vornamen eingeben:");
familyName = prompt("Bitte Namen eingeben:");
console.log(firstName); // Ausgabe
console.log(familyName); // Ausgabe
console.log("Hallo " + firstName  + " " + familyName +"!"); // Ausgabe