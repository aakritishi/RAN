import React, { Component } from 'react'
import Introduction from './Introduction'
import Heading from './Heading'

export class Home extends Component {
  render() {
    return (
      <div>
        <Heading/>
        <Introduction/>
      </div>
    )
  }
}

export default Home