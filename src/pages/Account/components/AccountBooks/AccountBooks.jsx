import { useState } from 'react';
import showBookSearchResults from '../../../../helperComponents/bookSearch';
import './AccountBooks.css';

const AccountBooks = ({ user, books }) => {
  const [bookList, setbookList] = useState([...books]);

  useState(() => {
    const filteredBooks = books.filter((book) =>
      user.booksOwned.includes(book.id)
    );
    setbookList(filteredBooks);
  }, []);

  return (
    <>
      <h3>My Books</h3>
      {showBookSearchResults(bookList)}
    </>
  );
};

export default AccountBooks;
