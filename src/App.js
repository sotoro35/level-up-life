import { styled, createGlobalStyle  } from 'styled-components'
import ai1 from './img/ai1.gif'
import './font/font.css'


const App= ()=>{

  const goEdit= ()=>{

  }
  
  return (

    <Container>

      <div className='header'>
        <div>
          <p>AI봇 정찰중..</p>
          <br/>
          <p>악성 글 차단중...</p>
          <p>악성 유저 차단중....</p>
        </div>

        <div>
          <img src={ai1}></img>
        </div>
      </div>

      <div className='floating' onClick={goEdit}>
        <div>
          <p>+</p>
        </div>
      </div>

    </Container>
    
  )
}

export default App

const Container= styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(237,226,197);
  padding: 1rem 0;
  text-align: center;

  .header{
    width: 90%;
    height: 12%;
    margin: 0 auto;
    background-color: rgb(231,217,169);
    border: 3px solid rgb(142,103,0);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 5px gray;

    div{
      padding: 0 1rem;
      width: 50%;

      p{
        color: rgb(244,98,76);
      }
      
      img{
        width: 100%;
      }
    }
  }

  .floating{
    width: 15%;
    height: 6%;
    border: 3px solid rgb(142,103,0);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(237,233,233);
    box-shadow: 1px 2px 5px gray;
    position: fixed;
    bottom: 20px;  
    right: 20px;   


    p{
      font-size: 4rem;
      color: rgb(142,103,0);
    }
  }

`

const FontStyle = createGlobalStyle`
   body {
        line-height: 1;
        font-family: "KCC-Hanbit";
    }
`;