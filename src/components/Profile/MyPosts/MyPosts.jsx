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
										<Post/>
										<Post/>
										<Post/>
										<Post/>
								</div>
						</div>
		);
}

export default MyPosts;