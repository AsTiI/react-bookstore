import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNewReleases } from '../../helpers/api'; 
import { FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FETCH_BOOKS_FAILURE } from '../../types/actionTypes';
import { RootState } from '../../redux/store';
import './BookList.css'
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';

const BookList: React.FC = () => {
    const booksPerPage = 9
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { books, loading, error } = useSelector((state: RootState) => state.books); 
    const [countPages, setCountPages ] = useState<number>(0);
    const [ currentPage, setCurrentPage ] = useState<number>(0)

    useEffect(() => {
        const loadBooks = async () => {
            dispatch({ type: FETCH_BOOKS_REQUEST });
            try {
                const booksData = await fetchNewReleases();
                dispatch({ type: FETCH_BOOKS_SUCCESS, payload: booksData.books });
                setCountPages(Math.ceil(booksData.books.length/booksPerPage))
            } catch (err) {
                const errorMessage = (err as Error).message || 'Неизвестная ошибка';
                dispatch({ type: FETCH_BOOKS_FAILURE, payload: errorMessage });
            }
        };

        loadBooks();
        
    }, [dispatch]);

    const handleClick = (isbn13:any) => {
        navigate( `/books/${isbn13}`)
    }

    const goToPage= (index:number) => {
        setCurrentPage(index)
        console.log(currentPage);
        
    }

    return (
        <div>
            <h1>New releases books!</h1>
            {loading && <p>Loading...</p>}
            {error && <p>Error: {error}</p>}
            <div className='bookList'>
                {books
                .slice(booksPerPage*currentPage, booksPerPage*(currentPage+1))
                .map((book) => (
                    <div className="book" key={book.isbn13}>
                        <div className="bookImg">
                            <img src={book.image} alt={book.title} />
                        </div>
                        <div className='bookTitle' >
                            <p onClick={(e)=>handleClick(book.isbn13)}>{book.title}</p>
                        </div>
                        <div className="bookSubtitle">
                            <p>{book.subtitle}</p>
                        </div>
                        <div className="bookPrice">
                            <p>{book.price}</p>
                            <Rating />
                        </div>
                    </div>
                ))}
                
            </div>
            <hr />
            <div className="pagination">
                {Array(countPages).fill(0).map((el, index)=><p key={index} onClick={()=>goToPage(index)}>{index+1}</p>)}
            </div>
        </div>
    );
};

export default BookList;