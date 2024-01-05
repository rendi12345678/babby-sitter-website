import React, { useEffect, useRef, useState } from "react";
import contactStyles from "../styles/contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    noHp: Yup.string()
      .matches(/^\+\d{1,}-\d{3}-\d{3}-\d{4}$/, "Invalid phone number format")
      .required("Phone number is required!"),
    location: Yup.string().required("Location is required!"),
    date: Yup.date().required("Date is required!"),
    salary: Yup.number()
      .min(0, "Salary cannot be negative")
      .required("Salary is required!"),
    message: Yup.string().required("Message is required!"),
    child: Yup.number()
      .min(1, "Number of children must be at least 1")
      .required("Number of children is required!"),
    workingHours: Yup.string().required("Working hours are required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      noHp: "",
      location: "",
      date: "",
      salary: "0",
      message: "",
      child: 1,
      workingHours: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Data:", values);
    },
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
  } = formik.values;

  const submitForm = () => {
    console.log("Submit Form!");
    formik.submitForm();
  };

  useEffect(() => {
    console.log("Errors :", formik.errors);
  }, [formik.values]);

  return (
    <section className={contactStyles.contact}>
      <div className={contactStyles.title}>
        <h2>Contact Me</h2>
        <p>Lets call me now</p>
      </div>
      <form onSubmit={formik.handleSubmit}>
        <div>
          <label htmlFor="name">
            Name <br />
            <input
              type="text"
              value={name}
              id="name"
              name="name"
              placeholder="e.g : Larasati Ningsih"
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
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
              onChange={formik.handleChange}
              placeholder="Write your message!"
              required
            ></textarea>
          </label>
        </div>
        <div>
          <button type="button" onClick={submitForm}>
            Submit Form
          </button>
        </div>
      </form>
    </section>
  );
};
