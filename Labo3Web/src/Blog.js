function BlogFunction(props)
{
    const [Post,setPost] =React.useState([])
    const params = new URLSearchParams(window.location.search);
    const id = params.get("id");
    React.useEffect(() => {
        fetch("http://localhost:3000/publication")
        .then(response => response.json())
        .then(data => {

            const foundElement = data.find(item => item.id == id);
            console.log(foundElement);
            setPost(foundElement);
        })
        .catch(error => console.error(error));
    },
    []);
    return(
        <div>
            <DetailBlog postId={Post.id} titre={Post.titre} auteur={Post.auteur}  image={Post.image} contenu={Post.contenu} date={Post.date}></DetailBlog>
            <CommentList postId={id}></CommentList>
            <AddCommentFunction pstid={Post.id}></AddCommentFunction>                              
        </div>
    )
} 




