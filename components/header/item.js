import Link from 'next/link'
import { withRouter } from 'next/router'

import styled from 'styled-components'
import * as style from '../../styles/variables'
import { transistion, clearfix } from '../../styles/style-utils'

const StyledLink = styled.a`
  color: ${ props => props.color ? props.color : style.COLOR_BODY };
  line-height: ${ props => props.lineHeight ? props.lineHeight : '1.5' };
  padding: ${ props => props.padding ? props.padding : '0.25rem 1rem' };
  font-weight: ${ props => props.fontWeight ? props.fontWeight : 'inherit' };
  position: relative;
  display: block;
  ${ transistion() }

  &:hover {
    opacity: .75;
    text-decoration: none;
  }
`

const Anchor = styled(StyledLink)`
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  display: flex;
`

const Item = ({ router: { pathname }, ...props }) => {
  return (
    <Link prefetch href={ props.linkTo } passHref>
      <Anchor 
        color={ props.fontColor }
        fontWeight={ props.fontWeight }>{ props.name }</Anchor>
    </Link>
  )
}

export default withRouter(Item)