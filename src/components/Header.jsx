import React from 'react'
import './Header.css'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div className='header'>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary header">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#"><img src={logo} alt="logo" className='logo' /></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link  me-5" aria-current="page" href="#about">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  me-5" aria-current="page" href="#projects">Projects</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  me-5" aria-current="page" href="#skill">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link  me-5" aria-current="page" href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Header