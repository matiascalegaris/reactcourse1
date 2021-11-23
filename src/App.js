import './App.css';
import { Component } from 'react';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class  App extends Component {
  constructor() {
    super()
    this.state = {
      options: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ options: users }));
  }
  
  onSearchChange = (event) => {
    this.setState( {searchField: event.target.value})
  }

  render() {
    const { options, searchField} = this.state;
    const filteredOptions = options.filter( element => 
      element.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1> Cat Rolodex </h1>
        <SearchBox placeHolder={'search monsters'} action={this.onSearchChange}/>
        <CardList options={filteredOptions}></CardList>
      </div>
    );
  }
}
export default App;
