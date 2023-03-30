function AddCommentFunction(props)
{
    $("#envoieCommentaire").click(function(){
        const contenuJS = document.getElementById('comment').value;
        const dateJS = new Date().toLocaleDateString();
            fetch("http://localhost:3000/commentaire",
            {
                method: "POST",
                body : JSON.stringify({
                    publication_lier: props.pstid,
                    date: dateJS,
                    contenu: contenuJS,
                }),
                headers:{
                    'Content-type' : 'application/json; charset=UTF-8',
                }
            }
            )
            window.location.href = "http://127.0.0.1:5500/blog.html?id="+pstid;
    });
        return (<div>
                <div className="form-group" style={{marginright: '11%'}}>                   
                <textarea id="comment" name="comment" className="form-control" rows="3"></textarea>
                    </div>
                <div className="d-flex justify-content-end mt-2" style={{marginright: '11%'}}>
                    <input id="envoieCommentaire" type="submit" value="Lache un commentaire" className="btn btn-dark"></input>
                </div></div>
        )  

}
    









