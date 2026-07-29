import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  removeFavorite
} from "../features/favoriteSlice";

function Favorites() {

  const dispatch = useDispatch();

  const favorites = useSelector(
    state => state.favorites
  );

  return (

    <div className="favorites-container">

      <h1 className="page-title">
        Favorite Books
      </h1>

      {
        favorites.length === 0 ? (

          <div className="empty-favorites">

            <h2>
              No Favorite Books
            </h2>

            <p>
              Add books from the
              Books page.
            </p>

          </div>

        ) : (

          <div className="favorites-grid">

            {
              favorites.map(book => (

                <div
                  key={book.id}
                  className="favorite-card"
                >

                  <img
                    src={book.image}
                    alt={book.name}
                  />

                  <div className="favorite-content">

                    <h2>
                      {book.name}
                    </h2>

                    <p>
                      📖 {book.country}
                    </p>

                    <p>
                      ⭐ {book.rating}
                    </p>

                    <p>
                      💰 ₹{book.budget}
                    </p>

                    <button
                      onClick={() =>
                        dispatch(
                          removeFavorite(
                            book.id
                          )
                        )
                      }
                    >
                      Remove
                    </button>

                  </div>

                </div>

              ))
            }

          </div>

        )
      }

    </div>

  );
}

export default Favorites;
