const Main = () => {

    const containerStyle = {
        backgroundColor: 'darkgray', // Or any dark color you prefer
        width: '100%',
        height: '100vh',
        padding: '5%'
       
       
       
    };


    return (
        <div className="d-block justify-content-center p-5" style={containerStyle}>
            <div id="carouselExampleCaptions" className="carousel slide mt-3" data-bs-ride="carousel" >
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://cdn.pixabay.com/photo/2020/04/16/15/39/medical-5051148_1280.jpg"
                            className="d-block w-100"
                            alt="First slide"
                            style={{ width: '400px', height: '400px' }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Health is wealth</h5>
                            <p>Some representative placeholder content for the first slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src="https://cdn.pixabay.com/photo/2016/11/08/05/29/surgery-1807541_640.jpg"
                            className="d-block w-100"
                            alt="Second slide"
                            style={{ width: '100%', height: '400px' }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Second slide label</h5>
                            <p>Some representative placeholder content for the second slide.</p>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img
                            src="https://cdn.pixabay.com/photo/2015/02/26/15/40/doctor-650534_1280.jpg"
                            className="d-block w-100"
                            alt="Third slide"
                            style={{ width: '100%', height: '400px' }}
                        />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third slide label</h5>
                            <p>Some representative placeholder content for the third slide.</p>
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>

            
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                        </div>
                        <div className="modal-body">
                            <h3>Custom Domain</h3>
                            <p>For custom domain, we need some credentials to be set up.</p>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

            <button type="button" className="btn btn-primary mt-5 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Launch demo modal
            </button>
        </div>
    );
};

export default Main;
