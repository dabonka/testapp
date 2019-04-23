import React, { Component } from 'react';
import './App.css';

const isSearched = searchTerm => item =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase());

const list = [
  {
    title: 'React1',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 0,
  },
  {
    title: 'React2',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 1,
  },
  {
    title: 'React3',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 2,
  },
  {
    title: 'React4',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 3,
  },
  {
    title: 'React5',
    url: 'https://reactjs.org/',
    author: 'Jordan Walke',
    num_comments: 3,
    points: 4,
    objectID: 4,
  },
  {
    title: 'Redux6',
    url: 'https://redux.js.org/',
    author: 'Dan Abramov, Andrew Clark',
    num_comments: 2,
    points: 5,
    objectID: 5,
  },
];

class App extends Component {

  constructor(props){
    super(props);

    this.state = {
      list,
      searchTerm: '',
    };
    
    this.onSearchChange = this.onSearchChange.bind(this);
    this.onDismiss = this.onDismiss.bind(this);

  }

    onDismiss(id) {
      const isNotId = item => item.objectID !== id;
      const updatedList = this.state.list.filter(isNotId);
      this.setState({ list: updatedList });
    }

    onSearchChange(event) {
      this.setState({ searchTerm: event.target.value });
    }
  
  render() {
    return (
      <div className="App">
        <form>
        <input
          type="text"
          onChange={this.onSearchChange}
        />
        </form>
        {this.state.list.filter(isSearched(this.state.searchTerm)).map((item) => {
          return (
            <div key={item.objectID}>
              <span>
                <a href={item.url}>{item.title}</a>
              </span>
              <span>{item.author}</span>
              <span>{item.num_comments}</span>
              <span>
                <button
                onClick={() => this.onDismiss(item.objectID)}
                type="button"
                >
                Отбросить
                </button>
              </span>
            </div>
            )
        })}
      </div>
    );
  }
}

export default App;
