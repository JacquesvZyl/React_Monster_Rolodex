import { Component } from 'react';

import logo from './logo.svg';
import './App.css';
import CardList from './components/card-list/card-list.component.jsx';
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: '',
    };
  }

  async componentDidMount() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();
    this.setState(
      () => {
        return { monsters: data };
      },
      () => {
        console.log(this.state);
      },
    );
  }

  filteredMonsters = () => {
    const { monsters, searchField } = this.state;
    return monsters.filter((el) => el.name.toLowerCase().includes(searchField));
  };

  onSearchChange = (e) => {
    this.setState(() => {
      return { searchField: e.target.value.toLowerCase() };
    });
  };

  render() {
    const { onSearchChange, filteredMonsters } = this;
    return (
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox
          onChangeHandler={onSearchChange}
          placeholder={'Search Monsters'}
          className={'monsters-search-box'}
        />
        <CardList monsters={filteredMonsters()} />
      </div>
    );
  }
}

export default App;
