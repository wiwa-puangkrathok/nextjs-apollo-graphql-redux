import InlineSVG from 'svg-inline-react'
import styled from 'styled-components'
import * as style from '../../styles/variables'
import { HiFiveSimple } from '../../lib/svgs/hifive'

const Brand = styled.div`
  display: inline-block;
  margin-right: 1rem;
  padding-top: 5px;
`

const Logo = styled.span`
  font-size: 1.25rem;
  white-space: nowrap;
  color: ${ style.COLOR_BODY };
  i {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`

export default () => (
  <Brand>
    <Logo>
      <InlineSVG src={ HiFiveSimple } />
    </Logo>
  </Brand>
)