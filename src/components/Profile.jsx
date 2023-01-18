import classes from './Profile.module.css'

let Profile = () => {
		return (
				<div className={classes.content}>
						<div>
								<img
										src='https://avatars.mds.yandex.net/i?id=b4cfb9f93cd8305a618b6058056eea509961b5c7-8196573-images-thumbs&n=13'/>
						</div>
						<div>
								ava + description
						</div>
						<div className={classes.posts}>
								My posts
								<div>
										New post
								</div>
								<div>
										<div className={classes.item}>
												post 1
										</div>
										<div>
												post 2
										</div>
								</div>
						</div>
				</div>
		);
}

export default Profile;