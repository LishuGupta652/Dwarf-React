import React from "react";

const ContactForm = () => {
  return (
    <div className="contact">
      <h1 className="heading">Contact Us</h1>
      <div className="contactus-container">
        <form>
          <input
            type="text"
            id="fname"
            name="firstname"
            placeholder="Your name.."
          />

          <input
            type="text"
            id="lname"
            name="lastname"
            placeholder="Your last name.."
          />

          <button type="submit">Submit</button>
        </form>
        <div className="contact-detail">
          <h3>DwarfX</h3>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
