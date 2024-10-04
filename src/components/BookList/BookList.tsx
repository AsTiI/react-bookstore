import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleases } from '../../helpers/api'; 
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../../types/actionTypes';
import { RootState } from '../../redux/store';
import './BookList.css'

const BookList: React.FC = () => {
    const dispatch = useDispatch();
    const { books, loading, error } = useSelector((state: RootState) => state.books); 

    useEffect(() => {
        const loadBooks = async () => {
            dispatch({ type: FETCH_BOOKS_REQUEST });
            try {
                const booksData = await fetchNewReleases();
                dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksData.books });
            } catch (err) {
                const errorMessage = (err as Error).message || 'Неизвестная ошибка';
                dispatch({ type: FETCH_BOOKS_FAILURE, payload: errorMessage });
            }
        };

        loadBooks();
    }, [dispatch]);

    return (
        <div>
            <h1>Новинки!</h1>
            {loading && <p>Загрузка...</p>}
            {error && <p>Ошибка: {error}</p>}
            <div className='bookList'>
                {books.map((book) => (
                    <div className="book">
                        <div className="bookImg">
                            <img src={book.image} alt={book.title} />
                        </div>
                        <div className='bookTitle' key={book.isbn13}>
                            <a href={`/books/${book.isbn13}`}>{book.title}</a>
                        </div>
                        <div className="bookSubtitle">
                            <p>{book.subtitle}</p>
                        </div>
                        <div className="bookPrice">
                            <p>{book.price}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookList;