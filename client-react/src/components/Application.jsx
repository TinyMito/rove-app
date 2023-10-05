import { Link } from "react-router-dom";

export default function Home() {

  return (
    <div className="Home body">
      <h1>Landing Page</h1>
      <div>
        <Link to="/">Test Link</Link>
      </div>
    </div>
  );
}