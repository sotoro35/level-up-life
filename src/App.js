import Communication from './component/Communication'
import './font/font.css'
import { styled  } from 'styled-components'

const App= ()=>{

  return (
    <Container>
      <Communication/>
    </Container>
  )
}

export default App

const Container= styled.div`
  width: 100%;
  height: 100%;
`

