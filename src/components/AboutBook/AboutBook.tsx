import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookDetails, fetchNewReleases } from '../../helpers/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_TO_CART, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, SAVE_BOOK_DETAILS } from '../../types/actionTypes';
import { RootState } from '../../redux/store';
import Button from '../Button/Button';
import './AboutBook.css'
import Rating from '../Rating/Rating';

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
    }, [isbn13, book, dispatch, bookDetails]);

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
                            <Rating />
                        </div>
                        <div className="book-data">
                            <div className="author">
                                <p>Author</p>
                                <p>{bookDetails.author}</p>
                            </div>
                            <div className="publisher">
                                <p>Publisher</p>
                                <p>{bookDetails.publisher}</p>
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
            </div>
        </div>
    );

};

export default AboutBook;