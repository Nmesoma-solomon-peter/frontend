import React from 'react';
import './Aboutsec.css';
import { TypeAnimation } from 'react-type-animation';
import portfolioimg from '../assets/portfolioimg.png'


function Aboutsec() {
    return (
        <div className='seccontainer-fluid'>
            <div className='row'>
                <div className='col col-md-6'>
                    <div className='about__intro' id='about'>
                        <h1 className='about__introh1'>Hello,</h1>
                        <h1 className='about__introh1'>I am <span className='text-secondary'>Nmesoma Peter</span>,
                            <span className='tanimation'
>
                                <TypeAnimation
                                    sequence={['ALX Certified Software Engineer', 1000, 'Front-end Developer', 1000, 'Back-end Developer', 1000]}
                                    //  Replacing previous Text
                                    // style={{ fontSize: '39px' }}
                                    wrapper="h2"
                                    repeat={Infinity}
                                />
                            </span>
                        </h1>

                    </div>
                    <p className='about__introp'>I design and develop services for customers of all sizes, specializing in creating stylish, modern websites, web services and online stores. </p>
                    <div className='buttonsec mt-5'>
                        <button type="button" class="btn white__btn btn-lg">
                            <a href="src/assets/cv3.pdf" download="cv3.pdf" style={{ textDecoration: "none" }}>Download CV <i class="bi bi-file-earmark-arrow-down"></i></a>
                        </button>
                        <a href='#projects'>
                            <button type="button" class="btn outline__btn  btn-lg">See my works <span><i class="bi bi-arrow-right"></i></span></button>
                        </a>
                    </div>
                </div>
                <div className='col col-md-6'>
                    <img src={portfolioimg} alt='portfolioimg' className='portfolioimg' />
                </div>
            </div>
        </div>
    )
}

export default Aboutsec