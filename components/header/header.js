import Link from 'next/link'
import { withRouter } from 'next/router'

import { hexToRgb } from '../../lib/colors'

import styled from 'styled-components'
import * as style from '../../styles/variables'

import Item from './item'

const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
  position: relative;
  background-color: ${ style.COLOR_WHITE };
  border-bottom: 1px solid #ebebeb;
`

const Brand = styled.span`
  display: inline-block;
  padding-top: .085rem;
  padding-bottom: .085rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${ style.COLOR_BODY };
`

const Row = styled.div`
  flex-grow: 1;
  flex-shrink: 0;
  align-items: stretch;
  display: flex;
`

const Flex = styled.div`
  align-items: stretch;
  display: flex;
`

const FlexStart = styled(Flex)`
  justify-content: flex-start;
  margin-right: auto;  
`

const FlexEnd = styled(Flex)`
  justify-content: flex-start;
  margin-left: auto;  
`

const Header = ({ router: { pathname }}) => (
  <Container>
    <Link prefetch href='/'>
      <a>
        <Brand>
          <img src={`/images/logo.png`} />
        </Brand>
      </a>
    </Link>
    <Row>
      <FlexStart>
        <Item
          name={`Documentation`}
          linkTo={`/docs`} />
        <Item
          name={`Community`}
          linkTo={`/community`} />
        <Item
          name={`Help`}
          linkTo={`/help`} />
      </FlexStart>
      <FlexEnd>
        <Item
          name={`Log In`}
          linkTo={`/login`} />
        <Item
          name={`Sign Up`}
          linkTo={`/signup`}
          fontColor={`#FF4070`}
          fontWeight={`500`} />
      </FlexEnd>
    </Row>
  </Container>
)

export default withRouter(Header)