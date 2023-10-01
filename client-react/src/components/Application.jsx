import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="Home">
      <h1>Hello React World</h1>
      <div>
        <Link to="dev">Developer</Link>
      </div>
    </div>
  );
}