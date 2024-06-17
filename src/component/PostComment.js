import { useState } from "react"
import styled from "styled-components"
import profile from '../img/profile.png'

const PostComment= (props)=>{

    const comment = props.comment
    const [profileImg, setProfile] = useState(profile)
    const [nickName, setnickName] = useState(props.comment? comment.nickname : '레벨업라이프')
    const [level, setLevel] = useState(props.comment? comment.level : '0')
    const [content, setContent] = useState(props.comment? comment.content : '레벨업라이프')

    console.log(props.comment)
    //alert(props.comment.nickname)
    

    return (
        <CommentD>
            <div className='PofileD'>
                        <div>
                            <img src={profileImg} alt="profile"></img>
                        </div>

                        <div className='nameD'>
                            <h5>{nickName}</h5>
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

        h5{
            color: rgb(142, 103, 0);
            font-weight: 100;
        }

        h6{
            color: burlywood;
            font-weight: 100;
            }

            
    }

     


`