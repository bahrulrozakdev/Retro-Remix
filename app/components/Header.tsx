import { Link } from "@remix-run/react";

const Header = () => {
    return (
        <header>
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                <div className="container">
                    <Link className="navbar-brand" to="/">
                        PixelCompany
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item">
                                <Link className="nav-link" to="#home">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#services">Services</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#team">Team</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="#contact">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
