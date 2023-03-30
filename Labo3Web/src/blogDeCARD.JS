function Card(props) {
    return (
        <div className="card me-5 mb-5" style={{ width: '500px' }}>
        <div>
          <img
            className="card-img-top"
            src={props.image}
            alt="Card image"
            style={{ width: '450px', height: '300px' }}
          />
        </div>
        <div className="card-body">
            <a href={`blog.html?id=${props.postId}`}>
          <h4 className="card-title border border-dark px-2 py-2">{props.titre}</h4>
          </a>
          <p className="card-text">{props.cont}</p>
        </div>
      </div>
    );
  }