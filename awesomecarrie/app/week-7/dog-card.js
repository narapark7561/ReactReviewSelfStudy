export default function DogCard({ dogObj }) {
  const { id, name, breed, photoUrl } = dogObj; //부모 컴포넌트로부터 dogObj라는 이름의 객체prop을 받아 사용할준비를 하는것.

  return (
    <div className="rounded bg-blue-300 p-3 max-w-96">
      <div className="inline-block align-middle">
        {photoUrl && <img className="max-h-28 rounded" src={photoUrl} />}
      </div>
      <div className="inline-block align-middle ml-3">
        <h3 className="text-xl">{name}</h3>
        <p className="text-lg">ID: {id}</p>
        <p className="text-lg">Breed: {breed}</p>
      </div>
    </div>
  );
}
