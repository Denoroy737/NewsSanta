import React, { Component } from 'react'

export default class Spinner extends Component {
  render() {
    return (
      <div className='mx-auto my-3'>
          <button className="btn btn-square loading"></button>
      </div>
    )
  }
}
