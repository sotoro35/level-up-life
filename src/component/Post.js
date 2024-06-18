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
                    <img src={profile}></img>
                    <h5>댓글 : 0</h5>
            </div>

            <comment/>
        </Card>
    )
}

export default Post

const Card= styled.div`
    margin: 1rem auto;
    border: 2px solid rgb(142, 103, 0);
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
            margin: .8rem 0 0 .5rem;

            h3{
                    color: rgb(142, 103, 0);
                    margin: 0 0 .3rem 0;
                    font-weight: 400;
                    font-size: 14px;
                }
                
                p{
                    color: rgb(250, 110, 110);
                    font-size: 12px
                }

            img{
            margin-left: .5rem;
            border: 1px solid rgb(142, 103, 0);
            border-radius: 20%;
            width: 3rem;
        }

        }
        
    }

    .content{
        box-sizing: content-box;
        background-color: rgb(226, 221, 202);
        margin: .2rem .5rem .5rem .5rem;
        border-radius: 10px;

        img{
            width: 80px;
            height: 80px;
            display: block;
            border: 1px solid gray ;
            border-radius: 7px;
            box-shadow: 1px 1px 3px gray;
            margin-left: .5rem;
            text-align: left;
       	 }

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
        text-align: right;
        margin-right: 1rem;
        padding-bottom: .5rem;
        border-radius: 5px;
        background-color: rgb(226, 221, 202);
        color: rgb(142, 103, 0);
        font-size: 10px;
    }
    }

    

    
`