import React, {useState} from "react";

import { ContactForm }  from "../../components/contactForm/ContactForm";
import { TileList } from "../../components/tileList/TileList";

export const ContactsPage = ({ contacts, addContact }) => {
  const [currentName, setName] = useState("");
  const [currentPhone, setPhone] = useState("");
  const [currentEmail, setEmail] =  useState("");
  const existingContactNames = contacts.map(contact => contact.name);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (existingContactNames.includes(currentName)) return;
    addContact(currentName, currentPhone, currentEmail);
    setName("");
    setPhone("");
    setEmail("");
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName} setName={setName}
          phone={currentPhone} setPhone={setPhone}
          email={currentEmail} setEmail={setEmail}
          handleSubmit={handleSubmit}
          />
      </section>
      <hr />
      <section>
        <h2>Contacts</h2>
        <TileList display={contacts} />
      </section>
    </div>
  );
};

export default ContactsPage;
