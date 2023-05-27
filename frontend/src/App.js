import React, { useState } from 'react';
import axios from 'axios';
import TrainSearch from './components/TrainSearch';

function App() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Train Search</h1>
      <TrainSearch />
    </div>
  );
}

export default App;
