import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './Components/HomePage/HomePage'
import MainHeader from './Components/MainHeader/MainHeader';
import Footer from './Components/Footer/Footer';
import ContactPage from './Components/ContactPage/ContactPage';

function App() {
  return (
    <BrowserRouter>
      <MainHeader />
      <Routes>
        <Route path='/' Component={HomePage} />
        <Route path='/home' Component={HomePage} />
        <Route path='/contact' Component={ContactPage} />
        <Route path='*' Component={HomePage} />
      </Routes>
       <Footer />
    </BrowserRouter>
  );
}

export default App;
