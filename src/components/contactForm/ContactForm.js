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
      <label>Name: 
        <input type="text" name="name" value={name}
          onChange={setName}
        />
      </label>
      <label>Phone Number: 
        <input type="tel" name="phone" value={phone}
          onChange={setPhone}
          pattern="[0-9]{11}" title="11 digits long"
        />
      </label>
      <label>Email Address: 
        <input type="email" name="email" value={email}
          onChange={setEmail}
        />
      </label>
      <input type="submit" value="Submit" />
    </form>
  );
};
