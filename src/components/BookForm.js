import React, { useState } from 'react';

const BookForm = ({ handleOnSubmit, initialData }) => {
  const [bookname, setBookname] = useState(initialData?.bookname || '');
  const [author, setAuthor] = useState(initialData?.author || '');
  const [price, setPrice] = useState(initialData?.price || '');
  const [quantity, setQuantity] = useState(initialData?.quantity || '');

  const onSubmit = (e) => {
    e.preventDefault();
    if (bookname && author && price && quantity) {
      handleOnSubmit({
        id: initialData?.id || Date.now(), 
        bookname,
        author,
        price: parseFloat(price),
        quantity: parseInt(quantity, 10),
      });
      setBookname('');
      setAuthor('');
      setPrice('');
      setQuantity('');
    } else {
      alert('Please fill out all fields.');
    }
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        type="text"
        placeholder="Book Name"
        value={bookname}
        onChange={(e) => setBookname(e.target.value)}
      />
      <input
        type="text"
        placeholder="Author"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <input
        type="number"
        placeholder="Price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
      />
      <button type="submit">{initialData ? 'Edit Book' : 'Add Book'}</button>
    </form>
  );
};

export default BookForm;
