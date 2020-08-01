import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Header from './components/ui/Header';
import CharacterGrid from './components/characters/CharacterGrid';
import Search from './components/ui/Search'
import './App.css';

function App() {

  // setState hook
  // uses destructuring to creat "items, 'isLoading", and "query" as state as well as the ability to set those states
  const [ items, setItems ] = useState([]) 
  const [ isLoading, setIsLoading ] = useState(true);
  const [ query, setQuery ] = useState('');

  // useEffect hook
  useEffect(() => {

    // gets a promisse
    const fetchItems = async () => {
      const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`)
      setItems(result.data)
      setIsLoading(false)
    }

    fetchItems();
  }, [query])    // lists dependencies which triger a re-render

  // this both renders the components and sends "state" to them to be used as "props"
  return (
    <div className="App">
      <Header />
      {/* gives the Search the ability to use the UseEffect hool and set the search pramater */}
      <Search getQuery={(q) => setQuery(q)}/>
      {/* sends the resluts of the search to the CharacterGrid component */}
      <CharacterGrid isLoading={isLoading} items={items}/> 
    </div>
  );
}

export default App;
