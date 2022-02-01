import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Customers from './app/components/Customers';
import Header from './app/components/Header';
import Home from './app/components/Home';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/customers' element={<Customers />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
