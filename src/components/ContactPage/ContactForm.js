import React from "react";

const ContactForm = () => {
  return (
    <div className="contact">
      <div className="contactus-container">
        {/* <form>
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
        </form> */}
        <div className="contact-details">
          <h1>For more please Contact Us</h1>
          <h3>
            <span>Email :</span> comm.dwarf@gmail.com
          </h3>
          <h3>
            <span>Sales and Support :</span> 7415626643
          </h3>
          <h3>
            <span>Address : </span>
            3rd Row, Jaunapuriya House, Chattarpur, South Delhi, 110047 India
            <br />
            A-83 Anand Nagar, Gwalior, Madhya Pradesh 474012
            <br />
            <div
              style={{
                color: "#212121",
              }}
            >
              Delhi | Madhya Pradesh
            </div>
          </h3>
        </div>
        {/* 
        <form className="cd-form">
          <form
            action="https://crm.zoho.in/crm/Unsubscribe?encoding=UTF-8"
            method="POST"
            name="unsubForm"
          >
            <input
              type="hidden"
              name="xnQsjsdp"
              value="eb14e4da36cefb63fe02c094943ef3f373f60b70f42f045816e6da3c7c7d5f5b"
            />
            <input type="hidden" name="actionType" value="dW5zdWJzY3JpYmU=" />
            <input
              type="hidden"
              name="returnURL"
              value="https://dwarf.co.in/contact"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email address"
              className="ti"
            />
            <input type="submit" value="Unsubscribe" className="button" />
          </form>
        </form> */}
      </div>
    </div>
  );
};

export default ContactForm;
