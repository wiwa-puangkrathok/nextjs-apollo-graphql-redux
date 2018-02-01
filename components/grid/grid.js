import React, { Component } from 'react'
import styled from 'styled-components'

import * as style from '../../styles/variables'
import { makeGrid } from '../../styles/lib/layout'

export default class Grid extends Component {
  constructor (props) {
    super(props)
  }
  render () {

    const InitializedGrid = styled.div`
      box-sizing: border-box;
      flex: 0 0 auto;
      padding-right: ${ props => props.padding || '.5rem' };
      padding-left: ${ props => props.padding || '.5rem' };
    `

    const Container = styled(InitializedGrid)`
      ${ props => makeGrid(props.col) };
    `

    return (
      <Container
        col={ this.props.col }
        padding={ this.props.padding }>{ this.props.children }</Container>
    )
  }
}