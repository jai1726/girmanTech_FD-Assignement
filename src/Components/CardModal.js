import React from "react";
import { FaMapMarkerAlt, FaPhoneAlt } from "react-icons/fa";

const CardModal = ({ name, city, contact_number, onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-1/2">
        <div className="flex justify-between items-start">
          <h2 className="text-2xl font-bold">{name}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            ✕
          </button>
        </div>
        <div className="flex flex-col items-center space-y-6 mt-4">
          <img
            src="https://via.placeholder.com/150"
            alt="profile"
            className="w-32 h-32 rounded-full border border-gray-300"
          />
          <div className="flex flex-col space-y-2 text-center">
            <p className="text-lg text-gray-600 flex items-center justify-center">
              <FaMapMarkerAlt className="text-blue-400 mr-2" />
              {city}
            </p>
            <p className="text-lg text-gray-600 flex items-center justify-center">
              <FaPhoneAlt className="text-blue-400 mr-2" />
              {contact_number}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardModal;
