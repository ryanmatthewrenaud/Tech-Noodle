import "./App.css";
import Mainsite from './components/clientsite/Mainsite';
import ContactList from "./components/contact/ContactList";
import "react-bootstrap/dist/react-bootstrap.min.js";
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (
    <div className="App">
          <BrowserRouter>
      <Routes>
        <Route index element={<Mainsite/>} />
        <Route path="contact-list" element={<ContactList />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
