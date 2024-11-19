import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import userData from "../data/users.json";

const SearchResults = () => {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get("query") || "";
  const [results, setResults] = useState([]);

  useEffect(() => {
    const filteredData = userData.filter((user) =>
      `${user.firstName} ${user.lastName}`.toLowerCase().includes(query.toLowerCase())
    );
    setResults(filteredData);
  }, [query]);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-4">Search Results</h2>
      {results.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {results.map((user, index) => (
            <div key={index} className="border p-4 rounded-lg shadow-lg">
              <img src="https://via.placeholder.com/150" alt="User" className="rounded-full mb-4" />
              <h3 className="text-lg font-bold">{user.firstName} {user.lastName}</h3>
              <p>{user.address}</p>
              <p>{user.phone}</p>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No results found for "{query}"</p>
      )}
    </div>
  );
};

export default SearchResults;
