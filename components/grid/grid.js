import React, { Component } from 'react'
import styled from 'styled-components'

import * as style from '../../styles/variables'
import { makeGrid } from '../../styles/lib/layout'

export default class Grid extends Component {
  constructor (props) {
    super(props)
  }
  render () {

    const Container = styled.div`
      ${ props => makeGrid(props.col) };
    `

    return (
      <Container
        col={ this.props.col }
        padding={ this.props.padding }>{ this.props.children }</Container>
    )
  }
}