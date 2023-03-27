let listaUtenti = ["leonardo@gmail.com", "salame@gmail.com", "boolean@gmail.com", "banana@gmail.com", "briscola@hotmail.com", "misonostufato@gmail.com"]
 
document.getElementById("cerca").addEventListener('click', function() {
 

    let controllore = false;
    let nome = document.getElementById("barraEmail").value;

    for (let x = 0; x < listaUtenti.length; x++) {

        if (listaUtenti[x] === nome){
            controllore = true
      }
    }

    if (controllore) {
        alert("l'email esiste e stai per essere reindirizzato da qualche parte")
    } else {
        alert("l'email non esiste iscriviti!");
        document.getElementById("cerca").classList.add("d-none")
        document.getElementById("entra").classList.remove("d-none")


        
    }
})

document.getElementById("entra").addEventListener('click', function() {
    let nome = document.getElementById("barraEmail").value;
    listaUtenti.push (nome)

    for (let x = 0; x < listaUtenti.length; x++) {

        if (listaUtenti[x] === nome){
            document.getElementById("entra").classList.add("d-none")
            alert("congratulazione sei entrato enll'array!")
        document.getElementById("cerca").classList.remove("d-none")
            
      }
    }


})


  