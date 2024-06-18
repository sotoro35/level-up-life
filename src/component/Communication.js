import { styled, createGlobalStyle  } from 'styled-components'
import { useNavigate } from 'react-router-dom'
import ai1 from '../img/ai1.gif'
import PostList from './PostList'


const Communication= ()=>{
    
  const navigate = useNavigate();

  const goEdit = () => {
    navigate('/edit');
  };
    
    return (
  
      <Container>
  
        <div className='header'>
          <div>
            <p>AI봇 정찰중..</p>
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

        <PostList></PostList>
  
      </Container>
    )  
}

export default Communication

const Container= styled.div`
  width: 100%;
  height: 100%;
  background-color: rgb(237,226,197);
  padding: 1rem 0;
  text-align: center;

  .header{
    width: 90%;
    height: 10%;
    margin: 0 auto;
    background-color: rgb(231,217,169);
    border: 2px solid rgb(142,103,0);
    border-radius: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 1px 2px 5px gray;
    overflow: hidden;

    div{
      padding: 0 1rem;
      width: 50%;

      p{
        color: rgb(244,98,76);
        font-size: 12px;
      }
      
      img{
        width: 120px;
      }
    }
  }

  .floating{
    width: 10%;
    height: 5%;
    border: 3px solid rgb(142,103,0);
    border-radius: 25%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgb(237,233,233);
    box-shadow: 1px 2px 5px gray;
    position: fixed;
    bottom: 10px;  
    right: 10px;  
    cursor: pointer;


    p{
      font-size: 3rem;
      color: rgb(142,103,0);
    }
  }

`

