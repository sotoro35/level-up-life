import { styled } from 'styled-components'
import profile from '../img/profile.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Post= (props)=>{

    const [nickname, setNickname] = useState('드래곤입니다')
    const [level, setLevel] = useState('57')
    const [content, setContent] = useState('도감완성')
    const [comment, setComment] = useState('2')
    const [profileImg, setprofile] = useState(profile)

    const navigate= useNavigate()

    const goDetail= (no)=>{
        navigate('/detail/'+no)
        // navigate('/detail')
    }

    return (
        <Card {...props} onClick={goDetail}>
            <div className='pofile'>
                <div>
                    <img src={profileImg}></img>
                </div>

                <div className='name'>
                    <h3>{nickname}</h3>
                    <p>Lv.{level}</p>
                </div>
            </div>

            <div className='content'>
                    <p>{content}</p>
                    <h5>댓글 : {comment}</h5>
            </div>
        </Card>
    )
}

export default Post

const Card= styled.div`
    margin: 1rem auto;
    /* background-color: ${props => props.current ? 'darkgray' : 'dimgray'}; */
    border: ${props => props.postD == 'postD' ? '0' : '3px solid rgb(142, 103, 0)'};
    border-radius: 10px;
    background-color: rgb(245, 245, 245);
    width: 90%;
    box-sizing: border-box;

    .pofile{
        display: flex;
        text-align: left;
        align-items: center;
        box-sizing: border-box;

        div{
            margin: 1rem .5rem 0;

            h3{
                    color: rgb(142, 103, 0);
                    margin: 0 0 .3rem 0;
                    font-weight: 100;
                    font-size: 16px;
                }
                
                p{
                    color: burlywood;
                    font-size: 14px;
                    
                }

            img{
            border: 2px solid rgb(142, 103, 0);
            border-radius: 10px;
            width: 4rem;
        }

        }
        
    }

    .content{
        box-sizing: content-box;
        background-color: rgb(226, 221, 202);
        margin: .5rem;
        border-radius: 7px;

        p{
            width: 100%;
            border: 0;
            background-color: rgb(226, 221, 202);
            padding: 1rem;
            border-radius: 5px;
            box-sizing: border-box;
            text-align: left;
            font-size: 14px;
        }

         h5{
           
        background-color: rgb(226, 221, 202);
        text-align: right;
        margin-right: 1rem;
        padding-bottom: .5rem;
        border-radius: 5px;
        color: rgb(142, 103, 0);
        font-size: 12px;
    }
    }

    

    
`