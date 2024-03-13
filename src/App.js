import { getDefaultNormalizer } from "@testing-library/react";
import React, { useState } from "react";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Navigate,
} from "react-router-dom";
import Root, { ROUTES } from "./components/root/Root";
import { AppointmentsPage } from "./containers/appointmentsPage/AppointmentsPage";
import { ContactsPage } from "./containers/contactsPage/ContactsPage";

function App() {
  /*
  Define state variables for 
  contacts and appointments 
  */

  //below is the state variable for contacts
  const [contacts, setContacts] = useState([
    // {
    //   id: 1,
    //   name: "Bob Smith",
    //   phone: 5551234567,
    //   email: "bobsmith@gmail.com",
    // },
    // {
    //   id: 2,
    //   name: "Jane Doe",
    //   phone: 5552345678,
    //   email: "janedoe@gmail.com",
    // },
    // {
    //   id: 3,
    //   name: "John Test",
    //   phone: 5553456789,
    //   email: "johntest@gmail.com",
    // },
  ]);

  //below is the state variable for appointments
  const [appointments, setAppointments] = useState([
    // {
    //   id: 1,
    //   name: "Bob Smith",
    //   phone: 5551234567,
    //   email: "bobsmith@gmail.com",
    //   date: "03/18/3024",
    //   time: "2:00p",
    // },
    // {
    //   id: 2,
    //   name: "Jane Doe",
    //   phone: 5552345678,
    //   email: "janedoe@gmail.com",
    //   date: "03/20/3024",
    //   time: "1:00p",
    // },
    // {
    //   id: 3,
    //   name: "John Test",
    //   phone: 5553456789,
    //   email: "johntest@gmail.com",
    //   date: "03/22/3024",
    //   time: "12:00p",
    // },
  ]);

  /*
  Implement functions to add data to
  contacts and appointments
  */

  function addContact(name, phone, email) {
    setContacts([
      ...contacts,
      {
        name: name,
        phone: phone,
        email: email,
      },
    ]);
  }

  function addAppointment(name, contact, date, time) {
    setAppointments([
      ...appointments,
      {
        name: name,
        contact: contact,
        date: date,
        time: time,
      },
    ]);
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index element={<Navigate to={ROUTES.CONTACTS} replace />} />
        <Route
          path={ROUTES.CONTACTS}
          element={
            <ContactsPage
              addContact={addContact}
              contacts={contacts}
            /> /* Add props to ContactsPage */
          }
        />
        <Route
          path={ROUTES.APPOINTMENTS}
          element={
            <AppointmentsPage
              addAppointment={addAppointment}
              appointments={appointments}
              contacts={contacts}
            /> /* Add props to AppointmentsPage */
          }
        />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
