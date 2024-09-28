export default function StudentObjComp({ studentObj }) {
  let {
    studentName: name,
    studentAge: age,
    address: { city, province },
  } = studentObj;

  return (
    <div className="inline-block border border-emerald-600 bg-amber-400 mx-10 my-5 p-5">
      <h3>{name}</h3>
      <h3>Age: {age}</h3>
      <h3>
        {city}, <b>{province}</b>
      </h3>
    </div>
  );
}
