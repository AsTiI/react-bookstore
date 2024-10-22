import './BookDetailPage.css'
import React from 'react';
import Nav from '../../components/nav/Nav';
import Footer from '../../components/Footer/Footer';
import Subscribe from '../../components/Subscribe/Subscribe';
import AboutBook from '../../components/AboutBook/AboutBook';

const BookDetailPage: React.FC = () => {
    return (
        <div className="bookdetail">
            <Nav />
            <div className='bookdetail_container'>
                <AboutBook  />
            </div>
            <Subscribe />
            <Footer />
        </div>
    );
};

export default BookDetailPage;