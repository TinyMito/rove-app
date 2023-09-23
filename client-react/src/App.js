import 'App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './Components/Navbar'
import Hero from './Components/Hero'


export default function App() {
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
    <Navbar />,
    <Hero />
  );
}