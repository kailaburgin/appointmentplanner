import React from "react";

// props from contactspage.js
// name={name}
// setName={setName}
// phone={phone}
// setPhone={setPhone}
// email={email}
// setEmail={setEmail}
// handleSubmit={handleSubmit}

export const ContactForm = ({
  name,
  setName,
  phone,
  setPhone,
  email,
  setEmail,
  handleSubmit,
}) => {
  return (
    <>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            // id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            placeholder="Contact Name"
            aria-label="Contact Name"
          />
        </div>
        <div>
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            // id="phone"
            name="phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            // regex is for US phone numbers
            pattern="[1-9][0-9]{2}-[1-9][0-9]{2}-[0-9]{4}"
            placeholder="Phone Number (###-###-####)"
            aria-label="Phone Number"
          />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            //id="email"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            placeholder="Email"
            aria-label="Email"
          />
        </div>
        <input aria-label="Add Contact" type="submit" value="Add Contact" />
      </form>
    </>
  );
};
