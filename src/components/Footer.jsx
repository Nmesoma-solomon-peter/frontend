import React from 'react'
import './Footer.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
function Footer() {
    return (
        <div className='footer text-white'>
            <div className='footer__icon'>
                <a href='https://www.linkedin.com/in/nmesoma-peter-5785b9209/'>
                    <img src={linkedin} alt='linkedin' className='me-3 footerlogo' />
                </a>
                <a href='https://github.com/Nmesoma-Solomon-Peter'>
                    <img src={github} alt='github' className='me-3 footerlogo' />
                </a>
                <a href='https://twitter.com/NmesomaSolomon'>
                    <img src={twitter} alt='twitter' className='me-3 footerlogo' />
                </a>
            </div>
            <div className='copyright'>
                © {new Date().getFullYear()} NP portfolio. All Rights Reserved
            </div>
        </div>
    )
}

export default Footer