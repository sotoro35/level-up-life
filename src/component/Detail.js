import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Post from "./Post";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { AnimatePresence,motion } from 'framer-motion'
import PostComment from "./PostComment";

const Detail= ()=>{


    const navigate= useNavigate()

    const goList= ()=>{
        navigate(-1)
    }

    const addComment= (event)=>{
        
    }

    const goEdit= ()=>{
     
    }

    const goDelete= ()=>{
       
    }

    const commentList= ()=>{

    }


    return (
        <Container>
            <label onClick={goList}><MdOutlineArrowBackIosNew/> 뒤로</label>

            <div className="contentD">

                <div className="edit">
                <p onClick={goEdit}>수정</p>
                <span>&ensp;/&ensp;</span>
                <p onClick={goDelete}>삭제</p>
                </div> 

                <Post/>

                <div className="commentB" style={{ backgroundColor: 'rgb(237,233,233)' }}>
                <PostComment/>
                <PostComment/>
                <PostComment/>
                <PostComment/>
                <PostComment/>
                <PostComment/>
                <PostComment/>

                </div>

                
                
                
            </div>

            <div className="input">
                <h4>AI 모니터링 봇 사용중</h4>
                <h5>원활한 커뮤니티 활성화를 위해 이미지 및 텍스트를 검증하고 있습니다.<br/> 비방, 음란, 악성 등 커뮤니티에 부합하지 않는 내용은 삭제됩니다.</h5>
                
                <form>
                    <input placeholder="댓글을 입력하세요"></input>
                    <button type="submit">등록</button>
                </form>
            </div>


        </Container>
    )
}

// const PostComment= ()=>{

//     const [profileImg, setProfile] = useState(profile)
//     const [nickName, setnickName] = useState('레벨업라이프')
//     const [level, setLevel] = useState('0')

//     return (
//         <div className="commentD">
//             <div className='PofileD'>
//                         <div>
//                             <img src={profileImg} alt="profile"></img>
//                         </div>

//                         <div className='nameD'>
//                             <h5>{nickName}</h5>
//                             <h6>Lv.{level}</h6>
//                         </div>
//                     </div>
//                     <p>저도 오늘 시작했습니다</p> 

//         </div>
//     )
// }

export default Detail


const modalBack= {
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    width:'100%',
    height:'100%', 
    position:'absolute',
    zIndex: 1}
  
  const boxStyle= {
    padding:10, 
    position: 'relative',
    zIndex: 2}
  
  const modalStyle= {
    position:'fixed', 
    top:0, 
    left:0, 
    right:0, 
    bottom:0, 
    display:'flex', 
    justifyContent:'center', 
    alignItems:'center'}

const Container= styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(237,226,197);
    padding: 1rem 0;
    overflow-y: hidden;

    label{
        display: flex;
        align-items: center;
        margin-left: 1rem;
        color: rgb(142, 103, 0);
        font-size: 20px;
    }

    .edit{
        position: absolute;
        right: 25px;
        top: 25px;

        p{
            display: inline-block;
            color: rgb(136,82,50);
            font-weight: 500;
            font-size: 14px;
            /* border: 1px solid red; */
            padding: .5rem .2rem;
            cursor: pointer;
        }

        span{
            color: rgb(136,82,50);
            font-weight: 500;
            font-size: 14px;
        }

    }

    .content{
        border: 1px solid rgb(142, 103, 0);
    }

    .contentD{
        background-color: rgb(245, 245, 245);
        border: 2px solid rgb(142,103,0);
        border-radius: 7px;
        padding-bottom: 1rem;
        margin: 1rem;
        box-shadow: 1px 3px 5px gray;
        max-height: 70%;
        overflow-y: scroll;
        /* border: 1px solid red; */
    }

    .commentB{
        /* background-color: rgb(237,233,233); */
        /* background-color: ${props => props.comments ? 'rgb(237,233,233)' : 'transparent'}; */
        border-radius: 7px;
        margin: 0 1.5rem;
        padding: .5rem;

        .commentD:not(:first-child) {
        border-top: 1px solid rgb(217, 217, 217);
        }

        /* .commentD{
            width: 100%;
            border: 0;
            margin-bottom: .5rem;      
        } */

        /* .commentD:not(:first-child) {
            border-top: 1px solid rgb(217, 217, 217);
            }

            .PofileD{
            display: flex;
            text-align: left;
            align-items: center;
            box-sizing: border-box;
            padding-top: .7rem;

            img{
                border: 1px solid rgb(142, 103, 0);
                border-radius: 10px;
                width: 2rem;
                margin-right: .5rem;
            }

            h5{
                color: rgb(142, 103, 0);
                font-weight: 100;
            }

            h6{
                color: burlywood;
                font-weight: 100;
            }

            
            } */

     p{
            font-size: 12px;
        }
    }

    .input{
        width: 100%;
        position: fixed;
        bottom: 0px;
        text-align: center;
        box-sizing: border-box;


        h4{
        color: red;
        font-size: 12px;
        text-align: center;
        }

        h5{
            color: rgb(142, 103, 0);
            font-size: 10px;
            font-weight: 200;
            text-align: center;
            margin: .3rem 0;
        }

        form{
            background-color: rgb(142, 103, 0);
            display: flex;
            height: 40px;
            padding: .5rem;

            input{
            box-sizing: border-box;
            border-radius: 7px;
            flex-grow: 1;
            margin-right: auto.5rem;
            box-shadow: 1px 2px 5px gray;
            border: 1px solid rgb(136,82,50);
            text-align: center;
            }

            button{
                width: 20%;
                margin-left: 6px;
                border-radius: 7px;
                background-color: rgb(136,82,50);
                color: white;
                box-shadow: 1px 2px 5px gray;
            }
        }

        
    }

    
`