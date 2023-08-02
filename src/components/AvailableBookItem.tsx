import { useContext } from 'react'

import { IBook } from '../interfaces/Book'
import {
  BooksContext,
  BooksActionKind,
} from '../store/book-context/book-context'

interface AvailableBookItemProps {
  book: IBook
}

const AvailableBookItem = ({ book }: AvailableBookItemProps) => {
  const bookContext = useContext(BooksContext)

  const onClickCardHandler = () => {
    bookContext.dispatchBooksAction({
      type: BooksActionKind.ADD_BOOK_TO_READING,
      payload: book,
    })
  }

  return (
    <li
      className='bg-zinc-400 rounded-md overflow-hidden cursor-pointer max-w-[200px] w-full'
      onClick={onClickCardHandler}
    >
      <img
        src={book.cover}
        alt={book.title}
        className='w-full object-cover aspect-[4/5]'
      />
    </li>
  )
}

export default AvailableBookItem
