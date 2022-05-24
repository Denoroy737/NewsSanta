import React, { Component } from 'react'
import Navbar from './components/Navbar'
import News from './components/News'

export default class App extends Component {
  render() {
    return (
      <div>
        <div className='mb-5'>
        <Navbar/>
        </div>
        <News/>
      </div>
    )
  }
}
