import classes from './MyPosts.module.css'
import Post from "./Post/Post";

let MyPosts = () => {
		return (
						<div className={classes.posts}>
								My posts
								<div>
										<textarea></textarea>
										<input type="button" value="Add post"/>
								</div>
								<div>
										<Post post='post 1' like='30'/>
										<Post post='post 2' like='40'/>
										<Post post='post 3' like='1'/>
										<Post post='post 4' like='10'/>
								</div>
						</div>
		);
}

export default MyPosts;