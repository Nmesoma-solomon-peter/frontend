import React from 'react'
import './Contact.css'
import linkedin from '../assets/linkedin.png'
import github from '../assets/github.png'
import twitter from '../assets/twitter.png'
function Contact() {
    return (
        <div className='seccontainer-fluid' id='contact'>
            <div className='row'>
                <div className='col col-md-6'>
                    {/* <form>
                        <input></input>
                    </form> */}
                    <form>
                        <div className="mb-3">
                            <label for="name" className="form-label text-white">Name:</label>
                            <input type="text" className="form-control" id="name" required />
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label text-white">Email address:</label>
                            <input type="email" className="form-control" required id="exampleInputEmail1" aria-describedby="emailHelp" />
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label text-white">Message:</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>

                        <button type="submit" class="btn btn-lg btn-outline-secondary mt-4 submitbtn">Let's get in Touch</button>
                    </form>
                </div>
                <div className='col col-md-6 '>
                    <div className='contact2col'>
                        <h3 className='text-white contactme'>Contact <span className='text-secondary'>Me!</span></h3>
                        <div className='ms-4 mt-4 clog'>
                            <a href='https://www.linkedin.com/in/nmesoma-peter-5785b9209/'>
                                <img src={linkedin} alt='linkedin' className='me-3' />
                            </a>
                            <a href='https://github.com/Nmesoma-Solomon-Peter'>
                                <img src={github} alt='github' className='me-3' />
                            </a>
                            <a href='https://twitter.com/NmesomaSolomon'>
                                <img src={twitter} alt='twitter' className='me-3' />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact