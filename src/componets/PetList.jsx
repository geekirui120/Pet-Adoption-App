import React from 'react';
import { Link } from 'react-router-dom';

function PetList({ pets, toggleFavorite }) {
  return (
    <div className="pet-list">
      {pets.length ? (
        pets.map((pet) => (
          <div key={pet.id} className={`pet-card ${pet.isFavorite ? 'favorite' : ''}`}>
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.type} - {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button onClick={() => toggleFavorite(pet.id)}>
              {pet.isFavorite ? 'Unfavorite' : 'Favorite'}
            </button>
            <Link to={`/pets/${pet.id}`}>View Details</Link>
          </div>
        ))
      ) : (
        <p>No pets available</p>
      )}
    </div>
  );
}

export default PetList;