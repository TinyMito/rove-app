import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="Home body">
      <h1>Hello React World</h1>
      <div>
        <Link to="/">Developer</Link>
      </div>
    </div>
  );
}