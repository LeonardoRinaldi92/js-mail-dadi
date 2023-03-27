let numeroGiocatore = (Math.floor(Math.random() * 6))+1;
let numeroComputer = (Math.floor(Math.random() * 6))+1;

console.log(numeroGiocatore,numeroComputer)

for (let x = 0; x <= 10; x++)  {
    let partitegiocate = 0
    let punteggioComputer = 0
    let punteggioGiocatore = 0

    

    if(numeroComputer < numeroGiocatore) {
        console.log  ("hai vinto!")
        punteggioGiocatore =+1

    } else if (numeroComputer > numeroGiocatore) {
        console.log ("hai perso!")
        punteggioComputer =+1
    } else {
       console.log  ("pareggio!")
    }

    partitegiocate =+1 
    console.log(punteggioGiocatore,punteggioComputer)

}