function Validation(contact) {
  const error = {};
  const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

  if (!contact.fName || contact.fName.trim() === "") {
    error.fName = "*First Name is Required";
  }

  if (!contact.message || contact.message.trim() === "") {
    error.message = "*Message is Required";
  }

  if (!contact.email || contact.email.trim() === "") {
    error.email = "*Email is Required";
  } else if (!email_pattern.test(contact.email)) {
    error.email = "*Email doesn't match the correct format";
  }

  return error;
}

export default Validation;


// Validation.js
 





 