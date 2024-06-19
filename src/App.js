import { useDispatch, useSelector } from 'react-redux'
import Communication from './component/Communication'
import './font/font.css'
import { styled, createGlobalStyle  } from 'styled-components'
import { userAction } from './redux/userReducer'
import { useEffect } from 'react'


const App= ()=>{
  const newUser= {
    uid:'error',
    nickname:'관리자 문의',
    level:0,
    hero:0,
  }

  const user= useSelector(state=> state.setUser.user)
  const dispatch= useDispatch()

  //앱에서 유저 정보 받아오기
    useEffect(() => {
      // 앱에서 사용자가 로그인하면 앱에서 웹으로 함수넘겨준거 받기
      window.sendToWeb = function(json) {
        const parsedUser = JSON.parse(json)
        newUser.uid = parsedUser.uid
        newUser.nickname = parsedUser.nickname
        newUser.level = parsedUser.level
        newUser.hero = parsedUser.hero
        dispatch(userAction(newUser))
        alert('유저정보::'+newUser.nickname)
    }
    }, [window.sendToWeb]);

    

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