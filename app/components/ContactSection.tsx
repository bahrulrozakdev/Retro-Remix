const ContactSection = () =>{
    return(
        <section id="contact" className="section bg-dark">
        <div className="container">
            <h2 className="section-title">Contact Us</h2>
            <div className="row">
                <div className="col-md-6">
                    <h3>Get in Touch</h3>
                    <form>
                        <div className="mb-3">
                            <label htmlFor="name" className="form-label">Name</label>
                            <input type="text" className="form-control" id="name" required/>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address</label>
                            <input type="email" className="form-control" id="email" required/>
                        </div>
                        <button type="submit" className="btn btn-light">Send Message</button>
                    </form>
                </div>
                <div className="col-md-6">
                    <h3>Contact Information</h3>
                    <ul className="list-unstyled">
                        <li><strong>Address:</strong> 123 Street, City, Country</li>
                        <li><strong>Phone:</strong> +123 456 7890</li>
                        <li><strong>Email:</strong> info@pixelcompany.com</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
    )
}

export default ContactSection;