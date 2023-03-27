



let punteggioComputer=0 ;
let punteggioGiocatore=0 ;
let partitegiocate = 0;

    for (let x = 1; x <= 10; x++)  {

    let numeroGiocatore = (Math.floor(Math.random() * 6))+1;
    let numeroComputer = (Math.floor(Math.random() * 6))+1;
    console.log(numeroGiocatore,numeroComputer)
    if(numeroComputer < numeroGiocatore) {
        console.log  ("hai vinto!")
        punteggioGiocatore = punteggioGiocatore + 1;

    } else if (numeroComputer > numeroGiocatore) {
        console.log ("hai perso!")
        punteggioComputer = punteggioComputer + 1;

    } else {
       console.log  ("pareggio!");
       x = x -1
    }

    partitegiocate = partitegiocate + 1;
    console.log("partite giocate:" + partitegiocate)
    console.log("tu:" + punteggioGiocatore + " " + "CPU:" + punteggioComputer)

 }

