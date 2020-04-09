import React from "react";
import Header from "../components/Header";
import ContactForm from "../components/ContactPage/ContactForm";
const Contact = () => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header title="Contact Us" />
      <ContactForm />
    </>
  );
};

export default Contact;
