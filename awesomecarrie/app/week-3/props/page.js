import StudentObjComp from "./student-object-component";
import StudentComp from "./studentcomponent";

export default function PropsPage() {
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

  let studentTwo = {
    studentName: "Alice",
    studentAge: 26,
    address: {
      city: "Edmonton",
      province: "AB",
    },
  };
  return (
    <main>
      <StudentComp sName="Nara" sAge="23" sCity="Calgary" sProvince="AB" />{" "}
      {/* //컴포넌트를 만들어서 내가 직접데이터를준경우 */}
      {/* //컴포넌트를 만들어서 내가 간접적으로 데이터를준경우*/}
      <StudentComp
        sName={studentOne.studentName}
        sAge={studentOne.studentAge}
        sCity={studentOne.address.city}
        sProvince={studentOne.address.province}
      />
      <StudentObjComp studentObj={studentOne} />
      <StudentObjComp studentObj={studentTwo} />
    </main>
  );
}
