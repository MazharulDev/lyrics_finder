import React from 'react';
import LyricsList from './components/LyricsList/LyricsList';
import Navbar from './components/Navbar/Navbar';
import SearchField from './components/Search/SearchField';

function App() {
  return (
    <div>
      <Navbar />
      <SearchField />
      <LyricsList />
    </div>
  );
}

export default App;
