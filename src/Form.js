import React, { useState } from "react";
export const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name && email) {
      alert(`Thanks ${name} for subscribing!`);
      setName("");
      setEmail("");
    } else {
      alert("Please fill in all fields");
    }
  };
  return (
    <section>
      <div className="form-class">
        <div className="newsletter">
          <h1>JOIN OUR NEWSLETTER LIST</h1>
          <h4>get our exciting discount and offers early! </h4>
        </div>
        <form>
          <div>
            <label htmlFor="name">Name: </label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email">Email: </label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <button type="submit" onClick={handleSubmit}>
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
};
