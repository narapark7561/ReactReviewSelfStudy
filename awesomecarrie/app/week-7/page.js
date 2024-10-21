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
      {formOpen && (
        <DogForm addNewDogFunc={addNewDog} closeFormFunc={closeForm} />
      )}
      <h1>Dogs for Adoption</h1>
      <button
        type="button"
        className="bg-blue-300 text-white rounded"
        onClick={openForm}
      >
        Open Dog Adoption From
      </button>
      <DogList dogArray={dogList} />
    </main>
  );
}
