import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import PetList from './components/PetList';
import PetDetail from './components/PetDetail';
import FilterPanel from './components/FilterPanel';
import Favorites from './components/Favorites';
import './App.css';

function App() {
  const [pets, setPets] = useState([]);
  const [favorites, setFavorites] = useState([]);
  const [filter, setFilter] = useState({ type: '', breed: '' });

  useEffect(() => {
    fetch('http://localhost:8001/pets')
      .then((res) => res.json())
      .then((data) => setPets(data));
  }, []);

  const toggleFavorite = (id) => {
    const pet = pets.find((p) => p.id === id);
    const updatedPet = { ...pet, isFavorite: !pet.isFavorite };
    const configObj = {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isFavorite: updatedPet.isFavorite }),
    };
    fetch(`http://localhost:8001/pets/${id}`, configObj)
      .then((res) => res.json())
      .then((updatedPet) => {
        setPets((prevPets) =>
          prevPets.map((p) => (p.id === updatedPet.id ? updatedPet : p))
        );
        if (updatedPet.isFavorite) {
          setFavorites((prevFavorites) => [...prevFavorites, updatedPet]);
        } else {
          setFavorites((prevFavorites) =>
            prevFavorites.filter((p) => p.id !== updatedPet.id)
          );
        }
      });
  };

  const filteredPets = pets.filter((pet) => {
    return (
      (!filter.type || pet.type === filter.type) &&
      (!filter.breed || pet.breed === filter.breed)
    );
  });

  return (
    <Router>
      <Navbar />
      <FilterPanel filter={filter} setFilter={setFilter} />
      <Routes>
        <Route
          path="/pets"
          element={<PetList pets={filteredPets} toggleFavorite={toggleFavorite} />}
        />
        <Route
          path="/pets/:id"
          element={
            <PetDetail
              pet={pets.find((p) => p.id === parseInt(window.location.pathname.split('/').pop()))}
              toggleFavorite={toggleFavorite}
            />
          }
        />
        <Route
          path="/favorites"
          element={<Favorites favorites={favorites} toggleFavorite={toggleFavorite} />}
        />
      </Routes>
    </Router>
  );
}

export default App;
