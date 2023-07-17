
let num1 = 2;
let num2 = 1;

if (num1 > num2) {
  console.log("il primo numero è maggiore del secondo");
}

/*
ESERCIZIO 2
L’utente inserisce la propria età e il programma dice se è maggiorenne (ovvero con età maggiore uguale a 18 anni)
 */


let eta = 18;

if (eta>18){
    console.log("sei maggiorenne");
}
else{
    console.log("sei minorenne torna a casa")
}

//Dati due numeri calcolare la somma e stamparla a console ESERCIZIO 1

 num1 = 5;
num2 = 10;

const somma = num1 + num2

console.log("somma dei due numeri è" + somma)

//Esercizio 2
//Dati tre numeri calcolare il prodotto tra di essi e visualizzarlo in console

let numero1 = 2;
let numero2 = 3;             //10 NUMERO1= 2
let numero3 = 4;

// calcolare il prodotto 

const prodotto = numero1 * numero2 * numero3;

//stampo il risultato
console.log("il prodotto è" + prodotto)

//esercizio 3
//Dati due numeri calcolare la divisione tra di essi

let numero4 = 20;
let numero5 = 4;                    //NUMERO1 = 5 


//calcolare la divisione
const divisione = numero4 / numero5;
//stampo il risultato
console.log("la divisione viene" + divisione);

//esercizio 4
//creare una costante chiamata PI che abbia come valore 3.14 e stamparlo in console

const pi = 3.14
console.log(pi)

// esercizio 5
// Scrivi un programma che prenda in input due numeri, A e B, e calcoli la loro differenza in modo seguente:
// Se il valore di A è maggiore di B, calcola la differenza sottraendo B da A.
// Se il valore di B è maggiore di A, calcola la differenza sottraendo A da B.

let a = 10;
let b = 5;

if (a>b){ 
  console.log(a-b)
}
else{
  console.log(b-a)
}

// esercizio 6
// L’utente inserisce un numero dire
// Se il numero inserito è positivo;
// Se il numero inserito è negativo;
// Se il numero inserito è uguale a 0.

let numerox = -5;

if (numerox>0){
  console.log("il numero è positivo")
}

else if (numerox<0){
  console.log("il numero è negativo")
}
else {
  console.log("il numero è uguale a 0")
}

