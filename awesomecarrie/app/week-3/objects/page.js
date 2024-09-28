export default function Objectpager() {
  let studentOne = {
    studentName: "Chai",
    studentAge: 4,
    hasGraduated: false,
    schedule: ["CPRG123", "CPRG456", "CPRG789", "CPRG306"],
    address: {
      line1: "123 Main St.",
      city: "Calgary",
      province: "AB",
    },
  };

  let {
    studentName: personName,
    studentAge,
    schedule: { 3: webdev },
    // address: juso,
    address: { city },
  } = studentOne;
  return (
    <main>
      <h1>Objects</h1>
      <h2>Dot Notation</h2>
      <p>Name : {studentOne.studentName}</p>
      <p>Age: {studentOne.studentAge}</p>
      <p>First Course: {studentOne.schedule[0]}</p>
      <p>Province: {studentOne.address.province}</p>
      <p>Destructed Name: {personName}</p>
      <p>Destructed Age: {studentAge}</p>
      <p>Destructed Schedule: {webdev}</p>
      <p>Destructed City: {city}</p>

      {/* <p>Destructed address: {juso}</p>  이렇게는안된다. 객체전체를 할당받았기때문에 그 중에 하나를 지정해줘야한다. juso.province같이*/}
    </main>
  );
}
