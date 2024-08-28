const ServiceSection = () =>{
    return(
        <section id="services" className="section bg-dark">
        <div className="container">
            <h2 className="section-title">Our Services</h2>
            <div className="row">
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Service 1</h5>
                            <p className="card-text">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                            <a href="#" className="btn btn-outline-dark">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Service 2</h5>
                            <p className="card-text">Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.</p>
                            <a href="#" className="btn btn-outline-dark">Learn More</a>
                        </div>
                    </div>
                </div>
                <div className="col-md-4">
                    <div className="card mb-4">
                        <div className="card-body">
                            <h5 className="card-title">Service 3</h5>
                            <p className="card-text">Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                            <a href="#" className="btn btn-outline-dark">Learn More</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ServiceSection;