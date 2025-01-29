import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function PetDetail({ toggleFavorite }) {
  const { id } = useParams(); 
  const [pet, setPet] = useState(null); 

  useEffect(() => {
    fetch(http://localhost:8001/pets/${id})
      .then((res) => res.json())
      .then((data) => setPet(data))
      .catch((error) => {
        console.error("Error fetching pet details:", error);
      });
  }, [id]); 
  

  if (!pet) return <div>Loading pet details...</div>;

  return (
    <div className="pet-detail">
      <h1>Pet Details</h1>
      <img src={pet.image} alt={pet.name} />
      <h2>{pet.name}</h2>
      <p>Type: {pet.type}</p>
      <p>Breed: {pet.breed}</p>
      <p>Age: {pet.age}</p>
      <p>{pet.description}</p>
      <button onClick={() => toggleFavorite(pet.id)}>
        {pet.isFavorite ? "Unfavorite" : "Favorite"}
      </button>
    </div>
  );
}

export default PetDetail;