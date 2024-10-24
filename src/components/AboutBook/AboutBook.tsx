import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookDetails, fetchNewReleases } from '../../helpers/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_TO_CART, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, SAVE_BOOK_DETAILS } from '../../types/actionTypes';
import { RootState } from '../../redux/store';
import Button from '../Button/Button';
import './AboutBook.css'
import Rating from '../Rating/Rating';
import facebookUrl from '../../images/facebook.png'
import twitterUrl from '../../images/twitter.png'
import etcUrl from '../../images/etc.png'

const AboutBook: React.FC = () => {
    const { isbn13 } = useParams<{ isbn13: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const book = useSelector((state: RootState) => state.books.books.find(book => book.isbn13 === isbn13));
    const bookDetails = useSelector((state: RootState)=> state.details)

    useEffect(() => {
        const loadBookDetails = async () => {
            try {
                if (!book && isbn13) {
                    dispatch({ type: FETCH_BOOKS_REQUEST });
                    const booksData = await fetchNewReleases();
                    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksData.books });

                    const details = await fetchBookDetails(isbn13);
                    
                    if (details) {
                        dispatch({ type: SAVE_BOOK_DETAILS, payload: details });
                    }
                } else if (isbn13) {
                    const details = await fetchBookDetails(isbn13);
                    if (details)
                        dispatch({ type: SAVE_BOOK_DETAILS, payload: details });

                }
            } catch (error) {
                console.error("Ошибка при загрузке книги: ", error);
            }
        };
        loadBookDetails();
        console.log(bookDetails.rating);
        
    }, [isbn13, book, dispatch]);

    const handleAddToCart = () => {
        if (book) {
            dispatch({ type: ADD_TO_CART, payload: { book: { ...book }, quantity: 1 } });
        }
    };

    // const handleBack = () => {
    //     navigate('/');
    // }

    if (!book) return <p>Загрузка книги...</p>;
    return (
        <div className='about_book'>
            <div className="about_book_container">
                <h1>{book.title}</h1>
                <div className="book">
                    <div className="bookImg">
                        <img src={book.image} alt={book.title} />
                    </div>
                    <div className="book-desc">
                        <div className="bookPrice">
                            <p>{book.price}</p>
                            <Rating rating={bookDetails.rating}/>
                        </div>
                        <div className="book-data">
                            <div className="author">
                                <p>Author</p>
                                <p>{bookDetails.author}</p>
                            </div>
                            <div className="publisher">
                                <p>Publisher</p>
                                <p>{bookDetails.publisher},{bookDetails.year}</p>
                            </div>
                            <div className="language">
                                <p>Language</p>
                                <p>{bookDetails.language}</p>
                            </div>
                            <div className="format">
                                <p>Format</p>
                                <p>{'Paper book / ebook (PDF)'}</p>
                            </div>
                        </div>
                        <Button onClick={handleAddToCart} value='Add to cart' />
                    </div>       
                </div>
                <div className="section">
                    <div className="menu_section">
                        <div className="section_element">Description</div>
                        <div className="section_element">Authors</div>
                        <div className="section_element">Reviews</div>
                    </div>
                    <div className="desc">
                        <p>Start programming your own robots using Robot Operation System (ROS). Targeted for absolute beginners in ROS, Linux and Python, this
                        guide lets you build your own robotics projects.</p>
                        <p>You'll learn the basic foundation of Ubuntu Linux. Begin with the fundamentals. Installation and useful commands will give you the basic tools you need while programming a robot. Then add useful software applications that can be used while making robots. Programming robots can be done using any of the programming languages. Most popular programming languages are Python and C++. You will incorporate the fundamentals of C++ by learning object oriented programing concepts from example and building C++ projects.
                        </p>
                        <p>Finally, tackle an ROS hands-on project to apply all the concepts of ROS you've learned. The aim of the project is to perform a dead-reckoning using a cheap mobile robot. You can command your robot's position on Rviz and your robot will move to that position! Not only will you learn to program, you'll gain hands-on experience working with hardware to create a real robot.
                        </p>


                    </div>
                    {/* <div className="authors">

                    </div>
                    <div className="reviews">

                    </div> */}
                    <div className="icons">
                        <div className="facebook">
                            <img src={facebookUrl} />
                        </div>
                        <div className='twitter'>
                            <img src={twitterUrl} />
                        </div>
                        <div className="etc">
                            <img src={etcUrl} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default AboutBook;