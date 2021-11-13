
export default function BlogCard({title, description, pos}){

    // state = {
    //     LikePost: true,
    // }

    // likePost = () =>{
    //     this.setState({
    //         LikePost: !this.state.LikePost
    //     })
    // }

    return(
        <div className="post">
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <div>
                <button onClick={()=>alert(pos)}>
                    Like
                </button>
            </div>
        </div>
    );
}
