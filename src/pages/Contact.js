import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactPage/ContactForm";
import TypewriterEffect from "../components/TypewriterEffect";

const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="Contact Us" backgroundImage="contact.jpg">
        <TypewriterEffect title="Contact Us .." />
      </Header>
      <ContactForm />
    </>
  );
};

export default Contact;
