import Button from "../Button/Button";
import styles from "./Contact.module.css";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("Zainab");
  const [email, setEmail] = useState("zanbtariq11@gmail.com");
  const [text, setText] = useState("Hello");

  const onSubmit = (event) => {
    event.preventDefault();

    setName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
  };
  return (
    <section className={`${styles.container}`}>
      <div className={`${styles.contact_form}`}>
        <div className={`${styles.top_btn}`}>
          <Button text="VIA SUPPORT CHAT" />
          <Button text="VIA CALL" />
        </div>
        <Button isOutline={true} text="VIA EMAIL FORM" />

        <form onSubmit={onSubmit}>
          <div className={styles.form_control}>
            <label htmlFor="name">Name</label>
            <input type="text" name="name" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="email">Email</label>
            <input type="email" name="email" />
          </div>
          <div className={styles.form_control}>
            <label htmlFor="text">Text</label>
            <textarea name="text" rows="8" />
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "end",
            }}
          >
            <Button text="SUBMIT BUTTON" />
          </div>

          <div>{name + " " + email + " " + text}</div>
        </form>
      </div>
      <div className={styles.contact_image}>
        <img src="/images/Service 24_7-pana 1.svg" alt="contact_image" />
      </div>
    </section>
  );
};

export default ContactForm;
