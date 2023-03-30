function ListBlog(props){
    const [content,setBlog] = React.useState([])
    React.useEffect(()=>{
        fetch("http://localhost:3000/publication")
        .then((reponse) => reponse.json())
        .then((data) => setBlog(data));
    },[]);
    return(
        <div className="row middle">
            {
                content.map((d) => (
                    <Card key={d.id} postId={d.id} titre={d.titre} image={d.image} cont={d.contenu} ></Card>
                ))
            }
        </div>
    )

}