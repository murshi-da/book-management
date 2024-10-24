import React from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from '../store/actions'; 

const BooksList = () => {
  const dispatch = useDispatch();

  const addBook = (book) => {
    dispatch(addBookAction(book));
  };

  const handleAdd = () => {
    const newBook = {
      id: Math.random(), 
      title: "New Book",
      author: "Author Name",
    };
    addBook(newBook);
  };

  return (
    <div>
      <h2>Books List</h2>
      <button onClick={handleAdd}>Add Book</button>

    </div>
  );
};

export default BooksList;




