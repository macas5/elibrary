import { Divider, List, ListItem, Pagination } from '@mui/material';
import { Link } from 'react-router-dom';

const showBookSearchResults = (
  bookList,
  pageCount,
  setPage,
  currentPage,
  maxEntries = 0
) => {
  const handlePageChange = (e) => {
    setPage(e.target.innerText - 1);
    window.scrollTo({ top: 315 });
  };

  return (
    bookList && (
      <List key="bookList">
        {bookList.map((book, index) => {
          return (
            (maxEntries === 0 || index < maxEntries) && (
              <Link
                className="link"
                to={`/book/${book._id}`}
                key={index}
              >
                <ListItem key={index + 'item'}>
                  <div className="book">
                    <div className="bookImage">
                      <img
                        src={
                          book.imageLink !== ''
                            ? book.imageLink
                            : 'https://media.istockphoto.com/vectors/photo-coming-soon-image-icon-vector-illustration-isolated-on-white-vector-id1193060544?k=20&m=1193060544&s=612x612&w=0&h=MI8y2q1HsY4TEAZD3tNCJN3bmc39N3pnFKC2KKNDUmE='
                        }
                        alt={book.title}
                      />
                    </div>
                    <div className="bookData">
                      <div className="bookForm">FORM: {book.form}</div>
                      <div className="bookInfo">
                        <p>
                          <b>Title:</b> {book.title}
                        </p>
                        <p>
                          <b>Author:</b> {book.author}
                        </p>
                        <p>
                          <b>Language:</b> {book.language}
                        </p>
                        <p>
                          <b>Publication date:</b> {book.publicationDate}
                        </p>
                      </div>
                    </div>
                  </div>
                </ListItem>
                <Divider />
              </Link>
            )
          );
        })}
        <div className="pagination">
          {pageCount > 1 && maxEntries < 21 && (
            <Pagination
              hideNextButton
              hidePrevButton
              onClick={handlePageChange}
              count={pageCount}
              page={currentPage + 1}
            />
          )}
        </div>
      </List>
    )
  );
};

export default showBookSearchResults;
