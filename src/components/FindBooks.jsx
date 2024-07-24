import React, { useState } from "react";
import { PulseLoader } from "react-spinners";

const FindBooks = () => {
  const [bookName, setBookName] = useState("");
  const [bookData, setBookData] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const booksPerPage = 12;

  const fetchBookInfo = async (e) => {
    e.preventDefault();

    setLoading(true);

    const res = await fetch(
      `https://openlibrary.org/search.json?q=${bookName.toLowerCase()}`
    );

    const data = await res.json();
    console.log(data);

    if (data.docs && data.docs.length > 0) {
      const books = data.docs.map((book) => ({
        name: book.title,
        publisher: book.publisher ? book.publisher[0] : "Unknown",
        firstSentence: book.first_sentence
          ? book.first_sentence[0]
          : "No first sentence available",
        coverId: book.cover_i,
      }));
      setBookData(books);
      setCurrentPage(0);
    } else {
      setBookData([]);
    }

    setLoading(false);
  };

  const handleNextPage = () => {
    if ((currentPage + 1) * booksPerPage < bookData.length) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const displayedBooks = bookData.slice(
    currentPage * booksPerPage,
    (currentPage + 1) * booksPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center p-4 md:p-8">
      <div className="bg-white p-6 md:p-8 rounded-lg shadow-md mb-6 md:mb-10 w-full max-w-screen-lg">
        <h1 className="text-red-600 text-3xl md:text-4xl font-bold mb-4">
          Welcome to Our Online Library
        </h1>
        <p className="text-gray-700 mb-6 text-sm md:text-base">
          Discover a wide range of books, journals, and articles at your
          fingertips.
        </p>
        <form onSubmit={fetchBookInfo} className="flex items-center">
          <input
            type="text"
            value={bookName}
            onChange={(e) => {
              setBookName(e.target.value);
              setBookData([]);
            }}
            placeholder="Enter book name"
            className="flex-grow p-2 border border-gray-300 rounded-l-lg"
          />
          <button
            type="submit"
            className="bg-red-600 text-white p-2 rounded-r-lg hover:bg-red-800 font-bold disabled:opacity-25 disabled:cursor-not-allowed"
            disabled={loading}
          >
            Search
          </button>
        </form>
      </div>
      {loading && (
        <p className="text-gray-600 mb-4">
          <PulseLoader color="red" />
        </p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full max-w-screen-lg">
        {displayedBooks.length > 0 &&
          !loading &&
          displayedBooks.map((book, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-4 md:p-6 flex flex-col items-center"
            >
              {book.coverId ? (
                <img
                  src={`https://covers.openlibrary.org/b/id/${book.coverId}-L.jpg`}
                  alt={`${book.name} cover`}
                  className="w-full h-48 md:h-72 object-contain mb-4 rounded"
                />
              ) : (
                <div className="w-full h-48 md:h-72 bg-gray-200 mb-4 rounded flex items-center justify-center">
                  <p className="text-gray-500">No image available</p>
                </div>
              )}
              <h2 className="text-xl md:text-2xl font-bold text-gray-800 mb-2 text-center">
                {book.name}
              </h2>
              <p className="text-gray-600 mb-1 text-center text-sm md:text-base">
                Publisher: {book.publisher}
              </p>
              <p className="text-gray-600 text-center text-sm md:text-base">
                First Sentence: {book.firstSentence}
              </p>
            </div>
          ))}
      </div>
      {!loading && bookData.length > 0 && (
        <div className="flex justify-between w-full max-w-screen-lg mt-4">
          <button
            onClick={handlePreviousPage}
            disabled={currentPage === 0}
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded disabled:opacity-25 disabled:cursor-not-allowed"
          >
            Previous
          </button>
          <button
            onClick={handleNextPage}
            disabled={
              (currentPage + 1) * booksPerPage >= bookData.length || loading
            }
            className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded disabled:opacity-25 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default FindBooks;
