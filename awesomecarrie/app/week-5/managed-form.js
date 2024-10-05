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

  const handleSubmit = (event) => {
    event.preventDefault();
    let registraionObject = {
      fName: fullName,
      mail: email,
      bDay: birthDate,
      plan: subscription,
      msg: message,
    };

    alert(`
    Name: ${registraionObject.fName}
    Email: ${registraionObject.mail}
    Birthday: ${registraionObject.bDay}
    Plan Type: ${registraionObject.plan}
    Message: ${registraionObject.msg}
    `);

    setfullName("");
    setEmail("");
    setBirthDate("");
    setMessage("");
  };

  const inputStyle =
    "mb-3, px-2 py-1 rounded border-2 border-blue-500 focus:bg-orange-200";
  const containerStyle = "mb-3";
  const labelStyle = "inline-block w-40";

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-lime-500">
      <div className={containerStyle}>
        <label className={labelStyle}>Full Name: </label>
        <input
          onChange={handleFullNameChange}
          value={fullName}
          type="text"
          name="full_name"
          placeholder="Chai Park"
          className={inputStyle}
        />
      </div>
      <div className={containerStyle}>
        <label className={labelStyle}>Email: </label>
        <input
          onChange={handleEmailChange}
          value={email}
          type="email"
          placeholder="chai@cute.ca"
          className={inputStyle}
        />
      </div>
      <div className={containerStyle}>
        <label className={labelStyle}>Birthday: </label>
        <input
          onChange={handleBirthDateChange}
          value={birthDate}
          type="date"
          className={inputStyle}
        />
      </div>
      <div className={containerStyle}>
        <label className={labelStyle}>Subscription Type: </label>
        <select onChange={handleSubscriptionChange} className={inputStyle}>
          <option>Please select the plan</option>
          <option>Free Plan</option>
          <option>Basic Plan</option>
          <option>Premium Plan</option>
        </select>
      </div>
      <div className={containerStyle}>
        <label className={labelStyle}>Message: </label>
        <textarea
          onChange={handleMessageChange}
          value={message}
          className={inputStyle}
        ></textarea>
      </div>
      <button className="bg-green-500 hover:bg-green-800 active:bg-green-700 text-white rouded px-3 py-2 ">
        Submit Registration
      </button>
    </form>
  );
}
