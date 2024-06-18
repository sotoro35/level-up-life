import { useNavigate } from "react-router-dom";
import Post from "./Post"


const PostList= (props)=>{

    const { combinedData, load } = props;
    const [posts, comList] = combinedData;
    const navigate = useNavigate()

    const goDetail = (no) => {
        const post = posts.find(post => post.no === no);
        navigate('/detail/' + no, { state: {post} });
        // 두번째 파라미터로 여러가지를 보낼 수 있다. 그 중 state, replace 등.. 여러가지가 있다.
        // 식별자로 state를 작성하고, 그 안에 객체 또는 배열을 넣을 수 있다.
        // post를 객체로 감싼 이유는 state안에 여러가지가 들어있을 수 있어서 객체로 묶어서 보낸다. post:post 이런식으로 키/값 으로 써야하지만 키와 값이 같으므로 post로 써도 됨.
        // 값이 1개일경우 객체로 감싸지 않아도 되는데 그럴경우 state에 대입이 되는것. state(키) : post(값)이 되므로
        // 불러올때 location.state.nickname 이런식으로 하면 됨.
        //alert(post.nickname)
      }
      
    const sortedPosts = [...posts].sort((a, b) => b.no - a.no);


    return (
        <div>
            {
                sortedPosts.map((post)=>{
                    const commentCount = comList ? comList.filter(comment => comment.boardNo === post.no).length : 0;
                    return <Post post={post} key={post.no} onClick={goDetail} load={load} commentCount={commentCount} ></Post>
                })     
            }
            
        </div>

    )
}

export default PostList