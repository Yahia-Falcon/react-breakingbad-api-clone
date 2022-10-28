import React, {useState, useEffect} from 'react';
import {debounce} from 'lodash';
import axios from "axios";
import Header from './components/ui/Header';
import Search from './components/ui/Search';
import CharacterGrid from './components/characters/CharacterGrid';

import './App.css';

const App = () => {
 const [items, setItems] = useState([]);
 const [isLoading, setIsLoading] = useState(true);
 const [query, setQuery] = useState("");

 useEffect(() => {
  const fetchData = async () => {
   const result = await axios(`https://www.breakingbadapi.com/api/characters?name=${query}`);

   setItems(result.data);
   setIsLoading(false);
  }; fetchData();
 }, [query]);

 return (
  <div className="container">
   <Header />
   <Search getQuery={debounce((q => setQuery(q)), 500)} />
   <CharacterGrid isLoading={isLoading} items={items} />
  </div>
 );
};

export default App;
