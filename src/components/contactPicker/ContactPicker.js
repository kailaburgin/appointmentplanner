import React from "react";

//props received from appointmentform.js
// name="contact"
// value={contact}
// contacts={contactNames}
// onChange={(e) => setContact(e.target.value)}

export const ContactPicker = ({ contacts, onChange, value, name }) => {
  return (
    <select
      value={value}
      name={name}
      onChange={onChange}
      aria-label="Contact Picker"
    >
      <option value={""} key={-1}>
        No Contact Selected
      </option>
      {contacts.map((contact) => {
        return (
          <option value={contact} key={contact}>
            {contact}
          </option>
        );
      })}
    </select>
  );
};
