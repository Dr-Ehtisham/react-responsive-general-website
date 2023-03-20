import React from 'react'
import { NavLink } from 'react-router-dom'


const Common = (props) => {
  return (
    <>
      
      <section id='header' className='d-flex align-items-center'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-12 mx-auto">
            <div className='row'>
                 <div className='col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column'>

                  <h1>
                  {props.name}
                  <strong className='brand-name'> Ehtisham</strong>
                  </h1>
                  <h2 className='my-3'>We are the team of talented developer making websites</h2>

                  <div className='mt-3'>
                   <NavLink to={props.visit} className='btn-get-started'>{props.btname}</NavLink>
                  </div>

                 </div>
                

                <div className='col-lg-6 order-1 order-lg-2 header-img'>
                 <img src='https://media.istockphoto.com/id/1401460590/photo/businessman-working-on-laptop-with-document-management-icon.jpg?b=1&s=170667a&w=0&k=20&c=4H439mT0eE_ltwbhV6MNmDNnkyzIVM-D1DQ3qvbI6eE=' className='img-fluid animated' />
                </div>
                </div>


                </div>
            </div>
        </div>
      </section>


    </>
  )
}

export default Common
