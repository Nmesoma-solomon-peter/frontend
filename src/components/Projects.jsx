import React from 'react'
import './Projects.css'
import anaplan from '../assets/anaplan.png'
import hubspot from '../assets/hubspot.png'
import phantom from '../assets/phantom.png'
import zakaraya from '../assets/zakaraya.png'
import 'animate.css';
import { useInView } from 'react-intersection-observer';


const Projects = () => {
    const { ref, inView, entry } = useInView({
        /* Optional options */
        threshold: 0,
    });

    
    return (
        <div className='procontainer-fluid'>
            <p className='projectintro'>Visit my recent projects and let me know what you think</p>
            <h3 className='projecth3 ' id='projects' >My Projects</h3>
            <div className={inView ? 'animate__animated animate__slideInLeft' : ' '} ref={ref}>
                <div className='row kardrow mt-5' >
                    <h2 className='text-white'>{console.log(inView)} </h2>
                    <div className='col col-md-4 '>
                        <div className={inView?' kardinner animate__animated animate__zoomIn animate__delay-1s': ''}>
                            <a href='https://phantom-clone.web.app/' style={{ textDecoration: 'none' }}>
                                <img src={phantom} alt='phantom-clone' className='kardimg' />
                                <h4 className='text-white mt-5 proh4'>Phantom website clone</h4>
                            </a>
                        </div>
                    </div>
                    <div className='col col-md-4'>
                        <div className='kardinner'>
                            <a href='https://nmesoma-solomon-peter.github.io/anaplan/' style={{ textDecoration: 'none' }}>
                                <img src={anaplan} alt='phantom-clone' className='kardimg' />
                                <h4 className='text-white mt-4 proh4'>Anaplan Homepage clone</h4>
                            </a>
                        </div>
                    </div>
                    <div className='col col-md-4'>
                        <div className={inView?' kardinner animate__animated animate__zoomIn animate__delay-1s': ''}>
                            <a href='https://zakariya-b0845.web.app/' style={{ textDecoration: 'none' }}>
                                <img src={zakaraya} alt='phantom-clone' className='kardimg' />
                                <h4 className='text-white mt-4 proh4'>zakaraya portfolio</h4>
                            </a>
                        </div>
                    </div>
                    <div className='col col-md-4'>
                        <div className={inView?' kardinner animate__animated animate__slideInRight animate__delay-1s': ''}>
                            <a href='https://nmesoma-solomon-peter.github.io/hubredesign/' style={{ textDecoration: 'none' }}>
                                <img src={hubspot} alt='phantom-clone' className='kardimg' />
                                <h4 className='text-white mt-4 proh4'>Hubspot Homepage Clone</h4>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
            <a href='#contact'>
                <button type="button" class="btn outline__btn btn-lg mt-5 project__btn">Contact me</button>
            </a>




        </div>
    )
}

export default Projects