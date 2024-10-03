import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import BookList from '../components/BookList';
import BookDetail from '../components/BookDetail';
import Cart from '../components/Cart';

const AppRouter: React.FC = () => {
    return (
        <Router>
            <Routes>
            <Route path="/"  element={ <BookList />} />
                <Route path='/books/:isbn13' element={ <BookDetail />} />
                <Route path="/cart" element={ <Cart />} />
            </Routes>
        </Router>
   );
};

export default AppRouter;