// import { Component } from 'react';
import { useState, useEffect } from 'react';

import './App.css';
import CardList  from './components/card-list/card-list.component';
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  // const [value, setValue()] = useState('');
  const [searchField, setSearchField] = useState(''); 
  const [title, SetTitle] = useState();
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, SetFilteredMonsters] = useState(monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((res) => res.json())
      .then((users) => setMonsters(users))
  }, []);

  useEffect(() => {
    const newFilteredMonsters = monsters.filter((monster) => {
        return monster.name.toLocaleLowerCase().includes(searchField);
      });

      SetFilteredMonsters(newFilteredMonsters);
  }, [monsters, searchField]);

  const onSearchChange = (event) => {
      const searchFieldString  = event.target.value.toLocaleLowerCase();
      setSearchField(searchFieldString);
    }

    const onTitleChange = (event) => {
      const searchFieldString  = event.target.value.toLocaleLowerCase();
      SetTitle(searchFieldString);
    }

  return (
        <div className="App">
          <h1 className='app-title'>{title}</h1>
          <SearchBox 
              className='monsters-search-box'
              onChangeHandler={ onSearchChange }
              placeholder='search monsters'
            />
            <br/>
            <SearchBox 
              className='title-search-box'
              onChangeHandler={ onTitleChange }
              placeholder='set title'
            />
          <CardList monsters={ filteredMonsters } />
      </div>
  )
}

export default App;