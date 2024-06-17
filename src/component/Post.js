import { styled } from 'styled-components'
import profile from '../img/profile.png'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Post= ()=>{

    const [nickname, setNickname] = useState('드래곤입니다')
    const [level, setLevel] = useState('57')
    const [content, setContent] = useState('도감완성')
    const [comment, setComment] = useState('0')

    const navigate= useNavigate()

    const goDetail= ()=>{
        navigate('/detail')
    }

    return (
        <Card onClick={goDetail}>
            <div className='pofile'>
                <div>
                    <img src={profile}></img>
                </div>

                <div className='name'>
                    <h3>aa</h3>
                    <p>Lv.11</p>
                </div>
            </div>

            <div className='content'>
                    <p>aaaa</p>
                    <h5>댓글 : aaaa</h5>
            </div>

            <comment/>
        </Card>
    )
}

export default Post

const Card= styled.div`
    margin: 1rem auto;
    border: 3px solid rgb(142, 103, 0);
    border-radius: 10px;
    background-color: white;
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
                }
                
                p{
                    color: red;
                }

            img{
            border: 3px solid rgb(142, 103, 0);
            border-radius: 10px;
            width: 4rem;
        }

        }
        
    }

    .content{
        box-sizing: content-box;
        background-color: rgb(226, 221, 202);
        margin: .5rem;
        border-radius: 10px;

        p{
            width: 100%;
            border: 0;
            background-color: rgb(226, 221, 202);
            padding: 1rem;
            border-radius: 5px;
            box-sizing: border-box;
            text-align: left;
        }

         h5{
           
        background-color: rgb(226, 221, 202);
        text-align: right;
        margin-right: 1rem;
        padding-bottom: .5rem;
        border-radius: 5px;
        color: rgb(142, 103, 0);
    }
    }

    

    
`