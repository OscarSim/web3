function CommentaireModele(props)
{
        return(<div className='d-flex flex-start mt-4'>
        <a className='me-3' href='#'>
            <img className='rounded-circle shadow-1-strong' src='../image/image/tupuxx.PNG' alt='avatar' width='65px' height='65px' />
        </a>
        <div className='flex-grow-1 flex-shrink-1'>
            <br></br>
            <p className='small mb-0'>{props.cont}</p>
            <br></br>
        </div>
    </div>)
     return;         
}
