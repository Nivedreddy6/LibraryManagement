import { useEffect, useState } from "react";
import api from "../services/api";
import BookCard from "../components/BookCard";
import { Link } from "react-router-dom";

function Books() {
  const [books, setBooks] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [budget, setBudget] = useState("All");
  const [sort, setSort] = useState("");

  useEffect(() => {
    getBooks();
  }, []);

  async function getBooks() {
    try {
      const response = await api.get(
        "/books"
      );

      setBooks(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  async function deleteBook(id) {
    try {
      await api.delete(
        `/books/${id}`
      );

      setBooks(
        books.filter(
          book =>
            book.id !== id
        )
      );
    } catch (error) {
      console.log(error);
    }
  }

  const filteredBooks = books.filter(book => {
    const searchMatch = book.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const categoryMatch =
      category === "All" || book.category === category;

    const budgetMatch =
      budget === "All" || book.budget === budget;

    return searchMatch && categoryMatch && budgetMatch;
  });

  let finalBooks = [...filteredBooks];

  if (sort === "high") {
    finalBooks.sort(
      (a, b) => b.rating - a.rating
    );
  }

  if (sort === "low") {
    finalBooks.sort(
      (a, b) => a.rating - b.rating
    );
  }

  const categories = [
    "All",
    ...Array.from(new Set(books.map(b => b.category).filter(Boolean)))
  ];

  return (
    <>
      <h1>Popular Books</h1>

      <Link to="/add-book" className="add-btn">
        Add Book
      </Link>

      <div className="filters">
        <input
          type="text"
          placeholder="Search Book"
          value={search}
          onChange={(e) =>
            setSearch(e.target.value)
          }
        />

        <select
          value={category}
          onChange={(e) =>
            setCategory(e.target.value)
          }
        >
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select
          value={budget}
          onChange={(e) =>
            setBudget(e.target.value)
          }
        >
          <option>All</option>
          <option>Low</option>
          <option>Medium</option>
          <option>High</option>
        </select>

        <select
          value={sort}
          onChange={(e) =>
            setSort(e.target.value)
          }
        >
          <option value="">
            Sort Rating
          </option>

          <option value="high">
            High To Low
          </option>

          <option value="low">
            Low To High
          </option>
        </select>
      </div>

      <div className="destinations">
        {
          finalBooks.map(
            book => (
              <BookCard
                key={book.id}
                book={book}
                onDelete={deleteBook}
              />
            )
          )
        }
      </div>
    </>
  );
}

export default Books;
