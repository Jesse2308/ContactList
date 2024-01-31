import React, { useEffect, useState } from "react";

const SelectedContact = ({ selectedContactId, setSelectedContactId }) => {
  const [contact, setContact] = useState([null]);
  useEffect(() => {
    async function fetchContact() {
      const APIURL = `https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users/${selectedContactId}`;
      try {
        const response = await fetch(APIURL);
        const result = await response.json();
        setContact(result);
      } catch (error) {
        console.error(error);
      }
    }
    fetchContact();
  }, []);

  return (
    contact && (
      <div>
        <h2>{contact.name}</h2>
        <p>{contact.phone}</p>
        <p>{contact.email}</p>
        <button onClick={() => setSelectedContactId(null)}>
          Back To List!
        </button>
      </div>
    )
  );
};
export default SelectedContact;
