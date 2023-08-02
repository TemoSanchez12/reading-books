import { IBook } from '../interfaces/Book'

const mapBook: (book: any) => IBook = ({ book }: any) => ({
  title: book.title,
  author: {
    name: book.author.name,
    otherBooks: book.author.otherBooks,
  },
  cover: book.cover,
  pages: book.pages,
  genre: book.genre,
  year: book.year,
  ISBN: book.ISBN,
  synopsis: book.synopsis,
})

interface IMapper {
  mapBook: (book: any) => IBook
}

const mapper: IMapper = {
  mapBook: mapBook,
}

export default mapper
