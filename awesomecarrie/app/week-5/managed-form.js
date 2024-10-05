"use client";

import { useState } from "react";

export default function RegistraionForm() {
  const [fullName, setfullName] = useState("");
  const [email, setEmail] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [subscription, setSubscription] = useState("");
  const [message, setMessage] = useState("");

  const handleFullNameChange = (event) => {
    setfullName(event.target.value); // this will save user's input in fullName variable
    // console.dir(event); -> show whole object..
    // console.dir(event.target.value);
  };

  const handleEmailChange = (event) => setEmail(event.target.value);
  const handleBirthDateChange = (event) => setBirthDate(event.target.value);
  const handleSubscriptionChange = (event) =>
    setSubscription(event.target.value);
  const handleMessageChange = (event) => setMessage(event.target.value);

  return (
    <form>
      <div>
        <label>Full Name: </label>
        <input
          onChange={handleFullNameChange}
          value={fullName}
          type="text"
          name="full_name"
          placeholder="Chai Park"
        />
      </div>
      <div>
        <label>Email: </label>
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="chai@cute.ca"
        />
      </div>
      <div>
        <label>Birthday: </label>
        <input onChange={handleBirthDateChange} value={birthDate} type="date" />
      </div>
      <div>
        <label>Subscription Type: </label>
        <select onChange={handleSubscriptionChange}>
          <option>Please select the plan</option>
          <option>Free Plan</option>
          <option>Basic Plan</option>
          <option>Premium Plan</option>
        </select>
      </div>
      <div>
        <label>Message: </label>
        <textarea onChange={handleMessageChange} value={message}></textarea>
      </div>
      <button className="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white rouded px-3 py-2 ">
        Submit Registration
      </button>
    </form>
  );
}
