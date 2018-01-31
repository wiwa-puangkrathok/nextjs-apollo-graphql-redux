import styled from 'styled-components'

import withData from '../lib/withData'
import { hexToRgb } from '../lib/colors'

import * as style from '../styles/variables'
import { clearfix } from '../styles/style-utils'

import App from '../components/app'
import Header from '../components/header'

const HeroWrapper = styled.div`
  width: 100%;
  padding: 30px;
  position: relative;
  ${ clearfix }
`

const Title = styled.span`
  font-size: 36px;
  color: ${ style.COLOR_HEADING }
`

export default withData(() => (
  <App>
    <Header />
    <HeroWrapper>
      <Title>Build your pages with Hi-Five. It’s easy!</Title>
    </HeroWrapper>
  </App>
))