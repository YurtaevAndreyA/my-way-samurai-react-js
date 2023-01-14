import cls from './Post.module.css';

let Post = (props) => {
		console.log(props)
		//тут мы находимся за пределами JSX - тут обычный JS, значит "{}" - не нужны
		return (
				<div className={cls.item}>
						<img
								src='https://avatars.mds.yandex.net/i?id=50eb9247866a1faff49910eb95b61850dc0c9fd7-7554713-images-thumbs&n=13'/>
						{/*А тут JSX - "{}" - нужны !!!*/}
						{/*И видно, что комментарии по разному выделяются*/}
						{props.message}
						<div>
								likes - {props.likes}
						</div>
				</div>
		)
}

export default Post;