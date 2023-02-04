import React from "react";

export const ContactPicker = ({ contacts, onChange }) => {
  return (
  <>
    <label htmlFor={contacts}>Select Contact: </label>
    <select name="Contacts" id="contacts" onChange={onChange}>
      <option value="None" key="None">Select...</option>
      {contacts.map((contact) => {
        return <option value={contact} key={contact}>{contact}</option>
      })}
    </select>
  </>
  );
};
