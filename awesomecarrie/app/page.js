import Link from "next/link";
import MyFristComponent from "./_components/my-first-component";

export default function Home() {
  return (
    <main>
      <h1>CPRG306 Class Examples</h1>
      <p>Hello World!</p>
      <MyFristComponent />
      <h2>Course Example Links</h2>
      <ul>
        <li>
          <Link href="./week-2">Week 2 - Introduction to React</Link>
        </li>
        <li>
          <Link href="./week-3/objects">Week 3 - Object</Link>
        </li>
        <li>
          <Link href="./week-3/props">Week 3 - Props</Link>
        </li>
        <li>
          <Link href="./week-4/functions">Week 4 - Functions</Link>
        </li>
        <li>
          <Link href="./week-4/counter">Week 4 - Counter</Link>
        </li>
        <li>
          <Link href="./week-4/counter-props">Week 4 - Counter Props</Link>
        </li>
      </ul>
    </main>
  );
}
