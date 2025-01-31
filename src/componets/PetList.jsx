import React from "react";
import { Link } from "react-router-dom";

function PetList({ pets, toggleFavorite }) {
  return (
    <div className="pet-list">
      {pets.length ? (
        pets.map((pet) => (
          <div
            key={pet.id}
            className={`pet-card ${pet.isFavorite ? "favorite" : ""}`}
          >
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>
              {pet.type} - {pet.breed}
            </p>
            <p>Age: {pet.age}</p>
            <div style={{ display: "flex", gap: "10px" }}>
              <button onClick={() => toggleFavorite(pet.id)}>
                {pet.isFavorite ? "Unfavorite" : "Favorite"}
              </button>
              <button>
                <Link to={`/pets/${pet.id}`}>View Details</Link>
              </button>
            </div>
          </div>
        ))
      ) : (
        <h2>
          <b>No pets available</b>
        </h2>
      )}
    </div>
  );
}

export default PetList;
