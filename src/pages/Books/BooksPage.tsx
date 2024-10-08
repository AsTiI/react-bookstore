import React from 'react'
import './BooksPage.css'
import Nav from '../../components/nav/Nav'
import BookList from '../../components/BookList/BookList'
import Subscribe from '../../components/Subscribe/Subscribe'
import Footer from '../../components/Footer/Footer'

const BooksPage = () => {
  return (
    <div className='releases_container'>
        <Nav />
        <BookList />
        <Subscribe />
        <Footer />
    </div>
  )
}

export default BooksPage