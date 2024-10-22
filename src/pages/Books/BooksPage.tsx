import React, { useEffect, useState } from 'react'
import './BooksPage.css'
import Nav from '../../components/nav/Nav'
import BookList from '../../components/BookList/BookList'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS, FILTER_BOOKS } from '../../types/actionTypes'
import { fetchNewReleases } from '../../helpers/api'
import { Book } from '../../types/bookTypes'

const BooksPage = () => {
  const { books, loading, error } = useSelector((state: RootState) => state.books);
  const [ filteredBooks, setFilteredBooks] = useState<Book[]>([]);
  const [search, setSearch] = useState('')

  const dispatch = useDispatch();
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

  useEffect(() => {
    if(search)
      setFilteredBooks(books.filter(book => book.title.toUpperCase().includes(search.toLocaleUpperCase())))
    else
      setFilteredBooks(books)
  }, [search, books])

  return (
    <div className="releases">
      <Nav search={search} onChange={(e)=>setSearch(e.target.value)} />
      <div className='releases_container'>
        <BookList books={filteredBooks} loading={loading} error={error}/>
      </div>
      <Subscribe />
      <Footer />
    </div>
    
  )
}

export default BooksPage