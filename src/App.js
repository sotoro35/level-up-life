import { useDispatch, useSelector } from 'react-redux'
import Communication from './component/Communication'
import './font/font.css'
import { styled, createGlobalStyle  } from 'styled-components'
import { userAction } from './redux/userReducer'


const App= ()=>{

  const user= useSelector(state=> state.setUser.user)
  const dispatch= useDispatch()
  const newUser= {
    uid:'error',
    nickname:'관리자 문의',
    level:0,
    hero:0,
  }

  window.test123= ()=>{
    alert('정보왔어요!!')
  }

  window.sendToWeb = (json)=> {
    const parsedUser = JSON.parse(json)
    newUser.uid = parsedUser.uid  
    newUser.nickname = parsedUser.nickname
    newUser.level = parsedUser.level
    newUser.hero = parsedUser.hero
    dispatch(userAction(newUser))
    alert('유저정보::'+newUser.nickname)
  }

  
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

const FontStyle = createGlobalStyle`
   body {
        line-height: 1;
        font-family: "KCC-Hanbit";
    }
`;