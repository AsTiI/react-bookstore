import React, { useEffect, useState } from 'react';
import './BookList.css'
import { useNavigate } from 'react-router-dom';
import Rating from '../Rating/Rating';
import { Book } from '../../types/bookTypes';

interface ButtonComponentProps {
    books: Book[];
    loading: boolean;
    error: string | null;
}


const BookList: React.FC<ButtonComponentProps> = ({books, loading, error}) => {
    const booksPerPage = 9
    const navigate = useNavigate();

    const [ countPages, setCountPages ] = useState<number>(0);
    const [ currentPage, setCurrentPage ] = useState<number>(0)

    useEffect(()=> {
        setCountPages(Math.ceil(books.length/booksPerPage))
    },[books])

    const handleClick = (isbn13:any) => {
        navigate( `/books/${isbn13}`)
    }

    const goToPage= (index:number) => {
        setCurrentPage(index)
    }

    return (
        <div className='bookList_container'>
            <h1>New releases books!</h1>
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
                            <Rating rating={String((Math.random()*10/2).toFixed(0))}/>
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