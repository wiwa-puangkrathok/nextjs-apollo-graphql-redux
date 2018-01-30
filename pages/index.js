import styled from 'styled-components'
import withData from '../lib/withData'
import * as style from '../styles/variables'
import { hexToRgb } from '../lib/colors'

import App from '../components/app'
import Header from '../components/header'

export default withData(() => (
  <App>
    <Header />
  </App>
))