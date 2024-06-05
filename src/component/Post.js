import { styled } from 'styled-components'
import profile from '../img/profile.png'

const Post= ()=>{
    return (
        <Card>
            <div className="pofile">
                <div>
                    <img src={profile}></img>
                </div>

                <div className='name'>
                    <h2>닉네임입니다</h2>
                    <p>Lv.57</p>
                </div>
            </div>
        </Card>
    )
}

export default Post

const Card= styled.div`
    margin: 1rem auto;
    border: 2px solid rgb(142, 103, 0);
    border-radius: 10px;
    width: 90%;



    .pofile{
        div{
            display: flex;
            flex-direction: row;
            border: 1px solid red;
        }

        img{
            border: 3px solid rgb(142, 103, 0);
            border-radius: 10px;
            width: 15%;
        }

        .name{
            flex-grow: 1;
            text-align: left;
        }


    }

`