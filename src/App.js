import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default class App extends Component {
  render() {
    let pageSize = 15
    let country = "in"
    return (
      <div>
        <Router>
          <div className='mb-5'>
            <Navbar />
          </div>
          <Switch>
          <Route exact path="/"><News  key="general" pageSize={pageSize} country={country} category="general"/></Route> 
          <Route exact path="/business"><News key="business" pageSize={pageSize} country={country} category="business"/></Route> 
          <Route exact path="/entertainment"><News key="entertainment" pageSize={pageSize} country={country} category="entertainment"/></Route> 
          <Route exact path="/general"><News key="general" pageSize={pageSize} country={country} category="general"/></Route> 
          <Route exact path="/health"><News key="health" pageSize={pageSize} country={country} category="health"/></Route> 
          <Route exact path="/science"><News key="science" pageSize={pageSize} country={country} category="science"/></Route> 
          <Route exact path="/sports"><News key="sports" pageSize={pageSize} country={country} category="sports"/></Route> 
          <Route exact path="/technology"><News key="technology" pageSize={pageSize} country={country} category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
  }
}
