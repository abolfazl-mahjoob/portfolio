import "./Contact.css";

function Contact() {
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
      <form action="">
        <div className="top-form">
          <input name="fullname" type="text" placeholder="fullname *" />
          <input name="company" type="text" placeholder="company" />
        </div>
        <input name="email" type="email" placeholder="email *" />
        <input name="phone" type="phone" placeholder="phone" />
        <textarea name="message" placeholder="message *" id=""></textarea>
        <button type="submit">send</button>
      </form>
    </div>
  );
}

export default Contact;
