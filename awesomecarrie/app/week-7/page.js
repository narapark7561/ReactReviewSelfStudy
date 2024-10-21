"use client";

import { useState } from "react";
import DogList from "./dog-list";
import dogData from "./dogs.json";

export default function AdoptionPage() {
  let dogArray = dogData.map((dog) => ({ ...dog }));

  const [dogList, setDogList] = useState(dogArray);
  const [formOpen, setFormOpen] = useState(false);

  const addNewDog = (newDog) => {
    setDogList([...dogList, newDog]); // 배열의 마지막에 dogObj를 추가하느것!
  };

  const openForm = () => setFormOpen(true);
  const closeForm = () => setFormOpen(false);

  return (
    <main>
      <h1>Dogs for Adoption</h1>
      <button>Open Dog Adoption Form</button>
      <DogList dogArray={dogList} />
    </main>
  );
}
