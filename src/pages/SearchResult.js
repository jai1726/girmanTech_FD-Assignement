import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import userData from "../data/users.json";
import ProfileCard from "../Components/ProfileCard";
import Navbar from "../Components/Navbar";
import CardModal from "../Components/CardModal";

let debounceTimeout;

const SearchResults = () => {
  const location = useLocation();
  const searchTextFromURL =
    new URLSearchParams(location.search).get("searchText") || "";
  const [searchText, setSearchText] = useState(searchTextFromURL);
  const [searchResults, setSearchResults] = useState([]);
  const [selectedCard, setSelectedCard] = useState(null);

  useEffect(() => {
    const handleFilter = () => {
      const filteredData = userData.filter((entry) =>
        Object.values(entry).some((value) =>
          value.toString().toLowerCase().includes(searchText.toLowerCase())
        )
      );
      setSearchResults(filteredData);
    };

    clearTimeout(debounceTimeout);
    debounceTimeout = setTimeout(handleFilter, 300); // 300ms debounce
    return () => clearTimeout(debounceTimeout);
  }, [searchText]);

  const handleDetailsClick = (cardData) => {
    setSelectedCard(cardData);
  };

  const handleCloseModal = () => {
    setSelectedCard(null);
  };

  return (
    <>
      <Navbar
        isSearchBarPresent={true}
        searchText={searchText}
        onSearchTextChange={(text) => setSearchText(text)}
      />
      <div
        className={`grid grid-cols-3 gap-6 p-4 ${
          selectedCard ? "blur-sm" : ""
        }`}
      >
        {searchResults.map((item) => (
          <ProfileCard
            key={item.contact_number}
            name={`${item.first_name} ${item.last_name}`}
            city={item.city}
            contact_number={item.contact_number}
            onDetailsClick={() =>
              handleDetailsClick({
                name: `${item.first_name} ${item.last_name}`,
                city: item.city,
                contact_number: item.contact_number,
              })
            }
          />
        ))}
      </div>
      {selectedCard && (
        <CardModal
          name={selectedCard.name}
          city={selectedCard.city}
          contact_number={selectedCard.contact_number}
          onClose={handleCloseModal}
        />
      )}
    </>
  );
};

export default SearchResults;
