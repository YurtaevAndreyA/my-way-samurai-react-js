import Post from '../Post/Post.jsx'
import cls from './MyPosts.module.css';

let MyPosts = () => {
		return (
				<div className={ cls.myPosts }>
						MyPosts
						<div className="newPost">
								<textarea></textarea>
								<input type="button" value="Add post"/>
						</div>

						<div className={ cls.posts }>
								<Post/>
								<Post/>
								<Post/>

						</div>
				</div>
)
}

export default MyPosts;