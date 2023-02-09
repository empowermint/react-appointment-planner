import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
  <>
    <label>Select Contact:
      <select name="Contacts" id="contactSelector" onChange={onChange}>
        <option value="No contact selected" key="none">Select...</option>
        {contacts.map((contact) => {
          return <option value={contact.name} key={contact.name}>{contact.name}</option>
        })}
      </select>
    </label>
  </>
  );
};
