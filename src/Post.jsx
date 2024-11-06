import PostTitle from "./PostTitle";
import PostBody from "./PostBody";

function Post({title,body})
{
    return(
        <>
       < PostTitle a={title}/>
        <PostBody b={body}/>
        
        </>
        
    )
}
export default Post;
