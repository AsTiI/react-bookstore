import './BookDetailPage.css'
import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import AboutBook from '../../components/AboutBook';

const BookDetailPage: React.FC = () => {
    return (
        <div className='bookdetail_container'>
            <Nav />
            <AboutBook  />
            <Subscribe />
            <Footer />
        </div>
    );
};

export default BookDetailPage;