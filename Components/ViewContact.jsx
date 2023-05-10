import React from 'react'
import { Link } from 'react-router-dom'

function ViewContact() {
  return (
    <React.Fragment>
        <section  className='container'>
              <div className='row'>
                <div className='col'>
                    <p className=' h3 text-warning fw-bold p-3'>View Contact</p>
                </div>
              </div>
        </section>
        <section className='view-contact p-3'>
            <div className='container'>
           <div className='row'>
           <div className='col-md-4'>
<img src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'width={"120px"}height={"120px"} className='contact-img' alt='username'/>
                </div>
                <div className='col-md-8'>
<ul className='list-group align-item-center'>
    <li className='list-group-item list-group-item-action'>
        Name:<span className='fw-bold'>Anil</span>

    </li>
    <li className='list-group-item list-group-item-action'>
        Gender:<span className='fw-bold'>Male</span>

    </li>
    <li className='list-group-item list-group-item-action'>
        Mobile:<span className='fw-bold'>8542929297</span>

    </li>
    <li className='list-group-item list-group-item-action'>
        CompanyName:<span className='fw-bold'>XYZ Solutions</span>

    </li>
    <li className='list-group-item list-group-item-action'>
        Title:<span className='fw-bold'>SDE1</span>

    </li>
    <li className='list-group-item list-group-item-action ms-2'>
        BloodGroup:<span className='fw-bold'>O+</span>

    </li>
</ul>
                    
                </div>
           </div>
            </div>
            <div className='row'>
                <div className='col'>
                    <Link to={"/"}className='btn btn-warning'>Back</Link>
                </div>
            </div>

        </section>
    </React.Fragment>
  )
}

export default ViewContact
