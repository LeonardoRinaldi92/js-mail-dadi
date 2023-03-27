let listaUtenti = ["leonardo@gmail.com", "salame@gmail.com", "boolean@gmail.com", "banana@gmail.com", "briscola@hotmail.com", "misonostufato@gmail.com"]

console.log (listaUtenti[1])

let nome = "salame@gmail.com"

for (let x = 0; x < listaUtenti.length; x++) {

    if (listaUtenti[x] === nome){
        console.log ("ok")
    }
  }