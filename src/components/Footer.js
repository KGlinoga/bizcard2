import React from "react"
import {
    FaTwitterSquare,
    FaFacebookSquare,
    FaInstagramSquare,
    FaLinkedin,
    FaGithubSquare
} from "react-icons/fa";

export default function Footer() {
    return (
        <div className="footer">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
                <FaTwitterSquare className="icon" />
            </a>

            <a href="https://facebook.com" target="_blank" rel="noreferrer">
                <FaFacebookSquare className="icon" />
            </a>

            <a href="https://Instagram.com" target="_blank" rel="noreferrer">
                <FaInstagramSquare className="icon" />
            </a>

            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
                <FaLinkedin className="icon" />
            </a>

            <a href="https://github.com" target="_blank" rel="noreferrer">
                <FaGithubSquare className="icon" />
            </a>
        </div>
    )
}