import { createRoot } from 'react-dom/client'; // React ^18
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Temporary
import './index.scss';
import Home from "./components"; // Temporary
import Developer from "./components/DevCss"; // Temporary

const rootElement = document.getElementById('root'); // React ^18
const root = createRoot(rootElement); // React ^18

root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={ <Home/> } />
      <Route path="/dev" element={ <Developer/> } /> {/* Temporary using BrowserRoute for Dev purpose (not SPA compliance) */ }
    </Routes>
  </BrowserRouter>
);