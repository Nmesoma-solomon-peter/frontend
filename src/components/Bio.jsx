import React from 'react'
import './Bio.css'

function Bio() {
    return (
        <div>
            <div className='row'>
                    <div className='col col-md-6 '>
                        <div className='bio__inner'>
                            <h6>Name:</h6>
                            <p className='eduskillp'>Nmesoma Solomon Peter</p>
                        </div>
                        <div className='bio__inner'>
                            <h6>Nationality:</h6>
                            <p className='eduskillp'>Nigerian</p>
                        </div>
                        <div className='bio__inner'>
                            <h6>Place of Residence:</h6>
                            <p className='eduskillp'>Nigeria</p>
                        </div>
                        <div className='bio__inner'>
                            <h6>LinkedIn:</h6>
                            <p className='eduskillp'>Nmesoma Peter</p>
                        </div>

                    </div>
                    <div className='col col-md-6'>
                        <div className='bio__inner'>
                            <h6>Birthmonth:</h6>
                            <p className='eduskillp'>28 September</p>
                        </div>
                        <div className='bio__inner'>
                            <h6>Address:</h6>
                            <p className='eduskillp'>4 Nwanganga street Aba, Abia State, NG</p>
                        </div>
                        <div className='bio__inner'>
                            <h6>Phone:</h6>
                            <p className='eduskillp'>+2348171519326</p>
                        </div>
                        <div className='bio__inner'>
                            <h6>Freelance:</h6>
                            <p className='eduskillp'>Available</p>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default Bio