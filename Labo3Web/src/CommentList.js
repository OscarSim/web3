function CommentList(props)
{
    const [contenu,setContenu] = React.useState([]);
    React.useEffect(() =>{
        fetch("http://localhost:3000/commentaire?publication_lier="+ props.postId)
        .then((reponse) => reponse.json())
        .then((data) =>
        setContenu(data)
    );
    },
    []);
    return(
        <div>
            {
             contenu.map((d) =>(<CommentaireModele key={d.id} postpostId={props.postId}  idd={d.publication_lier} cont={d.contenu}></CommentaireModele>))
            }
        </div>
    )
}