import { MdOutlineArrowBackIosNew } from "react-icons/md";
import profile from '../img/profile.png'
import Post from "./Post";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Detail= ()=>{

    const navigate= useNavigate()
    const inputRef= useRef()

    const goList= ()=>{
        navigate('/')
    }

    const addComment= (event)=>{
        event.preventDefault()
        const comment= inputRef.current.value
        // alert(comment)

        //comment에 인풋 값 들어있음
        // 서버작업 해주세요

        inputRef.current.value=''

    }

    return (
        <Container>
            <label onClick={goList}><MdOutlineArrowBackIosNew/> 뒤로</label>

            <div className="contentD">
                <Post postD="postD"/>

                <div className="commentB">
                
                    <PostComment/>
                    <PostComment/>

            </div>
                
            </div>

            <div className="input">
                <h4>AI 검증 봇 사용중</h4>
                <h5>원활한 커뮤니티 활성화를 위해 이미지 및 텍스트를 검증하고 있습니다.<br/> 비방, 음란, 악성 등 커뮤니티에 부합하지 않는 내용은 등록되지 않습니다.</h5>
                
                <form onSubmit={addComment}>
                    <input ref={inputRef} placeholder="댓글을 입력하세요"></input>
                    <button type="submit">등록</button>
                </form>

            </div>

        </Container>
    )
}

const PostComment= ()=>{

    const [profileImg, setProfile] = useState(profile)
    const [nickName, setnickName] = useState('레벨업라이프')
    const [level, setLevel] = useState('0')

    return (
        <div className="commentD">
            <div className='PofileD'>
                        <div>
                            <img src={profileImg}></img>
                        </div>

                        <div className='nameD'>
                            <h5>{nickName}</h5>
                            <h6>Lv.{level}</h6>
                        </div>
                    </div>
                    <p>저도 오늘 시작했습니다</p> 

        </div>
    )
}

export default Detail

const Container= styled.div`
    margin: 0;
    width: 100%;
    height: 100%;
    background-color: rgb(237,226,197);
    padding: 1rem 0;

    label{
        display: flex;
        align-items: center;
        margin-left: 1rem;
        color: rgb(142, 103, 0);
        font-size: 20px;
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
        /* border: 1px solid red; */
    }

    .commentB{
        background-color: rgb(237,233,233);
        border-radius: 7px;
        margin: 0 1.5rem;
        padding: .5rem;

        .commentD{
            width: 100%;
            border: 0;
            margin-bottom: .5rem;      
        }

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