import "./Books.css";
import { Link } from "react-router-dom";
import useBooks from "../hooks/useBooks";

const Books = () => {
  const { data, error, isLoading } = useBooks();

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error - {error.message}</p>;
  }

  return (
    <>
      <div className="books-title">
        <h1>Books</h1>
      </div>
      <div className="books-container">
        {data &&
          data.map((book) => (
            <Link to={`/books/${book.title}`} key={book.index}>
              <div className="book-card">
                <h2>{book.title}</h2>
                <img src={book.cover} alt={book.title} />
              </div>
            </Link>
          ))}
      </div>
    </>
  );
};
export default Books;
