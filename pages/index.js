import Head from 'next/head'
import styled from 'styled-components'

import withData from '../lib/withData'
import { hexToRgb } from '../lib/colors'

import * as style from '../styles/variables'
import { clearfix } from '../styles/style-utils'

import App from '../components/app'
import Header from '../components/header'
import Text from '../components/text'
import Grid from '../components/grid'

const HeroWrapper = styled.div`
  width: 100%;
  padding: 30px 15px;
  position: relative;
  ${ clearfix }
`

const Title = styled.span`
  font-size: 36px;
  color: ${ style.COLOR_HEADING }
`

export default withData(() => (
  <App>
    <Head>
      <title>Hi-Five | Creating the frontend for the world</title>
    </Head>

    <Header />
    <HeroWrapper>
      <Title>Build your pages with Hi-Five. It’s easy!</Title>
      <Text>Capcito is on a mission to disrupt the financial services market in its native Sweden. And we’ve been able to help by creating a SaaS platform with which the company can receive, assess, and fulfill loan applications in real time.</Text>
      <Grid col={`4`}>aaa</Grid>
    </HeroWrapper>
  </App>
))