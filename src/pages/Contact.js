import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactPage/ContactForm";
const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header
        title="Contact Us"
        background="linear-gradient(to right, #606c88, #3f4c6b)"
      >
        <h1 className="title">Contact</h1>
      </Header>
      <ContactForm />
    </>
  );
};

export default Contact;
