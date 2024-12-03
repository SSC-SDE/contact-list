import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css"; // Import the CSS file

const API_URL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [contacts, setContacts] = useState([]);
  const [newContact, setNewContact] = useState({ name: "", email: "" });
  const [editContact, setEditContact] = useState(null);

  // Fetch contacts
  useEffect(() => {
    axios.get(API_URL).then((response) => setContacts(response.data));
  }, []);

  // Add contact
  const handleAddContact = async () => {
    if (!newContact.name || !newContact.email) return alert("All fields required");
    try {
      const response = await axios.post(API_URL, newContact);
      setContacts([...contacts, response.data]); // Add to state
      setNewContact({ name: "", email: "" }); // Clear input
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };

  // Update contact
  const handleUpdateContact = async () => {
    if (!editContact.name || !editContact.email) return alert("All fields required");
    try {
      const response = await axios.put(`${API_URL}/${editContact.id}`, editContact);
      setContacts(contacts.map((c) => (c.id === editContact.id ? response.data : c)));
      setEditContact(null); // Clear edit form
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };

  // Delete contact
  const handleDeleteContact = async (id) => {
    try {
      await axios.delete(`${API_URL}/${id}`);
      setContacts(contacts.filter((contact) => contact.id !== id)); // Remove from state
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <div className="app-container">
      <h1 className="app-title">Contact List</h1>

      {/* Add Contact Form */}
      <div className="form-container">
        <h2>Add Contact</h2>
        <input
          className="input-field"
          type="text"
          placeholder="Name"
          value={newContact.name}
          onChange={(e) => setNewContact({ ...newContact, name: e.target.value })}
        />
        <input
          className="input-field"
          type="email"
          placeholder="Email"
          value={newContact.email}
          onChange={(e) => setNewContact({ ...newContact, email: e.target.value })}
        />
        <button className="btn add-btn" onClick={handleAddContact}>
          Add
        </button>
      </div>

      {/* Edit Contact Form */}
      {editContact && (
        <div className="form-container">
          <h2>Edit Contact</h2>
          <input
            className="input-field"
            type="text"
            placeholder="Name"
            value={editContact.name}
            onChange={(e) => setEditContact({ ...editContact, name: e.target.value })}
          />
          <input
            className="input-field"
            type="email"
            placeholder="Email"
            value={editContact.email}
            onChange={(e) => setEditContact({ ...editContact, email: e.target.value })}
          />
          <button className="btn update-btn" onClick={handleUpdateContact}>
            Update
          </button>
          <button className="btn cancel-btn" onClick={() => setEditContact(null)}>
            Cancel
          </button>
        </div>
      )}

      {/* Contact List */}
      <h2>Contact List</h2>
      <ul className="contact-list">
        {contacts.map((contact) => (
          <li key={contact.id} className="contact-item">
            <span className="contact-details">
              {contact.name} - {contact.email}
            </span>
            <button className="btn edit-btn" onClick={() => setEditContact(contact)}>
              Edit
            </button>
            <button className="btn delete-btn" onClick={() => handleDeleteContact(contact.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
