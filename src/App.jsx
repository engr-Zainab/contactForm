import React from "react";
import Navbar from "./components/Navigation/Navbar";
import ContactForm from "./components/ContactForm/ContactForm";
import ContactHeader from "./components/ContactHeader/ContactHeader";
import "./App.css";

const App = () => {
  return (
    <div>
      <Navbar />
      <ContactHeader />
      <ContactForm />
    </div>
  );
};

export default App;
