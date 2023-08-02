import { useContext, useEffect } from 'react'
import booksJson from '../data/books.json'

import {
  BooksActionKind,
  BooksContext,
} from '../store/book-context/book-context'

import mapper from '../utils/mapper'
import AvailableBookItem from './AvailableBookItem'

const AvailableBooksList = () => {
  const booksContext = useContext(BooksContext)

  useEffect(() => {
    // Get books from json

    booksContext.dispatchBooksAction({
      type: BooksActionKind.SET_AVAILABLE_BOOKS,
    })

    return () => {}
  }, [])

  return (
    <ul className='flex flex-wrap justify-center gap-6'>
      {booksContext.booksState.availableBooks.map(book => (
        <AvailableBookItem key={book.cover} book={book} />
      ))}
    </ul>
  )
}

export default AvailableBooksList
