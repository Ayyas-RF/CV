import React from "react";
import "./Styles/Footer.css";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="footer">
            <div className="footer-content">
                <p>{currentYear} Made with Vite & React</p>
                <div className="footer-links">
                    <a
                        href="https://github.com/Ayyas-RF"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <i className="fab fa-github"></i> GitHub
                    </a>
                    <a href="mailto:berrzert9@gmail.com">
                        <i className="fas fa-envelope"></i> Email
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
