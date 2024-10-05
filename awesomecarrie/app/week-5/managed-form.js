"use client";

import { useState } from "react";

export default function RegistraionForm() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [subscription, setSubscription] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    setfullName(event.target.value);
    // console.dir(event); -> show whole object..
    // console.dir(event.target.value);
  };

  return (
    <form>
      <div>
        <label>Full Name: </label>
        <input
          onChange={handleFullNameChange}
          value={fullName}
          type="text"
          name="full_name"
        />
      </div>
      <div>
        <label>Email: </label>
        <input />
      </div>
      <div>
        <label>Birthday: </label>
        <input />
      </div>
      <div>
        <label>Subscription Type: </label>
      </div>
      <div>
        <label>Message: </label>
      </div>
    </form>
  );
}
