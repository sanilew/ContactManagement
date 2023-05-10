// import logo from './logo.svg';
// import React from 'react';
import './App.css';
import Navbar from './Components/Navbar';
import {Route, Routes} from "react-router-dom"
import ContactList from "./Components/ContactList"
import * as React from "react";
// import * as ReactDOM from "react-dom";
import AddContact from "./Components/AddContact"
import ViewContact from "./Components/ViewContact"
import EditContact from "./Components/EditContact"
// import ViewContact from "./Components/ViewContact"

function App() {
  return (
    <React.Fragment>
     <Navbar/> 
      <Routes>
        <Route path={"/"} element={<ContactList/>}/>

       <Route path={"/addcontact"} element={<AddContact/>}/>
       <Route path={"/viewcontact/:viewcontact"} element={<ViewContact/>}/>
       <Route path={"/editcontact/:editcontact"} element={<EditContact/>}/>
       

      </Routes>
    </React.Fragment>
  );
}

export default App;
