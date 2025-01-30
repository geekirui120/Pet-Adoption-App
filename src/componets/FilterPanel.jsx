import React from 'react';

function FilterPanel({ filter, setFilter }) {
  const handleChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
  };

  return (
    <div className="filter-panel">
      <select name="type" value={filter.type} onChange={handleChange}>
        <option value="">All Types</option>
        <option value="Dog">Dog</option>
        <option value="Cat">Cat</option>
      </select>
      <select name="breed" value={filter.breed} onChange={handleChange}>
        <option value="">All Breeds</option>
        <option value="Golden Retriever">Golden Retriever</option>
        <option value="Persian">Persian</option>
      </select>
    </div>
  );
}

export default FilterPanel;
