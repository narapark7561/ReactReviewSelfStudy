export default function StudentComp({ sName, sAge, sCity, sProvince }) {
  return (
    <div className="bg-green-700 mb-10">
      <h3>{sName}</h3>
      <p>Age: {sAge}</p>
      <p>
        {sCity}, {sProvince}
      </p>
    </div>
  );
}
