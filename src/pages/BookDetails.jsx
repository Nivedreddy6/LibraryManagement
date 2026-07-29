import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import api from "../services/api";

function BookDetails() {
    const { id } = useParams();

    const [book, setBook] = useState(null);

    useEffect(() => {
        getBook();
    }, []);

    async function getBook() {
        try {
            const response = await api.get(
                `/books/${id}`
            );

            setBook(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    if (!book) {
        return <h2>Loading...</h2>;
    }

    return (
        <div className="details">
            <img
                src={book.image}
                alt={book.name}
            />

            <h1>{book.name}</h1>

            <p>{book.description}</p>

            <h3>Author</h3>
            <p>{book.country}</p>

            <h3>Category</h3>
            <p>{book.category}</p>

            <h3>Availability Status</h3>
            <p>{book.bestTimeToVisit}</p>

            <h3>Loan Duration</h3>
            <p>{book.duration}</p>

            <h3>Shelf Location</h3>
            <p>{book.weather}</p>

            <h3>Language</h3>
            <p>{book.language}</p>

            <h3>Currency</h3>
            <p>{book.currency}</p>

            <h3>Price / Value</h3>
            <p>₹ {book.price}</p>

            <h3>Rating</h3>
            <p>{book.rating}</p>

            <h3>Famous For</h3>
            <p>{book.famousFor}</p>

            <h3>Top Highlights</h3>

            <ul>
                {book.attractions?.map(
                    (place, index) => (
                        <li key={index}>{place}</li>
                    )
                )}
            </ul>
        </div>
    );
}

export default BookDetails;
