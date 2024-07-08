import useBooks from "../hooks/useBooks";
import { useParams } from "react-router-dom";
import "./Books.css";

const BookDetails = () => {
  const { title } = useParams();
  const { data, error, isLoading } = useBooks();

  console.log(title);

  if (isLoading) {
    return <p>Loading.....</p>;
  }

  if (error) {
    return <p>Error - {error.message}</p>;
  }

  const bookDetails = data.find((book) => book.title === title);

  if (bookDetails === undefined) {
    return <p>Error</p>;
  }

  return (
    <div className="books-container">
      <h1>{bookDetails.title}</h1>
      <p>{bookDetails.description}</p>
      <img src={bookDetails.cover} alt={bookDetails.title} />
    </div>
  );
};

export default BookDetails;
