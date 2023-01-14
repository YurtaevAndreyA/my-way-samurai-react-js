import MyPosts from "../MyPosts/MyPosts.jsx";
import AvaDescription from "../AvaDescription/AvaDescription.jsx";
import cls from './ContentRight.module.css';

let ContentRight = () => {
		return (
				<div className={ cls.contentRight }>
						<img src="https://avatars.mds.yandex.net/i?id=553d099e5fa979c5f394aa361c67bfff65ad9df7-8231357-images-thumbs&n=13"/>

						<AvaDescription/>
						<MyPosts/>
				</div>
		)
}

export default ContentRight;