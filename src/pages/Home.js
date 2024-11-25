import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../Components/Navbar";
import SearchBar from "../Components/SearchBar";
import logo from "../assets/logo.png";

const Home = () => {
  const navigate = useNavigate();

  const handleEnterClick = (searchText) => {
    navigate(`/search?searchText=${searchText}`);
  };

  return (
    <>
      <Navbar isSearchBarPresent={false} />
      <div className="flex flex-col items-center justify center">
        <div className="flex  justify-center items-center">
          <img src={logo} alt="logo" className="h-24 w-24" />
          <span className="text-4xl font-bold">Girman</span>
        </div>

        <SearchBar handleEnterClick={handleEnterClick} />
      </div>
    </>
  );
};

export default Home;
