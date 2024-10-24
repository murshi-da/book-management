import React from 'react';
import Header from '../components/Header';
import BooksList from '../components/BooksList';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const AppRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<BooksList />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
