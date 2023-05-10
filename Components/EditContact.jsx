import React from 'react'
import { Link } from 'react-router-dom'

const EditContact = () => {
  return (
    <React.Fragment>
        <h3>EditContact</h3>
    <section className='add-contact p-1'> 
        <div className='container'>
            <div className='add-contact'>
                <div className='row'>
                    <div className='col'>
                        <p className='h4 text-success fw-bold'>Create Contact</p>
                    </div>
                </div>
            </div>
        </div>
        <div className='row'>
            <div className='col-md-4'>
                <form>
                    <div className='mb-2'>
                        <input type='text' className='form-control' placeholder='Name'/>
                    </div>
                    <div className='mb-2'>
                        <input type='text' className='form-control' placeholder='PHOTOURL'/>
                    </div>
                    <div className='mb-2'>
                        <input type='number' className='form-control' placeholder='MobileNUmber'/>
                    </div>
                    <div className='mb-2'>
                        <input type='email' className='form-control' placeholder='Email'/>
                    </div>
                    <div className='mb-2'>
                        <input type='text' className='form-control' placeholder='CompanyName'/>
                    </div>
                    <div className='mb-2'>
                        <input type='text' className='form-control' placeholder='Title'/>
                    </div>
                    <div className='mb-2'>
                        <select className='form-control'>
                            <option value={""}>Select a Group</option>
                        </select>
                    </div>
                    <div className='mb-2'>
                        <input type='submit' className='btn btn-success' placeholder='create'/>
                        <Link to={"/"} className='btn btn-dark'>Cancel</Link>
                    </div>
                </form>
            </div>
        </div>

    </section>
   </React.Fragment>
    
  )
}

export default EditContact
