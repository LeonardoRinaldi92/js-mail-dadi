let listaUtenti = ["leonardo@gmail.com", "salame@gmail.com", "boolean@gmail.com", "banana@gmail.com", "briscola@hotmail.com", "misonostufato@gmail.com"]

console.log (listaUtenti[1]);
 
let controllore = false;
let nome = "leonardo@gmail.com";

for (let x = 0; x < listaUtenti.length; x++) {

    if (listaUtenti[x] === nome){
        controllore = true
  }
}

if (controllore) {
    console.log ("daje")
} else {
    console.log ("no")
}
  