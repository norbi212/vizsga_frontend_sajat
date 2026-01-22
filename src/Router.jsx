import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Welcome from './pages/welcome/Welcome.jsx';
import Home from './pages/home/Home.jsx';
import Upload from './pages/upload/Upload.jsx';
import Favorites from './pages/favorites/Favorites.jsx';
import Profile from './pages/profile/Profile.jsx';
import MyListings from './pages/myListings/MyListings.jsx';
import ProductPage from './pages/productPage/ProductPage.jsx';

import Navbar from './components/navbar/Navbar.jsx';

export default function AppRouter() {
    return (
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/" element={<Home />} />
                <Route path="/upload" element={<Upload />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/profile/my-listings" element={<MyListings />} />
                <Route path="/product/:id" element={<ProductPage />} />
            </Routes>
        </BrowserRouter>
    );
}