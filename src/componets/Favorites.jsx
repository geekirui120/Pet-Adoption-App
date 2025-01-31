import React from 'react';

function Favorites({ favorites, toggleFavorite }) {
  return (
    <div className="favorites">
      {favorites.length ? (
        favorites.map((pet) => (
          <div key={pet.id} className="pet-card">
            <img src={pet.image} alt={pet.name} />
            <h3>{pet.name}</h3>
            <p>{pet.type} - {pet.breed}</p>
            <p>Age: {pet.age}</p>
            <button onClick={() => toggleFavorite(pet.id)}>Unfavorite</button>
          </div>
        ))
      ) : (
        <h2>No favorites added</h2>
      )}
    </div>
  );
}

export default Favorites;
