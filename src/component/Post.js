import { styled } from 'styled-components'
import profile from '../img/profile.png'
import { useEffect, useState } from 'react'

const Post= (props)=>{

    const { post, onClick, load, commentCount } = props;
    const contentD= props.contentD

    if(props.postD) console.log(props.postD)
    const imgD= props.imgD

    const imgUrl= 'http://myhero.dothome.co.kr/levelUpLife/board/boardImgs/'
    const [nickname, setNickname] = useState('관리자문의')
    const [level, setLevel] = useState('관리자문의')
    const [content, setContent] = useState('관리자문의')
    const [comment, setComment] = useState('관리자문의')
    const [profileImg, setprofile] = useState(profile)
    const [imgSrc,setImgSrc]= useState('관리자문의')


    const goDetail = () => {
        if (onClick) {
          onClick(post.no);
        }
    }

    useEffect(() => {
        if (props.postD) {
            setNickname(props.postD.nickname);
            setLevel(props.postD.level);
            setContent(props.postD.content);
            setImgSrc(props.postD.imgUrl ? (imgUrl + props.postD.imgUrl):null);
            setComment(props.commentL ? props.commentL : '0');
        } else {
            setNickname(props.post.nickname);
            setLevel(props.post.level);
            setContent(props.post.content);
            setImgSrc(props.post.imgUrl ? (imgUrl + props.post.imgUrl) : null);
            setComment(props.commentCount? props.commentCount : '0')
        }


        if(contentD){
            setContent(contentD);
        }

        if(imgD){
            setImgSrc(imgD)
        }
    }, [props.postD, props.post, props.commentL, contentD, imgD, commentCount]);



   
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
    border: ${props => props.postD == 'postD' ? '0' : '2px solid rgb(142, 103, 0)'};
    border-radius: 10px;
    background-color: white;
    /* background-color: rgb(245, 245, 245); */
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
                    font-size: 16px;
                }
                
                p{
                    color: rgb(250, 110, 110);
                    font-size: 12px
                    
                }

            img{
            margin-left: .5rem;
            border: 1px solid rgb(142, 103, 0);
            border-radius: 20%;
            width: 3.5rem;
        }}
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
            background-color: rgb(226, 221, 202);
            text-align: right;
            margin-right: 1rem;
            padding-bottom: .5rem;
            border-radius: 5px;
            color: rgb(142, 103, 0);
            font-size: 10px;
        }
    }
    
`