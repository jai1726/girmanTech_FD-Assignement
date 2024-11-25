import React from "react";
import logo from "../assets/logo.png";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";

const Navbar = (props) => {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <nav className="bg-white text-black py-4 px-8 flex justify-between items-center">
      <div className="flex items-center" onClick={() => navigate("/")}>
        <img src={logo} alt="logo" className="h-14 w-14 " />
        <div className="flex flex-col">
          <span className="text-3xl font-bold">Girman</span>
          <span>Technologies</span>
        </div>
      </div>

      {props?.isSearchBarPresent && (
        <div>
          <SearchBar searchText={props?.searchText} />
        </div>
      )}
      {!props?.isSearchBarPresent && (
        <div className="space-x-6">
          <a
            href=""
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-400 "
          >
            SEARCH
          </a>

          <a
            href="https://girmantech.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            WEBSITE
          </a>
          <a
            href="https://www.linkedin.com/company/girmantech/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            LINKEDIN
          </a>

          <a
            href="mailto:contact@girmantech.com"
            className="hover:text-blue-400 transition-colors duration-200"
          >
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
