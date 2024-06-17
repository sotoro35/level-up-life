import styled from "styled-components"
import profile from '../img/profile.png'
import icon_pet from '../img/icon_pet.png'


const PostComment= ()=>{

    const deleteComment= ()=>{
        const answer = window.confirm("댓글을 삭제합니다")
        
    }

 

    return (
        <CommentD>
            <div className='PofileD'>
                        <div>
                            <img src={profile} alt="profile"></img>
                        </div>

                        <div className='nameD'>

                            <div className="deleteCom">
                                <h5>닉네임</h5>
                                <img src={icon_pet} alt="deleteIcon" onClick={deleteComment}/>

                            </div>
                            
                            <h6>Lv.30</h6>
                        </div>
                    </div>
                    <p>안녕하세요!</p> 
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

    p{
        margin-left: .2rem;
    }

     


`