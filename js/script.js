// Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
// Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
// il prezzo del biglietto è definito in base ai km (0.21 € al km)
// va applicato uno sconto del 20% per i minorenni
// va applicato uno sconto del 40% per gli over 65.
// L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).

// Numero di chilometri che vuole percorrere l'utente
const numberKm = parseInt ( prompt ('Dimmi il numero di chilometri che vuoi percorrere') );
// Età del passegero
const userAge = parseInt ( prompt ('Dimmi la tua età') );

// Prezzo standard del biglietto
const standardPrice = numberKm * 0.21;
// console.log(standardPrice);

// Sconto biglietti per minorenni e per gli over 65
let discountPrice;

if (userAge < 18) {
    discountPrice = standardPrice * 20/100;
} else if (userAge > 65) {
    discountPrice = standardPrice * 40/100;
} else {
    discountPrice = standardPrice;
}
// console.log(discountPrice)

// Prezzo totale del biglietto
let finalPrice;

if (userAge < 18 || userAge > 65) {
    finalPrice = standardPrice - discountPrice;
} else {
    finalPrice = standardPrice;
}
// console.log(finalPrice);

// Output prezzo finale
document.getElementById('final-price').innerHTML = 'Il prezzo finale del biglitto è ' + finalPrice.toFixed(2);

