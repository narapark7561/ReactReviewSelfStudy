"use client";

import { useState } from "react";
import RegistraionForm from "./managed-form";

export default function RegistraionPage() {
  const [formOpen, setformOpen] = useState(false);
  const toggleForm = () => {
    if (formOpen === true) {
      setformOpen(false);
    } else {
      setformOpen(true);
    }
  };

  //   const toggleForm2 = () =>
  //     formOpen === true ? setformOpen(false) : setformOpen(true);
  const toggleForm2 = () => (formOpen ? setformOpen(false) : setformOpen(true));

  return (
    <main>
      <h1>Registration</h1>
      <button onClick={toggleForm2}>Click!</button>
      {formOpen && <RegistraionForm />}
    </main>
  );
}
