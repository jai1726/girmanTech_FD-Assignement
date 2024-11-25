import React from "react";

export default function SearchBar(props) {
  const [searchText, setSearchText] = React.useState(props?.searchText || "");

  const handleSearch = (e) => {
    if (e.key === "Enter") {
      props?.handleEnterClick(searchText);
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={searchText}
        onChange={(e) => setSearchText(e.target.value)}
        onKeyDown={handleSearch}
        className="border p-2 rounded-lg w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
