import { MdOutlineArrowBackIosNew } from "react-icons/md";
import Post from "./Post";
import styled from "styled-components";
import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence,motion } from 'framer-motion'
import Write from "./Write";
import { useSelector } from "react-redux";
import PostComment from "./PostComment";
import reportUserIcon from '../img/reportUser.png'

const Detail= ()=>{

    const user= useSelector(state=> state.setUser.user)
    const location = useLocation()
    const post = location.state.post

    const [postD,setPostD]= useState(post)
    const navigate= useNavigate()
    const [visible, setVisible]= useState(false)
    const [contentD,setContentD]= useState('')
    const [imgD,setimgD]= useState('')

    const inputRef= useRef()
    const [addCm,setAddCm] = useState(false)
    const [comments,setComments]= useState(null)
    let [comment,setComment] =useState('')


    // user = 현재 로그인 된 유저 아이디
    // postUser = 현재 선택된 게시물 작성자 아이디
    const userId= user.uid
    const postUser= post.uid
    const postNo = post.no



    const goList= ()=>{
        navigate(-1)
    }

    const addComment= (event)=>{
        // 댓글 등록 함수
        event.preventDefault()
        // comment= inputRef.current.value
        const commentValue = inputRef.current.value;
        // alert(comment)
        //comment에 인풋 값 들어있음

        if(commentValue){
            const url = "http://myhero.dothome.co.kr/levelUpLife/board/CommentAdd.php"

            const data = new FormData()
            data.append("boardNo", postNo)
            data.append("uid", user.uid)
            data.append("nickname", user.nickname)
            data.append("level", user.level)
            data.append("hero", user.hero)
            data.append("content", commentValue)
            
            fetch(url, {
                method: "POST",
                body: data
            }).then(res => res.text())
            .then(text => {
                alert(text)
                setComments(null)
                commentList()
                setAddCm(true)
                setComment('')
                console.log('코멘트등록')
                
            })
            .catch(e => alert(e.message))

        }else alert('내용을 입력해주세요')

        
    }

    const goEdit= ()=>{
        setVisible(true)
        //게시글 수정 함수
    }

    const goDelete= ()=>{
        //게시글 삭제 함수

        const answer = window.confirm("게시물을 삭제합니다")
        
        if(answer){
            const url = "http://myhero.dothome.co.kr/levelUpLife/board/boardDelete.php"

            const data = new FormData()
            data.append("uid", postUser)
            data.append("no", postNo)
        

            fetch(url, {
                method: "POST",
                body: data
            }).then(res => res.text())
            .then(text => {
                alert(text)
                navigate('/')
            })
            .catch(e => alert(e.message))

        }else {}
    }

    const commentList= ()=>{

        const data = new FormData()
        data.append("boardNo", postNo)

        const url = "http://myhero.dothome.co.kr/levelUpLife/board/CommentList.php"

        fetch(url,{
            method: "POST",
            body: data
        }).then(res=>res.json())
        .then(json=>{
            setComments(json)
            console.log('코멘트불러오기'+json)
        })
        .catch(e=>alert('에러:'+e.message))
    }

    const reportUser= ()=>{
        alert('신고되었습니다')
    }

    useEffect(()=>{
        console.log('디테일그려')
        commentList()
        setAddCm(false)
        window.scrollTo(0, 0);
    },[contentD])

    const setFocus= ()=>{
    }


    return (
        <Container onLoad={setFocus}>

            <div className="contentD">
            <label onClick={goList}><MdOutlineArrowBackIosNew/> 뒤로</label>

                { userId != postUser ? <div className="report" onClick={reportUser}>
                    <p style={{color:'red'}}>신고하기</p>
                    {/* <img src={reportUserIcon} alt="deleteIcon" onClick={reportUser}/> */}
                    </div> :
                <div className="edit">
                <p onClick={goEdit}>수정</p>
                <span>&ensp;/&ensp;</span>
                <p onClick={goDelete}>삭제</p>
                </div> 
                 }

                <Post postD={postD} commentL={comments? comments.length : null} contentD={contentD} imgD={imgD}/>

                <div className="aiText">
                    {/* <h4>AI 모니터링 봇 사용중</h4> */}
                    <h5>원활한 커뮤니티 활성화를 위해 <span style={{color:'red'}}>텍스트를 검증</span>하고 있습니다.<br/> <span style={{color:'red'}}>비방, 음란, 악성 등</span> 커뮤니티에 부합하지 않는 내용은 삭제됩니다.</h5>
                </div>

            {

                comments && comments.length > 0 ?
                <div className="commentB" style={{ backgroundColor: 'rgb(237,233,233)' }}>
        
                {
                    comments ? comments.map((comment,i)=>{
                        return <PostComment comment={comment} setComments={setComments} commentList={commentList}key={i}/>
                    }) 
                    : <></>
                }

                </div>

                : <div className="commentB" style={{ backgroundColor: 'transparent' }}/>
            } 
                
            </div>

            <div className="input">    
                <form onSubmit={addComment}>
                    <input ref={inputRef} placeholder="댓글을 입력하세요" onChange={(event)=>{setComment(event.target.value)}} value={comment}></input>
                    <button type="submit">등록</button>
                </form>
            </div>

            <div>
                <AnimatePresence>
                {
                    visible && (
                    <div style={modalStyle}>

                        {/* 배경 */}
                        <motion.div
                        style={modalBack}
                        initial={{opacity:0}} 
                        animate={{opacity:0.6}}
                        onClick={()=>setVisible(false)}
                        exit={{scale:0, y:'100vh'}}
                        />

                        {/* 다이얼로그 */}
                        <motion.div
                        style={boxStyle}
                        inherit={{scale:0, y:'-100vh'}}
                        animate={{scale:1, y:0}}
                        exit={{scale:0, y:'100vh'}}
                        >
                        <Write setVisible={setVisible} edit='edit' postD={postD} setContentD={setContentD} setimgD={setimgD} contentD={contentD} imgD={imgD}/>
                        </motion.div>
                    </div>
                    )
                }
            </AnimatePresence>
            </div>

        </Container>
    )
}


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
    display: flex;
    flex-direction: column;

    .contentD{/* 프로필+댓글 */
        width: 100%;
        background-color: rgb(237,226,197);
        border: 0;
        padding-bottom: 5rem;
        overflow-y: scroll-none;  
    }

    label{
        display: flex;
        width: 20%;
        align-items: center;
        margin-left: 1rem;
        font-size: 20px;
        color: rgb(142, 103, 0);
    }

    .report{
        position: absolute;
        right: 30px;
        top: 25px;
        font-size: 12px;
        width: 50px;
        height: 10px;
    }

    .edit{ /* 수정 + 삭제 */
        position: absolute;
        right: 25px;
        top: 20px;

        p{
            display: inline-block;
            color: rgb(136,82,50);
            font-weight: 500;
            font-size: 14px;
            padding: .5rem .2rem;
            cursor: pointer;
        }

        span{
            color: rgb(136,82,50);
            font-weight: 500;
            font-size: 14px;
        }
    }/* 수정모드 */


    .commentB{ /* 전체댓글 */
        border-radius: 7px;
        padding: .5rem;
        position: relative;
        margin: 0 1rem;
    }

    .aiText{
        h5{
            color: rgb(142, 103, 0);
            font-size: 10px;
            font-weight: 200;
            text-align: center;
            margin: .3rem 0;
        }
    }

    .input{
        width: 100%;
        position: fixed;
        bottom: 0px;
        text-align: center;
        box-sizing: border-box;

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