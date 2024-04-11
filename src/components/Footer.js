import React from "react";
import { FaGithub } from "react-icons/fa";


const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>
                    © {new Date().getFullYear()} Hangman Game. All rights reserved.{" "}
                    <a
                        href="https://github.com/Elvissunguti/Hangman-Game.git"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub Repository"
                        className="github-link"
                    >
                        <FaGithub className="github-icon" />
                    </a>
                </p>
            </div>
        </footer>
    );
}

export default Footer;
