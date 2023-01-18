import classes from './Profile.module.css'
import MyPosts from "./MyPosts/MyPosts";

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
						<MyPosts/>
				</div>
		);
}

export default Profile;