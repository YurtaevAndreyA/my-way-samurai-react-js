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
								<Post message="One One One" likes="15"/>
								<Post message="Two Two Two" likes="20"/>
								<Post message="Three Three" likes="1"/>

						</div>
				</div>
)
}

export default MyPosts;