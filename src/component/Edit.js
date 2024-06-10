import { styled } from 'styled-components'

const Edit= ()=>{
    return (
        <Container>
            <img></img>
            <h5>AI 검증 봇 사용중</h5>
            <h6>원활한 커뮤니티 활성화를 위해 이미지 및 텍스트를 검증하고 있습니다. 비방, 음락, 악성 등 커뮤니티에 부합하지 않는 내용은 등록되지 않습니다.</h6>

            <form>
                <input placeholder='내용을 입력해주세요'></input>
                <button>등록</button>
            </form>
        </Container>
    )
}

export default Edit

const Container= styled.div`
    border: 2px solid rgb(142,103,0);
    border-radius: 6px;
    padding: 16px;

    igm{
        border: 1px solid red;
    }

    h5{
        color: red;
    }

    h6{
        color: rgb(142,103,0);
        margin: .2rem 0 1rem 0;
    }

    form{
        display: flex;
        flex-direction: column;
        width: 100%;

        input{
            min-height: 100px;
            border: 0;
            border-radius: 6px;
            background-color: rgb(237, 233, 233);
            color: rgb(228,168,8);
            padding: 1rem;
        }

        button{
            width: 50%;
            margin: 1rem auto;
            padding: .5rem;
            font-size: 1rem;
            border: 2px solid rgb(142,103,0);
            box-shadow: 1px 2px 5px gray;
            font-weight: 600;
            color: rgb(142,103,0);
            border-radius: 6px;


        }
    }
    

`



