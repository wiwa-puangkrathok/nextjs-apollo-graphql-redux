import styled from 'styled-components'
import * as style from '../../styles/variables'

const Text = styled.p`
  font-size: inherit;
  color: ${ style.COLOR_BODY };
  margin-bottom: 1rem;
`

export default ({ children }) => (
  <Text>
    { children }
  </Text>
)