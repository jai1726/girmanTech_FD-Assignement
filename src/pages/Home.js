import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../Components/Navbar';
// import logo from '../assets/logo.png'; 

const Home = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e) => {
    if (e.key === 'Enter' && query.trim()) {
      navigate(`/results?query=${query}`);
    }
  };

  return (
    <>
      <Navbar/>
    <div>
        <input
          type="text"
          placeholder="Search..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleSearch}
          className="border p-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
    </>
  );
};

export default Home;