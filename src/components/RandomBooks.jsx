import React, { useState, useEffect } from "react";
import { PulseLoader } from "react-spinners";

const RandomBooks = () => {
  const [bookData, setBookData] = useState([]);
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchRandomBooks = async () => {
    setLoading(true);

    try {
      const res = await fetch(
        `https://openlibrary.org/subjects/love.json?limit=30`
      );
      const data = await res.json();

      if (data.works && data.works.length > 0) {
        const books = data.works.map((book) => ({
          name: book.title,
          publisher: book.publishers ? book.publishers[0] : "Unknown",
          firstSentence: book.first_sentence
            ? book.first_sentence[0]
            : "No first sentence available",
          coverId: book.cover_id,
        }));

        const shuffledBooks = books.sort(() => 0.5 - Math.random());

        const randomBooksSubset = shuffledBooks.slice(0, 6);

        setBookData(books);
        setRandomBooks(randomBooksSubset);
      } else {
        setBookData([]);
        setRandomBooks([]);
      }
    } catch (error) {
      console.error("Error fetching books:", error);
      setBookData([]);
      setRandomBooks([]);
    }

    setLoading(false);
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <div className="bg-gray-100 flex flex-col items-center justify-center p-8">
      <div className="w-full max-w-screen-lg flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Random Books</h2>
        <button
          onClick={fetchRandomBooks}
          className="bg-red-600 hover:bg-red-800 text-white font-bold py-2 px-4 rounded disabled:opacity-25 disabled:cursor-not-allowed"
          disabled={loading}
        >
          Random
        </button>
      </div>
      {loading && (
        <p className="text-gray-600 mb-4">
          <PulseLoader color="red" />
        </p>
      )}

      {randomBooks.length > 0 && (
        <div className="w-full max-w-screen-lg">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {randomBooks.map((book, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-4 flex flex-col items-center"
              >
                {book.coverId ? (
                  <img
                    src={`https://covers.openlibrary.org/b/id/${book.coverId}-M.jpg`}
                    alt={`${book.name} cover`}
                    className="w-full h-40 mb-2 rounded"
                  />
                ) : (
                  <div className="w-full h-40 bg-gray-200 mb-2 rounded flex items-center justify-center">
                    <p className="text-gray-500">No image available</p>
                  </div>
                )}
                <h3 className="text-sm font-bold text-gray-800 text-center">
                  {book.name}
                </h3>
                <p className="text-gray-600 mb-1 text-xs text-center">
                  Publisher: {book.publisher}
                </p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default RandomBooks;
