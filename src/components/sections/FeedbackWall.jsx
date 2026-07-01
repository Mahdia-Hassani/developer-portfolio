import { useState, useEffect } from "react";

export default function FeedbackWall() {
  const [feedbacks, setFeedbacks] = useState([]);
  const [form, setForm] = useState({
    name: "",
    rating: 5,
    comment: "",
  });

  // ✅ Load saved feedbacks
  useEffect(() => {
    const saved = localStorage.getItem("feedbacks");
    if (saved) {
      setFeedbacks(JSON.parse(saved));
    }
  }, []);

  // ✅ Save to localStorage
  useEffect(() => {
    localStorage.setItem("feedbacks", JSON.stringify(feedbacks));
  }, [feedbacks]);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: name === "rating" ? Number(value) : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name.trim() || !form.comment.trim()) return;

    const newFeedback = {
      ...form,
      id: Date.now(),
    };

    setFeedbacks([newFeedback, ...feedbacks]);

    setForm({
      name: "",
      rating: 5,
      comment: "",
    });
  };

  return (
    <section className="feedback">
      <h2>Your Feedback</h2>

      {/* SUBMIT BOX */}
      <div className="feedback-box">
        <form onSubmit={handleSubmit} className="feedback-form">
          <input
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />

          <select name="rating" value={form.rating} onChange={handleChange}>
            <option value={5}>★★★★★</option>
            <option value={4}>★★★★☆</option>
            <option value={3}>★★★☆☆</option>
            <option value={2}>★★☆☆☆</option>
            <option value={1}>★☆☆☆☆</option>
          </select>

          <textarea
            name="comment"
            placeholder="Write your feedback..."
            value={form.comment}
            onChange={handleChange}
          />

          <button type="submit">Post Feedback</button>
        </form>
      </div>

      {/* WALL */}
      <div className="feedback-wall">
        {feedbacks.length === 0 ? (
          <p className="empty">No feedback yet...</p>
        ) : (
          feedbacks.map((item) => (
            <div
              key={item.id}
              className={`feedback-card ${item.rating === 5 ? "featured" : ""}`}
            >
              <div className="top">
                <strong>{item.name}</strong>
                <span>{"⭐".repeat(item.rating)}</span>
              </div>

              <p>{item.comment}</p>

              {item.rating === 5 && <span className="badge">Featured</span>}
            </div>
          ))
        )}
      </div>
    </section>
  );
}
