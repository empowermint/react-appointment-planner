import React, { useState } from "react";

import AppointmentForm from '../../components/appointmentForm/AppointmentForm'
import TileList from '../../components/tileList/TileList'

export const AppointmentsPage = ({appointments, contacts, addAppointment}) => {
  const [title, setTitle] = useState("");
  const [contact, setContact] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addAppointment(title, contact, date, time);
    e.target.reset();
  };

  return (
    <div>
      <section>
        <h2>Add Appointment</h2>
        <AppointmentForm
          title={title} setTitle={(e) => setTitle(e.target.value)}
          contacts={contacts}
          contact={contact} setContact={(e) => setContact(e.target.value)}
          date={date} setDate={(e) => setDate(e.target.value)}
          time={time} setTime={(e) => setTime(e.target.value)}
          handleSubmit={handleSubmit}
        />
      </section>
      <hr />
      <section>
        <h2>Appointments</h2>
        <TileList display={appointments} />
      </section>
    </div>
  );
};
