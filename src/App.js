import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div className='mb-5'>
            <Navbar />
          </div>
          <Switch>
            <Route exact path="/"> <News key="1" pageSize={21} country="in" category="general" /></Route>
            <Route exact path="/business"> <News key="2" pageSize={21} country="in" category="business" /></Route>
            <Route exact path="/entertainment"> <News key="3" pageSize={21} country="in" category="entertainment" /></Route>
            <Route exact path="/general"> <News key="4" pageSize={21} country="in" category="general" /></Route>
            <Route exact path="/health"> <News key="5" pageSize={21} country="in" category="health" /></Route>
            <Route exact path="/science"> <News key="6" pageSize={21} country="in" category="science" /></Route>
            <Route exact path="/sports"> <News key="7" pageSize={21} country="in" category="sports" /></Route>
            <Route exact path="/technology"> <News key="8" pageSize={21} country="in" category="technology" /></Route>
          </Switch>
        </Router>
      </div>
    )
  }
}
