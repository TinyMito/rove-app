import axios from 'axios';
import { useEffect, useState } from 'react';
<<<<<<< HEAD:client-react/src/App.js
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Autocomplete from './components/Autocomplete'
import Google from './components/Google'
import Suggestion from './components/Suggestions'
=======
import { Link } from "react-router-dom";
>>>>>>> main:client-react/src/components/index.jsx

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
<<<<<<< HEAD:client-react/src/App.js
   /*  <Navbar />,
    <Hero /> */
    /* <Autocomplete /> */
   /* <Google /> */
   <Suggestion />
=======
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
>>>>>>> main:client-react/src/components/index.jsx
  );
}