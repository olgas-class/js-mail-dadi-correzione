// MAIL
// Raccolta di dati
// const users = ["pippo@gmail.com", "pluto@gmail.com", "paperino@gmail.com"];
// const userEmail = prompt("Dimmi la tua email");
// console.log(users, userEmail);

// let flag = false;
// for (let i = 0; i < users.length; i++) {
//     const curEmail = users[i]; 
//     console.log(i, curEmail);
//     if(curEmail === userEmail) {
//         console.log("TROVATO");
//         flag = true;
//         break;
//     }
//     console.log("------------------------");
// }

// console.log("FINE CICLO FOR. QUI voglio avere il risultato");
// console.log("esito finale", flag);

// if(flag) {
//     console.log("trovato, puoi accedere");
// } else {
//     console.log("non puoi accedere");
// }

// Gioco dei dadi
const userNumber = Math.floor(Math.random() * 6) + 1;
const computerNumber = Math.floor(Math.random() * 6) + 1;
console.log(userNumber, computerNumber);

let message = "";
if(userNumber > computerNumber) {
    message = "Hai vinto";
} else if(computerNumber > userNumber) {
    message = "Hai perso";
} else {
    message = "Pareggio";
}

console.log(message);