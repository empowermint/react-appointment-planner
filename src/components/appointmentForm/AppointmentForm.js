import React from "react";
import { ContactPicker } from "../contactPicker/ContactPicker";

export const AppointmentForm = ({
  contacts,
  title,
  setTitle,
  contact,
  setContact,
  date,
  setDate,
  time,
  setTime,
  handleSubmit
}) => {
  const getTodayString = () => {
    const [month, day, year] = new Date()
      .toLocaleDateString("en-US")
      .split("/");
    return `${year}-${month.padStart(2, "0")}-${day.padStart(2, "0")}`;
  };

  return (
    <form name="Appointment Form" onSubmit={handleSubmit}>
      <ContactPicker contacts={contacts} onChange={setContact} contact={contact} />
      <input type="text" name="title" value={title} onChange={setTitle}  />
      <input type="date" name="date" value={date} onChange={setDate} min={getTodayString()} />
      <input type="time" name="time" value={time} onChange={setTime} />
      <input type="submit" value={"Submit"} />
    </form>
  );
};
