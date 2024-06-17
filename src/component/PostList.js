import { useNavigate } from "react-router-dom";
import Post from "./Post"
import PostComment from "./PostComment";


const PostList= (props)=>{

    const { combinedData, load } = props;
    const [posts, comList] = combinedData;
    const navigate = useNavigate()

    const goDetail = (no) => {
        const post = posts.find(post => post.no === no);
        navigate('/detail/' + no, { state: {post} });
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