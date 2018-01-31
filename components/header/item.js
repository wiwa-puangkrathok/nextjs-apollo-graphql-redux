import React, { Component } from 'react'
import Link from 'next/link'
import { withRouter } from 'next/router'

import styled from 'styled-components'
import * as style from '../../styles/variables'
import { transistion, clearfix } from '../../styles/style-utils'

const StyledLink = styled.a`
  color: ${ style.COLOR_BODY };
  line-height: 1.5;
  padding: 0.25rem 1rem;
  position: relative;
  display: block;
  ${ transistion() }

  &:hover {
    color: ${ style.COLOR_BLUE };
    text-decoration: none;
  }
`

const AchorFlex = styled(StyledLink)`
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  display: flex;
`

const Item = ({ router: { pathname }, linkTo, name}) => (
  <Link prefetch href={ linkTo } passHref>
    <AchorFlex>{ name }</AchorFlex>
  </Link>
)

export default withRouter(Item)