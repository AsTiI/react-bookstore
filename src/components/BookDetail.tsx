import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBookDetails, fetchNewReleases } from '../helpers/api';
import { useNavigate, useParams } from 'react-router-dom';
import { ADD_TO_CART, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, SAVE_BOOK_DETAILS } from '../types/actionTypes';
import { RootState } from '../redux/store';
import Button from './Button/Button';

const BookDetail: React.FC = () => {
    const { isbn13 } = useParams<{ isbn13: string }>();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const book = useSelector((state: RootState) => state.books.books.find(book => book.isbn13 === isbn13));

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
    }, [isbn13, book, dispatch]);

    const handleAddToCart = () => {
        if (book) {
            console.log(book);
            dispatch({ type: ADD_TO_CART, payload: { book: { ...book }, quantity: 1 } });
        }
    };

    const handleBack = () => {
        navigate('/');
    }

    if (!book) return <p>Загрузка книги...</p>;
    return (
        <div>
            <h1>{book.title}</h1>
            <p>{book.subtitle}</p>
            <Button onClick={handleAddToCart} value='Добавить в корзину' />
            <Button onClick={handleBack} value='Назад' />
        </div>
    );

};

export default BookDetail;