import React, { useState } from "react";
import contactStyles from "../styles/contact.module.css";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    noHp: "",
    location: "",
    date: "",
    salary: "0",
    message: "",
    child: 1,
    workingHours: "",
  });

  const {
    name,
    email,
    noHp,
    date,
    salary,
    message,
    child,
    location,
    workingHours,
  } = formData;

  const handleSubmit = () => {};

  const handleInputChange = (e) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section className={contactStyles.contact}>
      <div className={contactStyles.title}>
        <h2>Contact Me</h2>
        <p>Lets call me now</p>
      </div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">
            Name <br />
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              placeholder="e.g : Larasati Ningsih"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="email">
            Email <br />
            <input
              type="email"
              placeholder="e.g : larasati@gmail.com"
              value={email}
              id="email"
              name="email"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="noHp">
            Phone Number <br />
            <input
              type="tel"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
              required
              placeholder="e.g : +6285733300378"
              value={noHp}
              id="noHp"
              name="noHp"
              onChange={handleInputChange}
            />
          </label>
          <label htmlFor="location">
            Place to work <br />
            <input
              type="text"
              placeholder="e.g : Canggu, Bali"
              value={location}
              id="location"
              name="location"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="date">
            Date to work <br />
            <input
              type="date"
              value={date}
              id="date"
              name="date"
              onChange={handleInputChange}
              required
            />
          </label>
          <label htmlFor="workingHours">
            Working Hours <br />
            <input
              type="text"
              value={workingHours}
              id="workingHours"
              name="workingHours"
              onChange={handleInputChange}
              placeholder="e.g : 9:00 AM - 5:00 PM"
              required
            />
          </label>
          <label htmlFor="child">
            Number of child <br />
            <input
              type="number"
              value={child}
              id="child"
              name="child"
              onChange={handleInputChange}
              placeholder="e.g : 3"
              min="1"
              max="100"
              required
            />
          </label>
          <label htmlFor="salary">
            Dollar Salary <br />
            <input
              type="text"
              value={salary}
              id="salary"
              name="salary"
              onChange={handleInputChange}
              placeholder="$0"
              required
            />
          </label>
          <label htmlFor="salary">
            Message <br />
            <textarea
              type="text"
              value={message}
              id="message"
              name="message"
              onChange={handleInputChange}
              placeholder="Write your message!"
              required
            ></textarea>
          </label>
        </div>
        <div>
        <button>Submit Form</button>
        </div>
      </form>
    </section>
  );
};
