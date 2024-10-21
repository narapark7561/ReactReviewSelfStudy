import DogCard from "./dog-card";

export default function DogList({ dogArray }) {
  return (
    <section className="grid grid-cols-2 gap-5">
      {dogArray.map((dog) => (
        <DogCard dogObj={dog} />
      ))}
    </section>
  );
}
