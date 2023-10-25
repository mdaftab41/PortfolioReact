import * as React from "react";
import { useState } from "react";
import Validation from "./Validation";

function Form() {
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
    message: "",
  });
  const [filled, setFilled] = useState(false);
  const [error, setError] = useState({});

  function handleChange(event) {
    const newObj = { ...contact, [event.target.name]: event.target.value };
    setContact(newObj);
    if (Object.values(newObj).some(value => value.trim() !== '')) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }

  function handleValidation(event) {
    event.preventDefault();
    const validationErrors = Validation(contact);
    setError(validationErrors);

    // Check if there are any errors before submitting
    if (Object.keys(validationErrors).length === 0) {
      // Perform your submit logic here
      console.log("Form submitted:", contact);
    }
  }

  return (
    <div className="pt-5 bg-yellow-50">
      <form className="" onSubmit={handleValidation}>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md input-container shadow-black">
          
          <label className=   {`relative ${filled ? "unfilled" : ""}`}>
            <input
            onChange={handleChange}
            name="fName"
            title="First Name"
            type="text"
            className="transition duration-200 border-b-2 focus:outline-none focus:border-sky-500 invalid:border-pink-500 md:w-96"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text">First Name</span>
          {error.fName && <p style={{ color: "red" }}>{error.fName}</p>}
          </label>
        </div>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className=   {`relative ${filled ? "unfilled" : ""}`}> 
          <input
            onChange={handleChange}
            name="lName"
            title="Last Name"
            type="text"
            className="border-b-2 focus:outline-none focus:border-sky-500 md:w-96"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text">Last Name</span>
          {error.lName && <p style={{ color: "red" }}>{error.lName}</p>}
          </label>
        </div>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className=   {`relative ${filled ? "unfilled" : ""}`}>
          <input
            onChange={handleChange}
            name="email"
            title="Email"
            type="text"
            className="border-b-2 focus:outline-none focus:border-sky-500 md:w-96"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text"> Email</span>
          {error.email && <div><p style={{ color: "red" }}>{error.email}</p>
          </div>}
          </label>
        </div>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className=   {`relative ${filled ? "unfilled" : ""}`}> 
          <input
            onChange={handleChange}
            name="massage"
            title="Write Massage"
            type="text"
            className="overflow-auto border-b-2 focus:outline-none focus:border-sky-500 md:w-96 h-fit"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text"> Write Massage</span>
          {error.massage && <p style={{ color: "red" }}>{error.massage}</p>}
          </label>
        </div>
        <div className="ml-10">
          <button className="px-4 py-2 mb-1 mr-1 text-xs font-bold text-white uppercase transition-all duration-150 ease-linear rounded shadow outline-none bg-emerald-500 active:bg-emerald-600 hover:shadow-md focus:outline-none">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

//value={contact.massage}
export default Form;
