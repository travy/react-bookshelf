import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'
import BookSearchDashboard from './BookSearchDashboard.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <BookSearchDashboard />
      </div>
    )
  }
}

export default App;
