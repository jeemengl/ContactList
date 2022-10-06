import React, {useState, useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import { v4 as uuidv4 } from 'uuid'; 
import Header from './components/Header';
import api from "./api/contacts";
import AddContact from "./components/AddContact";
import EditContact from "./components/EditContact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";

function App() {
  const [contacts, setContacts] = useState([]);

  // add contacts
  const addContactHandler = async (contact) => {
    const request = {
      id: uuidv4(),
      ...contact
    }
    const response = await api.post("/contacts", request)
    setContacts([...contacts, response.data]);
  }

  //update contacts
  const editContactHandler = async (contact) => {
    console.log(contact)
    const response = await api.put(`/contacts/${contact.id}`, contact);
  }

  // retrieve contacts
  const retrieveContacts = async ()=>{
    const response = await api.get("/contacts");

    return response.data
  }

  // delete contacts
  const removeContactHandler = async (id) => {
    await api.delete(`/contacts/${id}`)
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });

    setContacts(newContactList)
  }

  useEffect(() => {
    // const retrieveContacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE));
    // if(retrieveContacts) setContacts(retrieveContacts)
    const getAllContacts = async () => {
      const allContacts = await retrieveContacts();
      if (allContacts) setContacts(allContacts)
    };
    getAllContacts()
  }, [])

  useEffect(() => {
    // localStorage.setItem(LOCAL_STORAGE, JSON.stringify(contacts))
  }, [contacts])

  return (
    <div>
      <Router>
        <Header />
        <Routes>
        <Route 
            path="/" 
            exact 
            element={<ContactList contacts={contacts} getContactId = {removeContactHandler}></ContactList>}></Route>
          <Route path="/add" element={<AddContact addContactHandler={addContactHandler}></AddContact>}></Route>
          <Route path="/contact/:id" element={<ContactDetail></ContactDetail>}></Route>
          <Route path="/edit/:id" element={<EditContact editContactHandler={editContactHandler} retrieveContacts={retrieveContacts()}></EditContact>}></Route>
        </Routes>
        {/* <AddContact addContactHandler={addContactHandler}/>
        <ContactList contacts = { contacts } getContactId = {removeContactHandler}/> */}
      </Router>

    </div>
  );
}

export default App;
