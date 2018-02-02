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

const GridRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-right: -.5rem;
  margin-left: -.5rem;
`

export default withData(() => (
  <App>
    <Head>
      <title>Hi-Five | Creating the frontend for the world</title>
    </Head>

    <Header />
    
    <HeroWrapper>
      <Title>Build your pages with Hi-Five. It’s easy!</Title>
      <GridRow>
        <Grid col={`9`}>
          <Text>As the train rolled into the night, the cowboys discussed horses, ranch life and — perhaps surprisingly — poetry. They were a group of individuals like none the American West had ever seen, a collection of cowboy poets going to Elko for the first official Cowboy Poetry Gathering. Twenty-five years later, the influence of these men and other similarly talented performers continues to be seen and heard on the stages of cowboy poetry’s premier event.</Text>
          <Text>Meeting the cowboys at the Elko train was a man dressed in a cowboy hat and blue jeans. Despite his dress, Hal Cannon was not a cowboy; he was a folklorist. The 1985 Cowboy Poetry Gathering was the culmination of many years of research and field work by Cannon’s team of fellow Western folklorists.</Text>
          <Text>“Cowboy poetry was an underground tradition,” Cannon says. “People recited it around campfires and read it in magazines like Western Horseman. Cowboy poetry is the unpublished guide on how to become a working cowboy.”</Text>
          <Text>Prior to Elko, there hadn’t been an organized effort to bring cowboy poets together, or even to recognize it as a folk genre. The only major push was in the 1970s, when Arizona folklorist Jim Griffith invited Van Holyoak to perform cowboy poetry at the Smithsonian Festival of American Folklife in Washington, D.C.</Text>
          <Text>Holyoak’s performance caught the attention of Bess Lomax Hawes, an administrator for the National Endowment for the Arts. The daughter of John Lomax, the famed musicologist who published the 1910 folk anthology Cowboy Songs and Other Frontier Ballads, Hawes became an enthusiastic supporter of the cowboy-poetry movement. She approved NEA funding for Cannon, Griffith and their colleagues to scour the West in search of cowboy poetry and those who performed it.</Text>
          <Text>“The basis of folklore is that you go out and beat the bush,” Cannon says. “You look for cowboy poetry where it exists. Our job as folklorists is to bring it together from all over the region.</Text>
        </Grid>
        <Grid col={`3`}>
          <Text>
            <img width="100%" src={`/images/image1.jpg`} />
          </Text>
        </Grid>
      </GridRow>
    </HeroWrapper>
  </App>
))