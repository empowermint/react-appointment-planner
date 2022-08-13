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
      <input type="text" name="name" id="name"
        onChange={setName}
      />
      <label htmlFor="phone">Phone Number: </label>
      <input type="tel" name="phone" id="phone"
        onChange={setPhone}
        pattern="[0-9]{11}" title="11 digits long"
      />
      <label htmlFor="email">Email Address: </label>
      <input type="email" name="email" id="email"
        onChange={setEmail}
      />
      <input type="submit" value="Submit" />
    </form>
  );
};
