import { IBook } from '../../interfaces/Book'
import { BooksActionKind } from './book-context'

export type PayloadActionData = IBook | IBook[] | string

export interface IBookState {
  availableBooks: IBook[]
  readingBooks: IBook[]
  totalBooks: IBook[]
}

export type BookDictionaryFunctions = Record<
  BooksActionKind,
  (state: IBookState, payload: PayloadActionData) => IBookState
>

export interface IBookStateProviderProps {
  children: JSX.Element
}

export interface IBooksAction {
  type: BooksActionKind
  payload?: PayloadActionData
}

export interface IBooksProviderValue {
  booksState: IBookState
  dispatchBooksAction: React.Dispatch<IBooksAction>
}
