import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookDetails, fetchNewReleases } from '../helpers/api';
import { useParams } from 'react-router-dom';
import { ADD_TO_CART, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, SAVE_BOOK_DETAILS } from '../types/actionTypes';
import { RootState } from '../redux/store';
import { BookDetailsState } from '../types/bookTypes';

const BookDetail: React.FC = () => {
    const { isbn13 } = useParams<{ isbn13: string }>();
    const dispatch = useDispatch();
    const [ currentBook, setCurrentBook ] = useState<BookDetailsState | null>(null);
    const book = useSelector((state: RootState) => state.books.books.find(book => book.isbn13 === isbn13) );

    useEffect(() => {
        const loadBookDetails = async () => {
            try {
                if (!book && isbn13) {

                    dispatch({ type: FETCH_BOOKS_REQUEST });
                    const booksData = await fetchNewReleases();
                    
                    dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksData.books });
                    
                    const details = await fetchBookDetails(isbn13);
                    if (details) { 
                        // dispatch({ type: SAVE_BOOK_DETAILS, payload: details });
                        setCurrentBook(details);
                    }
                } else {
                    // const details = await fetchBookDetails(isbn13);
                    // dispatch({ type: SAVE_BOOK_DETAILS, payload: details });

                }
            } catch (error) {
                console.error("Ошибка при загрузке книги: ", error);
            }
        };
        loadBookDetails();
    }, [isbn13]);

    const handleAddToCart = () => {
        if (book) {
            console.log(book);
            dispatch({ type: ADD_TO_CART, payload: { ...book, quantity: 1 } });
        }
    };

    if (!currentBook) return <p>Загрузка книги...</p>;
    return (
        <div>
            <h1>{currentBook.title}</h1>
            <p>{currentBook.subtitle}</p>
            <button onClick={handleAddToCart}>Добавить в корзину</button>
        </div>
    );

};

export default BookDetail;