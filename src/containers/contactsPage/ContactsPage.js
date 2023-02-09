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
    e.target.reset();
  };

  return (
    <div>
      <section>
        <h2>Add Contact</h2>
        <ContactForm
          name={currentName} setName={(e) => setName(e.target.value)}
          phone={currentPhone} setPhone={(e) => setPhone(e.target.value)}
          email={currentEmail} setEmail={(e) => setEmail(e.target.value)}
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
