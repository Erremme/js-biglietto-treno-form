/*Descrizione:
Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65*/
 
//FUNCTION 
 
function getRandomNumber( min , max ){
    const random = (Math.floor(Math.random() * max) + min )
    return random;
}

function getPreiseTicket (number){
 const priceForKm = 0.21; 
 const priceTotal = number.value * priceForKm 
 return priceTotal;
}



//DOM ELEMENT
//form
const formElm = document.querySelector("form");
//field
const fullNamefieldElm = document.getElementById("full-name");
const userKmfieldElm = document.getElementById("user-km");
const userAgefieldElm = document.getElementById("user-age");
//card
const passengerNameCardElm = document.getElementById("passenger-name");
const ticketTypeCardElm = document.getElementById("ticket-type");
const carriageNumbCardElm = document.getElementById("carriage-numb");
const codeCardElm = document.getElementById("code");
const priceCardElm = document.getElementById("price");


//DOM EVENTS
formElm.addEventListener ("submit", function(event){
   event.preventDefault()
    
   passengerNameCardElm.innerHTML = fullNamefieldElm.value;
   ticketTypeCardElm.innerHTML = userAgefieldElm.value;
   carriageNumbCardElm.innerHTML = getRandomNumber(1,10) 
   codeCardElm.innerHTML = getRandomNumber( 90000, 10000)
    let priceTotal = getPreiseTicket (userKmfieldElm)
    console.log(priceTotal)
    let discount =0; 
    if(userAgefieldElm.value === "Minorenne"){
        discount = priceTotal * 0.2;
        priceTotal -= discount
    }else if( userAgefieldElm.value === "Over-65"){
        discount = priceTotal * 0.4;
        priceTotal -= discount
        
    }else{
        priceTotal
    }

    priceCardElm.innerHTML = ` €${priceTotal.toFixed(2)}`;

    

    
   
})







