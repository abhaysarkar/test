// import { useNavigate } from 'react-router-dom'
// const NavBar = () => {
//     const navigate = useNavigate();
//     return (
//         <>
//             <nav className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top">
//                 <div className="container-fluid">
//                     <a className="navbar-brand" href="#">Navbar</a>
//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>
//                     <div className="collapse navbar-collapse" id="navbarNavDropdown">
//                         <ul className="navbar-nav">
//                             <li className="nav-item">
//                                 <a className="nav-link active" aria-current="page" href="/">Home</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" onClick={() => navigate("/page1")}>Page1</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" onClick={() => navigate("/page2")}>Page2</a>
//                             </li>

//                             <li className="nav-item">
//                                 <a className="nav-link active" onClick={() => navigate("/page3")}>Page3</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" onClick={() => navigate("/page4")}>Page4</a>
//                             </li>
//                             <li className="nav-item">
//                                 <a className="nav-link active" onClick={() => navigate("/page5")}>Page5</a>
//                             </li>

//                         </ul>
//                         <div>
//                             <button className="btn btn-outline-warning" data-bs-toggle="modal" data-bs-target="#exampleModal">Add New</button>
//                         </div>



//                     </div>
//                 </div>
//             </nav>
//             <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>

//                         </div>
//                         <div className="modal-body">
//                             <h3>Custom Domain</h3>
//                             <p>for custom domain we need some cridentials for that need to be setup</p>
//                         </div>
//                         <div className="modal-footer">
//                             <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
//                             <button type="button" className="btn btn-primary">Save changes</button>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//         </>

//     );
// }

// export default NavBar;




import { useNavigate } from 'react-router-dom';

const NavBar = () => {
    const navigate = useNavigate();
    return (
        <>
            <nav className="navbar navbar-dark bg-primary navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Navbar</a>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNavDropdown"
                        aria-controls="navbarNavDropdown"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link" href="/" aria-current="page">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => navigate("/page1")}>Page1</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => navigate("/page2")}>Page2</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => navigate("/page3")}>Page3</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => navigate("/page4")}>Page4</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" onClick={() => navigate("/page5")}>Page5</a>
                            </li>
                        </ul>
                        <div className="ms-auto">
                            <button
                                className="btn btn-outline-warning"
                                data-bs-toggle="modal"
                                data-bs-target="#exampleModal"
                            >
                                Add New
                            </button>
                        </div>
                    </div>
                </div>
            </nav>

            <div
                className="modal fade"
                id="exampleModal"
                tabIndex="-1"
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <h3>Custom Domain</h3>
                            <p>For a custom domain, we need some credentials to be set up.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default NavBar;
