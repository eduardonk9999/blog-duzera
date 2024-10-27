interface Post {
    id: number;
    title: string;
    content: string;
  }
  

const Post: React.FC = () => {


    return(
        <>
            <h1>titulo do post</h1>
            <p>Conteudinho maroto</p>
        </>
    )
}

export default Post;