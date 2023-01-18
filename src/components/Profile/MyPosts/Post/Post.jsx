import classes from './Post.module.css'

let Post = (props) => {
		return (
				<div className={classes.item}>
						<img src="https://avatars.mds.yandex.net/i?id=e069c986e61cbefc588e44f49db68f695f6b37f2-8209628-images-thumbs&n=13"/>
						{props.post}
						<div>{props.like}</div>
				</div>
		);
}

export default Post;