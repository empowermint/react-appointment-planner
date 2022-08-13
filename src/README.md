# React Appointment Planner

## Introduction

This is a challenege project from CodeCademy's Front End Engineer career path.

The starter code provided styles and sets up a tree of components. My task was to implement functionality using the following requirements:

## Requirements

### App

Based on the given requirements, implement App as a stateful component that maintains appointments and contacts. It should also pass those values, along with callback functions to update those state values, to its child components.

- Keep track of the contacts and appointments data, each being an array of objects
- Define a callback function that, given a name, phone number, and email, adds a new contact object with that data to the array of contacts
- Define a callback function that, given a title, contact, date, and time, adds a new appointment object with that data to the array of appointments
- Pass the array of contacts and the appropriate callback function as props to the ContactsPage component
- Pass the appointments array, contacts array, and the add appointment function as props to the AppointmentsPage component

### ContactsPage

Based on the given requirements, implement ContactsPage as a stateful component to handle the logic for adding new contacts and listing current contacts.

- Receive two props:
  - The current list of contacts
  - A callback function for adding a new contact
- Keep track of three local state values: the current name, phone, and email entered into the form
- Check for duplicates whenever the name in the form changes and indicate the name is a duplicate
- Only add a new contact on form submission if it does not duplicate an existing contact’s name
- A successful submission should clear the form
- In the Add Contact section, render a ContactForm with the following passed via props:
  - local state variables
  - local state variable setter functions
  - handleSubmit callback function
- In the Contacts section, render a TileList with the contact array passed via props

### ContactForm (Implemented 2022.08.13 with 1 TODO)

Based on the given requirements, implement ContactForm as a stateless component that renders a web form to collect the necessary contact information.

Render a form with:

- The onSubmit attribute set
- 3 controlled `<input>` elements, one for each piece of contact data
- A submit button
- Include a pattern attribute to the phone `<input>` with a regex that matches the phone locale of your preference TODO: Test this

### TileList Requirements (Implemented 2022.08.13)

Based on the given requirements, implement TileList as a stateless component that renders a list of Tile components using an array of objects.

- Receive one prop:
  - An array of objects to render as a list
- Use the array passed via props to iteratively render Tile components, passing each object in the array as a prop to each rendered Tile component

### Tile Requirements (Implemented 2022.08.13)

- Receive one prop:
  - An object
- Iterate over the values in the object, passed in via props, and render a `<p>` element for each value
- Give a className of "tile-title" to the first `<p>` element
- Give a className of "tile" to all other `<p>` elements

### AppointmentsPage Requirements

Based on the given requirements, implement AppointmentsPage as a stateful component that handles the logic for adding new appointments and listing current appointments.

- Receive three props:
  - The current list of appointments
  - The current list of contacts
  - A callback function for adding a new appointment
- Keep track of four local state variables, the current title, contact, date, and time entered into the form
- Add a new appointment on form submission
- Clear the form on submission
- In the Add Appointment section, render an AppointmentForm with the following passed via props:
  - local state variables
  - local state variable setter functions
  - handleSubmit callback function
- In the Appointments section, render a TileList with the appointment array passed via props

### AppointmentForm Requirements

Based on the given requirements, implement AppointmentForm as a stateless component that renders a web form to collect the necessary appointment information.

- Render a form with:
  - The onSubmit attribute set to the callback function passed in via props
  - 3 controlled input components, to be used for the title, date and time appointment data
  - A ContactPicker component with the contacts list passed in via props
  - A submit button
- Use getTodayString() to set the min attribute of the date input

### ContactPicker Requirements

Based on the given requirements, implement ContactPicker as a stateless component that renders a drop-down list of all contact names.

- Receive 2 props:
  - The array of contacts
  - A callback function to handle when the onChange event is triggered
- Render a select element with the onChange attribute set to the callback passed in via props
- Have a default first option element that indicates no contact is selected
- Iteratively add option elements using the contact names from the array passed in via props
