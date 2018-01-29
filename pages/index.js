import styled from 'styled-components'
import withData from '../lib/withData'
import * as style from '../styles/variables'
import { hexToRgb } from '../styles/function'

import App from '../components/app'
import Header from '../components/header'

export default withData(() => (
  <App>
    <Header />
    {
      console.log('aa', hexToRgb('#4183c4'))
    }
  </App>
))