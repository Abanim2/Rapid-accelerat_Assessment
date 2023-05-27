import React, { useState } from 'react';
import axios from 'axios';

function TrainSearch() {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [trains, setTrains] = useState([]);

  const handleSourceChange = (event) => {
    setSource(event.target.value);
  };

  const handleDestinationChange = (event) => {
    setDestination(event.target.value);
  };

  const handleSearch = () => {
    axios
      .get(`/api/trains?source=${source}&destination=${destination}`)
      .then((response) => {
        setTrains(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div className="flex space-x-4 mb-4">
        <div>
          <label className="block">Source:</label>
          <select
            className="border p-2"
            value={source}
            onChange={handleSourceChange}
          >
            <option value="">Select source</option>
            {/* Populate options from your backend or hardcoded */}
          </select>
        </div>
        <div>
          <label className="block">Destination:</label>
          <select
            className="border p-2"
            value={destination}
            onChange={handleDestinationChange}
          >
            <option value="">Select destination</option>
            {/* Populate options from your backend or hardcoded */}
          </select>
        </div>
        <div>
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>
      </div>
      {trains.length > 0 ? (
        <div>
          <h2 className="text-xl font-bold mb-4">Train List</h2>
          <table className="border border-gray-500 w-full">
            <thead>
              <tr>
                <th className="border border-gray-500 p-2">Train</th>
                <th className="border border-gray-500 p-2">Departure</th>
                <th className="border border-gray-500 p-2">Arrival</th>
                <th className="border border-gray-500 p-2">Price</th>
              </tr>
            </thead>
            <tbody>
              {trains.map((train) => (
                <tr key={train.id}>
                  <td className="border border-gray-500 p-2">{train.name}</td>
                  <td className="border border-gray-500 p-2">{train.departure}</td>
                  <td className="border border-gray-500 p-2">{train.arrival}</td>
                  <td className="border border-gray-500 p-2">{train.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <p>No trains available for the selected route.</p>
      )}
    </div>
  );
}

export default TrainSearch;
