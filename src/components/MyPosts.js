import cls from './MyPosts.module.css';
console.log(cls)

let MyPosts = () => {
		return (
				<div className={ cls.myPosts }>
						MyPosts
						<div className="newPost">
								New post
						</div>

						<div className="posts">
								<div className={ cls.item }>post</div>
								<div className={ cls.item }>post</div>
								<div className={ cls.item }>post</div>
								<div className={ cls.item }>post</div>
								<div className={ cls.item }>post</div>
								<div className={ cls.item }>post</div>
						</div>
				</div>
		)
}

export default MyPosts;