import React from 'react';
import axios from 'axios';

export default class PersonList extends React.Component {
  state = {
    persons: []
  }

  //useEffect()
  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        console.log(res);
        const persons = res.data;
        this.setState({persons: res.data});
      },
      err => {
        console.log(err)
      })
      
  }

  render() {
    return (
      <ul>
        {
          this.state.persons
            .map(person =>
              <li key={person.id}>{person.name}</li>
            )
        }
      </ul>
    )
  }
}

export  class PersonAdd extends React.Component {
    state = {
      name: ''
    }
  
    handleChange = event => {
      this.setState({ name: event.target.value });
    }
  
    handleSubmit = event => {
      event.preventDefault();
  
      const user = {
        name: this.state.name
      };
  
      

      axios.post(`https://jsonplaceholder.typicode.com/users`, { user })
        .then(res => {
          console.log(res);
          console.log(res.data);
        },
        err => {
          console.log(err)
        })
    }
  
    render() {
      return (
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Person Name:
              <input type="text" name="name" onChange={this.handleChange} />
            </label>
            <button type="submit">Add</button>
          </form>
        </div>
      )
    }
  }
  
