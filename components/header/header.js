import Link from 'next/link'
import { withRouter } from 'next/router'

import styled from 'styled-components'
import * as style from '../../styles/variables'
import { clearfix } from '../../styles/style-utils'
import { hexToRgb } from '../../styles/function'

// import Logo from '../../svgs/logo'
import Icon from 'svg-react-loader?name=Icon!../../static/images/science.svg'

const Container = styled.header`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  padding: 1rem;
`

const Brand = styled.span`
  display: inline-block;
  padding-top: .3125rem;
  padding-bottom: .3125rem;
  margin-right: 1rem;
  font-size: 1.25rem;
  line-height: inherit;
  white-space: nowrap;
`

const Header = ({ router: { pathname }}) => (
  <Container>
    <Link prefetch href='/'>
      <a><span><Icon /></span></a>
    </Link>
  </Container>
)

export default withRouter(Header)