import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from "react-router-dom";

export default function Home() {
  const [status, setStatus] = useState({});

  useEffect(() => {
    axios.get('/api/status')
      .then((res) => {
        setStatus(res.data);
      })
      .catch((err) => {
        setStatus({ error: err.message });
      });
  }, []);

  return (
    <div className="Home">
      <h1>Hello React World</h1>

      <section>
        {!status.error &&
          <>API Version: <code>{status.version}</code></>}
        {status.error &&
          <>API Error: <code>{status.error}</code></>}
      </section>
      
      <div>
        <Link to="dev">Developer</Link>
      </div>

    </div>
  );
}