import { useEffect } from 'react';
import React, { useState } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { ContactService } from '../Services/ContactServices';

function ContactList() {
 
  let [state,setState]=useState( initialstate, {
    loading:false,
    contacts:[],
    errorMessege:" "

  }

  );

  useEffect(async()=>{
    try {
      let response= await ContactService.getAllContacts();
      console.log(response.data)
    }
    catch (error) {

    }

  }, []);



  return (
    <>
    <section className='contact-search  p-3' >
      <div className='container'>
        <div className='grid-1'>
          <div className='row'>
            <div className='col-lg-4'>
              <p className='h3'>Contact Manager</p>
              </div>
              <div className='col-lg-2'>
              <Link to ={"/addcontact"} className='btn btn-primary ms-2'><i className='fa fa-plus-circle'/>AddContact</Link>

              </div>
          </div>
          <div className='row p-5'>
            <div className='col-md-6'>
              <form >
                <div>
                  <input type='text' className='form-control' placeholder='Search Names'/>
                </div>
              </form>

            </div>
            <div className='col-md-6'>
              <form>
                <div>
                  <input type='button' className='btn btn-outline-dark' value='Search'/>
                </div>
              </form>

            </div>
          </div>
        </div>
      </div>
    </section>
    <section>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='card deflex justify-content-around'>
              <div className='row'>
              <div className='card-body'>
                <div className='row'>
                <div className='col-md-4'>
                      <img src='https://png.pngtree.com/png-clipart/20191120/original/pngtree-outline-user-icon-png-image_5045523.jpg'className='img-fluid' alt="username"/>
                       </div>
                
                <div className='col-md-4'>
                  <ul className='list-group-item list-group-item-action'>
                    Name:<span className='fw-bold'>Anil</span>
                  </ul>
                  <div >
                  Contact: +91-8542929297
                </div>
     <div className='col-md-4'>
      <Link to={"/viewcontact/:viewcontact"} className="btn btn-warning my-2">
        <i className='fa fa-eye'/> ViewContact
      </Link>
      <Link to={"/editcontact/:editcontact"} className="btn btn-warning my-2">
        <i className='fa fa-pen'/> EditContact
      </Link>
      <Link to={"/viewcontact/:viewcontact"} className="btn btn-danger my-2">
        <i className='fa fa-eye'/> Delete
      </Link>
     </div>
                
                </div>
                
                </div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}

export default ContactList
