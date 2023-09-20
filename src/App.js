import './App.css'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import FavoriteCities from './pages/FavoriteCities/FavoriteCities';
import FavoritePersonalities from './pages/FavoritePersonalities/FavoritePersonalities';
import FavoriteTouristSpots from './pages/FavoriteTouristSpots/FavoriteTouristSpots';
import ContactInformation from './pages/ContactInformation/ContactInformation';
import NavBar from './components/NavBar/NavBar';
import Footer from './components/Footer/Footer';


function App() {
  return (
    <BrowserRouter>
    <NavBar/>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favper" element={<FavoritePersonalities/>} />
        <Route path="/favcit" element={<FavoriteCities />} />
        <Route path="/favtour" element={<FavoriteTouristSpots />} />
        <Route path="/contact" element={<ContactInformation />} /> 
      </Routes>
     <Footer/>
  </BrowserRouter>
  );
}

export default App;
