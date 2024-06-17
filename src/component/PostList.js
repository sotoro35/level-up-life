import { useNavigate } from "react-router-dom";
import Post from "./Post"


const PostList= (props)=>{

    const { posts } = props
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
                    return <Post post={post} key={post.no} onClick={goDetail} ></Post>
                })
            }
        </div>

    )
}

export default PostList