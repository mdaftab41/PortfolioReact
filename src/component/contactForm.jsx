import * as React from "react";
import { useState, useRef } from "react";
import Validation from "./Validation";
import emailjs from '@emailjs/browser';

function Form() {
  const [contact, setContact] = useState({
    fName: "",
    email: "",
    message: "",
  });
  const [filled, setFilled] = useState({
    fName: false,
    email: false,
    message: false,
  });
  const [error, setError] = useState({});

  function handleChange(event, fieldName) {
    const updatedContact = { ...contact, [fieldName]: event.target.value };
    setContact(updatedContact);

    if (event.target.value.trim() !== '') {
      setFilled(prevState => ({ ...prevState, [fieldName]: true }));
    } else {
      setFilled(prevState => ({ ...prevState, [fieldName]: false }));
    }
  }

  function handleValidation(event) {
    event.preventDefault();
    const validationErrors = Validation(contact);
    setError(validationErrors);

    return Object.keys(validationErrors).length === 0;
  }

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (!handleValidation(e)) {
      console.log("Validation failed");
      return;
    }

    emailjs.sendForm('service_043pogj', 'template_pv1bpah', form.current, 'llfasA3P2kyVi1tOC')
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        }
      );
  };
  
  // Function to reset form fields and state
  const resetForm = () => {
    setContact({
      fName: "",
      email: "",
      message: "",
    });
    setFilled({
      fName: false,
      email: false,
      message: false,
    });
    form.current.reset(); // Reset the form DOM element
  };

  return (
    <div className="pt-5 text-black">
      <form className="" ref={form} onSubmit={sendEmail}>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md input-container shadow-black">
          <label className={`relative ${filled.fName ? "unfilled" : ""}`}>
            <input
              onChange={(event) => handleChange(event, "fName")}
              name="from_name"
              title="Full Name"
              type="text"
              className="w-full transition duration-200 border-b-2 focus:outline-none focus:border-sky-500 invalid:border-pink-500"
            />
            <span className="absolute top-0 left-0 transition duration-200 input-text">Full Name</span>
            {error.fName && <p style={{ color: "red" }}>{error.fName}</p>}
          </label>
        </div>

        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className={`relative ${filled.email ? "unfilled" : ""}`}>
            <input
              onChange={(event) => handleChange(event, "email")}
              name="from_email"
              title="Email"
              type="text"
              className="w-full border-b-2 focus:outline-none focus:border-sky-500"
            />
            <span className="absolute top-0 left-0 transition duration-200 input-text">Email</span>
            {error.email && <p style={{ color: "red" }}>{error.email}</p>}
          </label>
        </div>

        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className={`relative ${filled.message ? "unfilled" : ""}`}>
            <input
              onChange={(event) => handleChange(event, "message")}
              name="message"
              title="Write Message"
              type="text"
              className="w-full overflow-auto border-b-2 focus:outline-none focus:border-sky-500 h-fit"
            />
            <span className="absolute top-0 left-0 transition duration-200 input-text">Write Message</span>
            {error.message && <p style={{ color: "red" }}>{error.message}</p>}
          </label>
        </div>

        <div className="mx-10">
          <button className="px-4 py-2 mb-1 mr-1 text-lg font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none active:bg-emerald-600 hover:shadow-md focus:outline-none bg-rose-700">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
