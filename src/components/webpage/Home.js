import React, { Component } from 'react'
import Introduction from './Introduction'
import FounderSection from './FounderSection'
import Heading from './Heading'
import FounderHeading from './FounderHeading'
import { Services } from './Services'
import AssociatedComapnies from './AssociatedComapnies'

export class Home extends Component {
  render() {
    return (
      <div>
        <Heading/>
        <Introduction/>
        <FounderHeading/>
        <FounderSection/>
        <Services/>
        <AssociatedComapnies/>
      </div>
    )
  }
}

export default Home