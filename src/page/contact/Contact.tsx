import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [fullname, setFullname] = useState("");
  const [company, setCompany] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleForm = async () => {
    const response = await fetch("https://abolfazl-mr.liara.run/api", {
      method: "POST",
      body: JSON.stringify({
        fullname,
        phone,
        email,
        company,
        message,
      }),
    });
    const data = await response.json();
    if (data) {
      console.log(data);
    }
  };

  return (
    <div className="contact">
      <div className="head">contact me</div>
      <p>
        employers are invited to reach out for potential collaborations, project
        inquiries, or any professional opportunities. I am eager to connect and
        discuss how I can contribute to your projects and help achieve your
        goals. Please fill out the contact form below with your details, and I
        will respond as soon as possible. I look forward to hearing from you!
      </p>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleForm();
        }}
        action=""
      >
        <div className="top-form">
          <input
            onChange={(e) => {
              setFullname(e.target.value);
            }}
            name="fullname"
            type="text"
            placeholder="fullname *"
            value={fullname}
          />
          <input
            onChange={(e) => {
              setCompany(e.target.value);
            }}
            name="company"
            type="text"
            placeholder="company"
            value={company}
          />
        </div>
        <input
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          name="email"
          type="email"
          placeholder="email *"
          value={email}
        />
        <input
          onChange={(e) => {
            setPhone(e.target.value);
          }}
          name="phone"
          type="phone"
          placeholder="phone"
          value={phone}
        />
        <textarea
          onChange={(e) => {
            setMessage(e.target.value);
          }}
          value={message}
          name="message"
          placeholder="message *"
          id=""
        ></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
