import React, { Component } from 'react'
import { BrowserRouter as Router } from 'react-router-dom'
import Header from './component/Header'
import Section from './component/Section'
import { DataProvider } from './component/Context'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

class App extends Component {

  render() {
    return (
      <DataProvider>
        <div className="app">
          <Router>
            <Header />
            <Section />
          </Router>
        </div>
      </DataProvider>
    )
  }
}

export default App