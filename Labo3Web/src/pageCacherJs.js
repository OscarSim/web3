$(document).ready(function(){
    $('#ADDForm').submit(function(event){
        event.preventDefault(); //PERMET D EVITER LES CHAMPS VIDE

        const imageJS = document.getElementById('image').value;
    const auteurJS = document.getElementById('auteur').value;
    const titreJS = document.getElementById('titre').value;
    const contenuJS = document.getElementById('contenu').value;
    const dateJS = new Date().toLocaleDateString();

    if(confirm('Tu es sur mon reuf'))
    {
        fetch("http://localhost:3000/publication",
        {
            method: "POST",
            body : JSON.stringify({
                titre: titreJS,
                auteur: auteurJS,
                image: imageJS,
                contenu: contenuJS,
                date: dateJS,
            }),
            headers:{
                'Content-type' : 'application/json; charset=UTF-8',
            }
        }
        )
        window.location.href = "http://127.0.0.1:5500/labtestn1.html"
    }
})
});
