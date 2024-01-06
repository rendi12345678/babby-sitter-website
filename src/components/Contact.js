import React, { useEffect, useRef, useState } from "react";
import contactStyles from "../styles/contact.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";

export const Contact = () => {
  const [isReady, setIsReady] = useState(false);
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required!"),
    email: Yup.string().email("Invalid email").required("Email is required!"),
    noHp: Yup.string().required("Phone number is required!"),
    location: Yup.string().required("Location is required!"),
    date: Yup.date().required("Date is required!"),
    salary: Yup.string().required("Salary is required!"),
    message: Yup.string().required("Message is required!"),
    child: Yup.string().required("Number of children is required!"),
    workingHours: Yup.string().required("Working hours are required!"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      noHp: "",
      location: "",
      date: "",
      salary: "",
      message: "",
      child: "",
      workingHours: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      sendDataToWhatsApp(values);
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

  const checkFormData = () => {
    if (
      Object.values(formik.values).every((value) => value !== "") &&
      Object.values(formik.errors).every((error) => error === "")
    )
      return true;
    return false;
  };

  const submitButtonStyle = {
    color: "#fff",
    backgroundColor: isReady ? "var(--accent-color)" : "grey",
    cursor: checkFormData() ? "pointer" : "not-allowed",
  };

  const formatMessage = ({
    name,
    email,
    noHp,
    date,
    salary,
    message,
    child,
    location,
    workingHours,
  }) => {
    return `
    Booking data : 
    
    Name : ${name},
    noHp : ${noHp},
    Email : ${email}`;
  };

  const sendDataToWhatsApp = (values) => {
    const formatedMessage = formatMessage(values);

    window.open(
      `http://wa.me/6285733300369/?text=${encodeURIComponent(formatedMessage)}`
    );
  };

  useEffect(() => {
    if (checkFormData()) {
      setIsReady(true);
    } else {
      setIsReady(false);
    }

    console.log(checkFormData);

    console.log("Ready :", isReady);
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
            <br />
            {formik.errors.name !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.name}
              </p>
            )}
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
            <br />
            {formik.errors.email !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.email}
              </p>
            )}
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
            <br />
            {formik.errors.noHp !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.noHp}
              </p>
            )}
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
            <br />
            {formik.errors.location !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.location}
              </p>
            )}
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
            <br />
            {formik.errors.date !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.date}
              </p>
            )}
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
            <br />
            {formik.errors.workingHours !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.workingHours}
              </p>
            )}
          </label>
          <label htmlFor="child">
            Number of child <br />
            <input
              type="text"
              value={child}
              id="child"
              name="child"
              onChange={formik.handleChange}
              placeholder="e.g : 3"
              min="1"
              max="100"
              required
            />
            <br />
            {formik.errors.child !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.child}
              </p>
            )}
          </label>
          <label htmlFor="salary">
            Dollar Salary <br />
            <input
              type="text"
              value={salary}
              id="salary"
              name="salary"
              onChange={formik.handleChange}
              placeholder="Fill with dollar salary!"
              required
            />
            <br />
            {formik.errors.salary !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.salary}
              </p>
            )}
          </label>
          <label htmlFor="message">
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
            <br />
            {formik.errors.message !== "" && (
              <p
                style={{
                  color: "red",
                  marginTop: "1rem",
                }}
              >
                {formik.errors.message}
              </p>
            )}
          </label>
        </div>
        <div>
          <button
            type="button"
            disabled={!isReady}
            style={submitButtonStyle}
            onClick={submitForm}
          >
            Submit Form
          </button>
        </div>
      </form>
    </section>
  );
};
