import { styled } from 'styled-components'
import { useEffect, useState } from 'react'
import profile from '../img/profile.png'
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


const Post= (props)=>{

    const { post, onClick, commentCount } = props;
    const contentD= props.contentD

    if(props.postD) console.log(props.postD)
    const imgD= props.imgD

    const imgUrl= 'http://myhero.dothome.co.kr/levelUpLife/board/boardImgs/'
    const [nickname, setNickname] = useState('관리자문의')
    let [level, setLevel] = useState(0)
    const [content, setContent] = useState('관리자문의')
    const [comment, setComment] = useState('관리자문의')
    let [profileImg, setprofile] = useState(profile04)
    const [imgSrc,setImgSrc]= useState('관리자문의')


    const goDetail = () => {
        if (onClick) {
          onClick(post.no);
        }
    }

    const setProfileImg = (profileNo) =>{
        switch(profileNo){
            case '1' : 
            setprofile(profile01)
            break;

            case '2' : 
            setprofile(profile02)
            break;

            case '3' : 
            setprofile(profile03)
            break;

            case '4' : 
            setprofile(profile04)
            break;

            case '5' : 
            setprofile(profile05)
            break;

            case '6' : 
            setprofile(profile06)
            break;

            case '7' : 
            setprofile(profile07)
            break;

            case '8' : 
            setprofile(profile08)
            break;

            case '9' : 
            setprofile(profile09)
            break;

            case '10' : 
            setprofile(profile10)
            break;

            case '11' : 
            setprofile(profile11)
            break;

            case '12' : 
            setprofile(profile12)
            break;

            default: setprofile(profile12)
        }
    }

    useEffect(() => {
        if (props.postD) {
            setNickname(props.postD.nickname);
            setLevel(props.postD.level);
            setContent(props.postD.content);
            setImgSrc(props.postD.imgUrl ? (imgUrl + props.postD.imgUrl):null);
            setComment(props.commentL ? props.commentL : '0');
            console.log('postD.hero:'+props.postD.hero)
            setProfileImg(props.postD.hero)
        } else {
            setNickname(props.post.nickname);
            setLevel(props.post.level);
            setContent(props.post.content);
            setImgSrc(props.post.imgUrl ? (imgUrl + props.post.imgUrl) : null);
            setComment(props.commentCount? props.commentCount : '0')
            console.log('post.hero:'+props.post.hero)
            setProfileImg(props.post.hero)
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
    margin: 0 auto;
    margin-top: 1rem;
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
            width: 50px;
            height: 50px;
            display: inline-block;
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