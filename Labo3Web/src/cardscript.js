fetch("http://localhost:3000/publication/")
.then(data => data.json())
.then(json =>{
    json.forEach(publication => {
        let carte = '<div class="card me-5 mb-5" style="width:500px">' +
    '<div>' +
    '<img class="card-img-top" src="'+publication["image"]+'" alt="Card image" style="width:450px;height:300px;">' +'</div>' +
    '<div class="card-body">' +
    '<h4 class="card-title border border-dark px-2 py-2">'+publication["titre"]+'</h4>' +
    '<p class="card-text">'+ publication["contenu"]+'</p>' +
    '</div>'+
    '</div>';
    $("#publicationAuto").append($(carte));    
    });
})