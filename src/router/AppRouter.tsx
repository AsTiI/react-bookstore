import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookDetail from '../components/BookDetail';
import BooksPage from '../pages/Books/BooksPage';
import AuthPage from '../pages/Auth/AuthPage';
import RegistrationPage from '../pages/Registration/RegistrationPage';
import ProfilePage from '../pages/Profile/ProfilePage';
import CartPage from '../pages/Cart/CartPage';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/"  element={ <BooksPage />} />
                <Route path='/auth' element={ <AuthPage /> } />
                <Route path='/reg' element={ <RegistrationPage /> } />
                <Route path='/profile' element={ <ProfilePage /> } />
                <Route path='/books/:isbn13' element={ <BookDetail />} />
                <Route path="/cart" element={ <CartPage />} />
            </Routes>
        </Router>
   );
};

export default AppRouter;