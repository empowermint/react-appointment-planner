import React from "react";

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit
}) => {
  return (
    <form onSubmit={handleSubmit}> 
      <label htmlFor="name">Name: </label>
      <input type="text" name="name" id="name" />
      <label htmlFor="phone">Phone Number: </label>
      <input type="text" name="phone" id="phone"
        pattern="" />
      <label htmlFor="email">Email Address: </label>
      <input type="text" name="email" id="email" />
      <input type="submit" value="Submit" />
    </form>
  );
};
