import React, { useReducer } from 'react'
import { IBook } from '../../interfaces/Book'
import booksJson from '../../data/books.json'
import mapper from '../../utils/mapper'

import {
  IBookState,
  IBooksAction,
  IBookStateProviderProps,
  IBooksProviderValue,
  BookDictionaryFunctions,
  PayloadActionData,
} from './interfaces'

export enum BooksActionKind {
  ADD_BOOK_TO_READING = 'ADD_BOOK_TO_READING',
  REMOVE_BOOK_FROM_READING = 'REMOVE_BOOK_FROM_READING',
  SET_AVAILABLE_BOOKS = 'SET_AVAILABLE_BOOKS',
  FILTER_AVAILABLE_BOOKS = 'FILTER_AVAILABLE_BOOKS',
}

// Logic
const setAvailableBooks = (state: IBookState, payload: PayloadActionData) => {
  const books = booksJson.library.map(mapper.mapBook)
  return { ...state, availableBooks: books, totalBooks: books }
}

const addBookToReading = (state: IBookState, payload: PayloadActionData) => {
  const readingBooks = [...state.readingBooks, payload as IBook]
  const availableBooks = state.availableBooks.filter(book => book !== payload)
  return { ...state, availableBooks, readingBooks }
}

const removeBookFromReading = (
  state: IBookState,
  payload: PayloadActionData
) => {
  const readingBooks = state.readingBooks.filter(book => book !== payload)
  const availableBooks = [...state.availableBooks, payload as IBook]
  return { ...state, availableBooks, readingBooks }
}

const filterAvailableBooks = (
  state: IBookState,
  payload: PayloadActionData
) => {
  if (payload === 'All') {
    const availableBooks: IBook[] = []

    for (let book of state.totalBooks) {
      if (!state.readingBooks.includes(book)) {
        availableBooks.push(book)
      }
    }

    return { ...state, availableBooks }
  }
  const availableBooks = state.totalBooks.filter(
    book => book.genre === payload && !state.readingBooks.includes(book)
  )
  return { ...state, availableBooks }
}

const bookActionsFuntions: BookDictionaryFunctions = {
  SET_AVAILABLE_BOOKS: setAvailableBooks,
  ADD_BOOK_TO_READING: addBookToReading,
  REMOVE_BOOK_FROM_READING: removeBookFromReading,
  FILTER_AVAILABLE_BOOKS: filterAvailableBooks,
}

const booksReducer = (state: IBookState, action: IBooksAction): IBookState => {
  const actionFunction = bookActionsFuntions[action.type]

  if (actionFunction) {
    return actionFunction(state, action.payload == null ? '' : action.payload)
  }

  return state
}

// Exports
export const BooksContext = React.createContext({
  booksState: {} as IBookState,
  dispatchBooksAction: {} as React.Dispatch<IBooksAction>,
})

export const BooksContextProvider = ({ children }: IBookStateProviderProps) => {
  const [booksState, dispatchBooksAction] = useReducer(booksReducer, {
    availableBooks: [] as IBook[],
    readingBooks: [] as IBook[],
    totalBooks: [] as IBook[],
  } as IBookState)

  const bookProviderValue: IBooksProviderValue = {
    booksState,
    dispatchBooksAction,
  }

  return (
    <BooksContext.Provider value={bookProviderValue}>
      {children}
    </BooksContext.Provider>
  )
}
