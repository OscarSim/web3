function DetailBlog(props)
{
    return(
        <div id="element">
            <p className="middle">Titre : {props.titre}</p>
            <div className="middle">
                <img className="middle" src={props.image} alt="Image du blog" ></img>
            </div>
            <p className="middle">Auteur : {props.auteur}</p>
            <p className="middle">Date : {props.date}</p>
            <p className="middle">Description : {props.contenu}</p>
        </div>
    )
}