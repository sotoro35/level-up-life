import { useEffect, useState } from "react"
import styled from "styled-components"
import profile from '../img/profile.png'
import { useSelector } from "react-redux";
import deleteIcon from '../img/delete2.png'
import reportIcon from '../img/report.png'
import reportUserIcon from '../img/reportUser.png'
import profile01 from '../profileImg/profile01.png'
import profile02 from '../profileImg/profile02.png'
import profile03 from '../profileImg/profile03.png'
import profile04 from '../profileImg/profile04.png'
import profile05 from '../profileImg/profile05.png'
import profile06 from '../profileImg/profile06.png'
import profile07 from '../profileImg/profile07.png'
import profile08 from '../profileImg/profile08.png'
import profile09 from '../profileImg/profile09.png'
import profile10 from '../profileImg/profile10.png'
import profile11 from '../profileImg/profile11.png'
import profile12 from '../profileImg/profile12.png'


const PostComment= (props)=>{

    const comment = props.comment

    const user= useSelector(state=> state.setUser.user)
    const userId= user.uid
    const commentId = comment.uid

    const [profileImg, setProfile] = useState(profile)
    const [nickName, setnickName] = useState(props.comment? comment.nickname : '레벨업라이프')
    const [level, setLevel] = useState(props.comment? comment.level : '0')
    const [content, setContent] = useState(props.comment? comment.content : '레벨업라이프')
    console.log(props.comment)

    const setProfileImg = (profileNo) =>{
        //프로필 이미지 설정 
        switch(profileNo){
            case '1' : 
            setProfile(profile01)
            break;

            case '2' : 
            setProfile(profile02)
            break;

            case '3' : 
            setProfile(profile03)
            break;

            case '4' : 
            setProfile(profile04)
            break;

            case '5' : 
            setProfile(profile05)
            break;

            case '6' : 
            setProfile(profile06)
            break;

            case '7' : 
            setProfile(profile07)
            break;

            case '8' : 
            setProfile(profile08)
            break;

            case '9' : 
            setProfile(profile09)
            break;

            case '10' : 
            setProfile(profile10)
            break;

            case '11' : 
            setProfile(profile11)
            break;

            case '12' : 
            setProfile(profile12)
            break;

            default: setProfile(profile12)
        }
    }

    window.deleteComment= ()=>{
       //댓글 삭제 함수    
        const url = "http://myhero.dothome.co.kr/levelUpLife/board/CommentDelete.php"

        const data = new FormData()
        data.append("uid", comment.uid)
        data.append("no", comment.no)
        
        fetch(url, {
            method: "POST",
            body: data
        })
        .then(res => res.text())
        .then(text => {
            alert(text)
            props.setComments(null)
            props.commentList()
        })
        .catch(e => alert(e.message))
    }
    
    

    window.commentReportUser= ()=>{
        alert('너신고')
    }

    useEffect(()=>{
        if(props.comment){
            setProfileImg(comment.hero)
        }

    },[props.comment])
    

    return (
        <CommentD>
            <div className='PofileD'>
                        <div>
                            <img src={profileImg} alt="profile"></img>
                        </div>

                        <div className='nameD'>

                            <div className="deleteCom">
                                <h5>{nickName}</h5>

                                {   userId === commentId ? (
                                    <img src={deleteIcon} alt="deleteIcon" onClick={()=>{alert('댓글을 삭제합니다')}} />
                                ) : (
                                    <img className='reportUserIcon' src={reportIcon} alt="deleteIcon" onClick={()=>{alert('댓글을 신고합니까?')}}/>
                                )}
                            </div>
                            
                            <h6>Lv.{level}</h6>
                        </div>
                    </div>
                    <p>{content}</p> 
        </CommentD>
    )
}

export default PostComment

const CommentD= styled.div`
    width: 100%;
    border: 0;
    margin-bottom: .5rem;      
        
    &:not(:first-child) {
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
            width: 30px;
            height: 30px;
            display: inline-block;
            margin-right: .5rem;
        }

        h6{
            color:rgb(250, 110, 110);
            font-weight: 100;
            font-size: 10px;
            }

        
        .deleteCom{
            display: flex;
            display: flex;
            width: 100%;  /* 수정된 부분: 너비를 100%로 설정 */
            align-items: center;  /* 수정된 부분: 세로 정렬을 중앙으로 설정 */
            justify-content: space-between;  /* 수정된 부분: 공간을 균등하게 분배 */
            h5{
                flex-grow: 1;
                width: 70%;
                color: rgb(142, 103, 0);
                font-weight: 100;
                font-size: 12px;
            }

            img{
                margin-left: 1rem;
                width: 15px;
                height: 15px;
                border: 0;
                position: absolute;
                display: inline-block;
                right: 10px;
            }
        }
    }

    p{
        margin-left: .2rem;
        font-size: 10px;
    }


`