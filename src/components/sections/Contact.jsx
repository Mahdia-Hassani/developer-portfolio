import { useEffect, useState } from "react";

export default function Contact() {
  // =========================
  // STATES
  // =========================
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState(() => {
    const saved = localStorage.getItem("contact-form");
    return saved ? JSON.parse(saved) : { name: "", email: "", message: "" };
  });

  const [errors, setErrors] = useState({});
  const [success, setSuccess] = useState(false);
  const [typingError, setTypingError] = useState("");
  const [showDraftToast, setShowDraftToast] = useState(false);

  // =========================
  // AUTO SAVE
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
    const { name, value } = e.target;

    const updated = {
      ...form,
      [name]: value,
    };

    setForm(updated);
    setErrors({});

    setShowDraftToast(true);
    setTimeout(() => setShowDraftToast(false), 2000);
  };

  // =========================
  // VALIDATION
  // =========================
  const validate = () => {
    let newErrors = {};

    const emailRegex = /\S+@\S+\.\S+/;

    if (!form.name.trim()) newErrors.name = "Name is required";

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(form.email)) {
      newErrors.email = "Email is not valid";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

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
      setLoading(true);

      setTimeout(() => {
        setLoading(false);
        setSuccess(true);

        localStorage.removeItem("contact-form");

        setForm({ name: "", email: "", message: "" });
      }, 800);
    }
  };

  // =========================
  // UI
  // =========================
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      {/* DRAFT TOAST */}
      {showDraftToast && (
        <div className="draft-toast">
          <span className="dot"></span>

          <div className="draft-texts">
            <p className="draft-title">Draft saved</p>
            <p className="draft-desc">Your message is saved locally</p>
          </div>
        </div>
      )}

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <input
          name="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error-box">⚠ {errors.name}</div>}

        {/* EMAIL */}
        <input
          name="email"
          placeholder="Your email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error-box">⚠ {errors.email}</div>}
        {typingError && <div className="error-box">⚠ {typingError}</div>}

        {/* MESSAGE */}
        <textarea
          name="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
        />
        {errors.message && <div className="error-box">⚠ {errors.message}</div>}

        <button type="submit" disabled={loading}>
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {/* SUCCESS */}
      {success && <div className="success">Message sent successfully 🎉</div>}
    </section>
  );
}
