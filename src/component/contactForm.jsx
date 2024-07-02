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

  /*function handleChange(event) {
    const newObj = { ...contact, [event.target.name]: event.target.value };
    setContact(newObj);
    if (Object.values(newObj).some(value => value.trim() !== '')) {
      setFilled(true);
    } else {
      setFilled(false);
    }
  }*/
  function handleChange(event, fieldName) {
    const updatedContact = { ...contact, [fieldName]: event.target.value };
    setContact(updatedContact);

    // Only update filled state if the input value is not empty
    if (event.target.value.trim() !== '') {
      setFilled(prevState => ({ ...prevState, [fieldName]: true }));
    } else {
      setFilled(false);
      setFilled(prevState => ({ ...prevState, [fieldName]: false }));
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
    <div className="pt-5 text-black">
      <form className="" onSubmit={handleValidation}>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md input-container shadow-black">
          
          <label className=   {`relative ${filled.fName ? "unfilled" : ""}`}>
            <input
            //onChange={handleChange}
            onChange={(event) => handleChange(event, "fName")}
            name="fName"
            title="First Name"
            type="text"
            className="w-full transition duration-200 border-b-2 focus:outline-none focus:border-sky-500 invalid:border-pink-500"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text">First Name</span>
          {error.fName && <p style={{ color: "red" }}>{error.fName}</p>}
          </label>
        </div>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className=   {`relative ${filled.lName ? "unfilled" : ""}`}> 
          <input
            //onChange={handleChange}
            onChange={(event) => handleChange(event, "lName")}
            name="lName"
            title="Last Name"
            type="text"
            className="w-full border-b-2 focus:outline-none focus:border-sky-500"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text">Last Name</span>
          {error.lName && <p style={{ color: "red" }}>{error.lName}</p>}
          </label>
        </div>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className=   {`relative ${filled.email ? "unfilled" : ""}`}>
          <input
            //onChange={handleChange}
            onChange={(event) => handleChange(event, "email")}
            name="email"
            title="Email"
            type="text"
            className="w-full border-b-2 focus:outline-none focus:border-sky-500"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text"> Email</span>
          {error.email && <div><p style={{ color: "red" }}>{error.email}</p>
          </div>}
          </label>
        </div>
        <div className="px-10 py-5 mx-10 my-5 bg-white border border-black rounded-lg shadow-md shadow-black">
          <label className=   {`relative ${filled.message ? "unfilled" : ""}`}> 
          <input
            //onChange={handleChange}
            onChange={(event) => handleChange(event, "fName")}
            name="message"
            title="Write Message"
            type="text"
            className="w-full overflow-auto border-b-2 focus:outline-none focus:border-sky-500 h-fit"
          />
          <span className="absolute top-0 left-0 transition duration-200 input-text"> Write Message</span>
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

//value={contact.massage}
export default Form;
