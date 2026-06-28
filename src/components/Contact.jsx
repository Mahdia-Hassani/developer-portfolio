import { useEffect, useState } from "react";

export default function Contact() {
  // =========================
  // STATE (with localStorage init)
  // =========================
  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("contact-form");
    return saved ? JSON.parse(saved) : { name: "", email: "", message: "" };
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [typingError, setTypingError] = useState("");

  // =========================
  // AUTO SAVE (localStorage)
  // =========================
  useEffect(() => {
    if (form.name || form.email || form.message) {
      localStorage.setItem("contact-form", JSON.stringify(form));
    }
  }, [form]);

  // =========================
  // SUCCESS AUTO HIDE
  // =========================
  useEffect(() => {
    if (!success) return;

    const timer = setTimeout(() => {
      setSuccess(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [success]);

  // =========================
  // DEBOUNCED EMAIL VALIDATION
  // =========================
  useEffect(() => {
    const timer = setTimeout(() => {
      const emailRegex = /\S+@\S+\.\S+/;

      if (form.email && !emailRegex.test(form.email)) {
        setTypingError("Email format is not valid");
      } else {
        setTypingError("");
      }
    }, 400);

    return () => clearTimeout(timer);
  }, [form.email]);

  // =========================
  // HANDLE CHANGE
  // =========================
  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));

    setErrors({}); // clear errors while typing
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    let newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";

    const emailRegex = /\S+@\S+\.\S+/;

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!form.message.trim()) newErrors.message = "Message is required";

    return newErrors;
  };

  // =========================
  // SUBMIT
  // =========================
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSuccess(true);

      // clear storage + form
      localStorage.removeItem("contact-form");

      setForm({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <section className="contact">
      <h2>Contact Me</h2>

      {/* draft hint */}
      {(form.name || form.email || form.message) && (
        <p className="draft-hint">You have unsent message data saved 💾</p>
      )}

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <p className="error">{errors.name}</p>}

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <p className="error">{errors.email}</p>}
        {typingError && <p className="error">{typingError}</p>}

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">Send Message</button>
      </form>

      {/* SUCCESS TOAST */}
      {success && <div className="success">Message sent successfully 🎉</div>}
    </section>
  );
}
