import React from 'react';
import './App.css';
import SearchBar from '../components/searchbar/searchbar'
import Button from '../components/button/button'
import ReviewsTable from '../components/reviewstable/reviewstable'

function App() {
  return (
    <div className="App">
      <h1>Lunch Place</h1>
      <SearchBar/>
      <ReviewsTable/>
      <Button content="Add Participant"/>
    </div>
  );
}

export default App;
