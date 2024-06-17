import { useEffect, useState } from "react"
import styled from "styled-components"
import profile from '../img/profile.png'
import { useSelector } from "react-redux";
import deleteIcon from '../img/delete.png'


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
    //alert(props.comment.nickname)

    const deleteComment= ()=>{
        const answer = window.confirm("댓글을 삭제합니다")
        
        if(answer){
            const url = "http://myhero.dothome.co.kr/levelUpLife/board/CommentDelete.php"

            const data = new FormData()
            data.append("uid", comment.uid)
            data.append("no", comment.no)
        

            fetch(url, {
                method: "POST",
                body: data
            }).then(res => res.text())
            .then(text => {
                alert(text)
                props.setComments(null)
                props.commentList()
            })
            .catch(e => alert(e.message))

        }else {}
    }

    // useEffect(()=>{


    // },[props.comment])
    

    return (
        <CommentD>
            <div className='PofileD'>
                        <div>
                            <img src={profileImg} alt="profile"></img>
                        </div>

                        <div className='nameD'>

                            <div className="deleteCom">
                                <h5>{nickName}</h5>
                                {
                                    userId == commentId ? <img src={deleteIcon} alt="deleteIcon" onClick={deleteComment}/> : <></>
                                }
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
        
    .commentD:not(:first-child) {
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

        h6{
            color: burlywood;
            font-weight: 100;
            }

        
        .deleteCom{
            display: flex;
            h5{
                flex-grow: 1;
                width: 70%;
                color: rgb(142, 103, 0);
                font-weight: 100;
            }

            img{
                margin-left: 1rem;
                width: 15px;
                border: 0;
                
            }
        }

            
    }

     


`