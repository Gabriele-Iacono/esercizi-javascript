// Dato un numero controllare se il suo valore esiste, se esiste, stampare in console il valore esiste o se non esiste stampare non esiste IN CONSOLE

let num5 = 5;

if (num5) {
  console.log("esiste");
} else {
  console.log("non esiste");
}

// Date due stringhe valutare se stringa1 non è vuota e stringa2 non è la parola "ciao".

const stringa1 = "";
const stringa2 = ciao;

if (!stringa1 && stringa2 !== "ciao") {
  console.log("Ok");
}

// Date due costanti valutare se valore1 è maggiore di 0 o valore2 è minore di 20.

const val1 = 0;
const val2 = 15;

if (val1 > 0 || val2 < 20) {
  console.log(
    "val1 è maggiore di 0 oppure val2 è minore di 20" + val1 + " " + val2
  );
}

// dati in input un numero che rappresenta un voto di uno studente e il suo nome, stampare promosso se il voto è compreso tra 60 e 100 e deve anche esistere il suo nome.

const voto = 80;
const nome = "Antonio";

if (voto >= 60 && voto <= 100 && nome) {
  console.log("PROMOSSO");
}
