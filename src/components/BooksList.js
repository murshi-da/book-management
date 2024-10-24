import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { deleteBook, editBook, addBook } from '../actions/bookActions';
import BookForm from './BookForm';

const BooksList = () => {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.book.books);
  const [editData, setEditData] = React.useState(null);

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEdit = (book) => {
    setEditData(book);
  };

  const handleOnSubmit = (book) => {
    if (editData) {
      dispatch(editBook(book));
      setEditData(null); 
    } else {
      dispatch(addBook(book)); 
    }
  };

  return (
    <div>
      <BookForm handleOnSubmit={handleOnSubmit} initialData={editData} />
      <ul>
        {books.map((book) => (
          <li key={book.id}>
            <span>{book.bookname} - {book.author}</span>
            <button onClick={() => handleEdit(book)}>Edit</button>
            <button onClick={() => handleDelete(book.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BooksList;

