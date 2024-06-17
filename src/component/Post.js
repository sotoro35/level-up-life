import { styled } from 'styled-components'
import profile from '../img/profile.png'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Post= (props)=>{

    const navigate= useNavigate()

    if(props.postD){
        //alert('postD왔어요')
        const postD= props.postD
        console.log(props.postD)
        //alert(props.postD[0].no)
    }

    const postD= props.postD
    const commentL= props.commentL

    // if(commentL){
    //     alert('commentL왔엉'+props.commentL+'개')
    // }

    

    // const post = props.post
    const { post, onClick } = props;
    const imgUrl= 'http://myhero.dothome.co.kr/levelUpLife/board/boardImgs/'
    const [nickname, setNickname] = useState(props.postD? postD[0].nickname : post.nickname)
    const [level, setLevel] = useState( props.postD? postD[0].level : post.level)
    const [content, setContent] = useState( props.postD? postD[0].content : post.content)
    const [comment, setComment] = useState(props.commentL? props.commentL+'개' : '0')
    const [profileImg, setprofile] = useState(profile)
    const [imgSrc,setImgSrc]= useState(props.postD && props.postD[0].imgUrl ? (imgUrl + props.postD[0].imgUrl) :
                                        props.post && props.post.imgUrl ? (imgUrl + props.post.imgUrl) : null)


    


    const goDetail = () => {
        if (onClick) {
          onClick(post.no);
        }
    }


   
    return (
        <Card {...props} onClick={goDetail}>
            
            <div className='pofile'>
                <div>
                    <img src={profileImg} alt='profile'></img>
                </div>

                <div className='name'>
                    <h3>{nickname}</h3>
                    <p>Lv.{level}</p>
                </div>
            </div>

            <div className='content'>
                    <p>{content}</p>
                    {imgSrc ? <img src={ imgSrc } alt='postImg'></img> :<></> }
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
            width: 3rem;
        }

        }
        
    }

    .content{
        box-sizing: content-box;
        background-color: rgb(226, 221, 202);
        margin: .5rem;
        border-radius: 7px;
        text-align: left;

        img{
            width: 80px;
            height: 80px;
            border: 1px solid gray ;
            border-radius: 7px;
            box-shadow: 1px 1px 3px gray;
            margin-left: .5rem;
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