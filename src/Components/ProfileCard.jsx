import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const ProfileCard = ({ name, city, contact_number, onDetailsClick }) => {
  return (
    <div className="border border-gray-300 shadow-md rounded-lg p-4 bg-white flex flex-col space-y-4 w-72 mx-auto">
      {/* Profile Picture */}
      <div className="flex justify-start">
        <img
          src="https://via.placeholder.com/50"
          alt="profile"
          className="w-14 h-14 rounded-full border border-gray-300"
        />
      </div>

      {/* Name */}
      <div className="text-left">
        <h2 className="text-xl font-semibold text-gray-800">{name}</h2>
      </div>

      {/* Location */}
      <div className="flex items-center text-gray-600 text-sm">
        <FaMapMarkerAlt className="mr-2 text-blue-400" />
        <span>{city}</span>
      </div>

      {/* Phone Number and Button */}
      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center text-gray-600">
          <FaPhoneAlt className="mr-2 text-blue-400" />
          <span>{contact_number}</span>
        </div>
        <button
          className="bg-blue-500 text-white px-4 py-1 rounded-md hover:bg-blue-600 transition"
          onClick={onDetailsClick}
        >
          Details
        </button>
      </div>
    </div>
  );
};

export default ProfileCard;
