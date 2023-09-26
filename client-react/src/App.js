import 'App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Autocomplete from './components/Autocomplete'
import Google from './components/Google'

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
   /*  <Navbar />,
    <Hero /> */
    /* <Autocomplete /> */
   <Google />
  );
}