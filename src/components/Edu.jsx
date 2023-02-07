import React from 'react'
import './Edu.css'

function Edu() {
    return (
        <div>
            <div className='row mb-5 edu'>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>Full stack Software Engineering </h3>
                    <h6>ALX Africa</h6>
                    <h6 className='skildate'>2021-2022 </h6>
                    <p className='skilp'>Completed a highly competitive 12 months Software Engineering program at ALX.</p>
                </div>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>Microsoft / Web development</h3>
                    <h6>Connak Foundation</h6>
                    <h6 className='skildate'>2020-2021</h6>
                    <p className='skilp'>Completed a 9 months training on Microsoft packages and web development</p>
                </div>
            </div>


            <div className='row edu'>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>Junior Secondary School</h3>
                    <h6>Unique Christian High School</h6>
                    <h6 className='skildate'>2013 - 2016 </h6>
                    <p className='skilp'>Completed my traditional Junior high school at Unique Christian High School</p>
                </div>
                <div className='col col-md-6 skilrow'>
                    <h3 className='skilh3'>Senior Secondary School</h3>
                    <h6>Unique Christian High School</h6>
                    <h6 className='skildate'>2016 - 2019  </h6>
                    <p className='skilp'>Completed my traditional Senior high school at Unique Christian High School</p>
                </div>

            </div>
        </div>
    )
}

export default Edu