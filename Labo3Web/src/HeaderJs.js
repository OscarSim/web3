function HeaderLab(props)
{
    return <header>
                <nav className="navbar navbar-expand-lg navbar">
                    <div className="container-fluid">
                        <div>
                            <img className="rounded mx-auto"  src="../image/image/logo.png" alt="logo"></img>
                        </div>           
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon"></span>
                        </button>                     
                        <div className="collapse navbar-collapse" id="navbarCollapse">                     
                            <div className="navbar-nav mx-auto">
                                <button className="nav-item nav-link me-5 ms-5">Menu1</button>
                                <button className="nav-item nav-link me-5 ms-5">Menu2</button>
                                <button className="nav-item nav-link me-5 ms-5">Menu3</button>
                                <button className="nav-item nav-link me-5 ms-5">Menu4</button>
                            </div>
                            <div className="navbar-nav hidden-mobile" style={{}}><img className="navitem nav-link" src="../image/image/pp.PNG" alt="pp"></img></div>
                        </div>                                                        
                    </div>
                </nav>
            </header>
}
