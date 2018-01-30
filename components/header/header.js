import Link from 'next/link'
import { withRouter } from 'next/router'

import { hexToRgb } from '../../lib/colors'

import styled from 'styled-components'
import * as style from '../../styles/variables'
import { clearfix } from '../../styles/style-utils'

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
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
  color: ${ style.COLOR_MASTER };
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
      <a><Brand>Logo</Brand></a>
    </Link>
    <Row>
      <FlexStart>
        <Item
          name={`Documentation`}
          linkTo={`/docs`}
        />
        <Item
          name={`Community`}
          linkTo={`/community`}
        />
      </FlexStart>
      <FlexEnd>
        <Item
          name={`Community`}
          linkTo={`/community`}
        />
      </FlexEnd>
    </Row>
  </Container>
)

export default withRouter(Header)