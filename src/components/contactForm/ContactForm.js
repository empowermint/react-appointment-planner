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
      <input name="name" id="name"></input>
      <label htmlFor="phone">Phone Number: </label>
      <input name="phone" id="phone"></input>
      <label htmlFor="email">Email Address: </label>
      <input name="email" id="email"></input>
    </form>
  );
};
