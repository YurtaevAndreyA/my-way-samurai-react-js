import cls from './ContentLeft.module.css';

let ContentLeft = () => {
		return (
				<div className={cls.contentLeft}>
						Content-left
						<div className={cls.item}>Profile</div>
						<div className={cls.item}>Message</div>
						<div className={cls.item}>News</div>
						<div className={cls.item}>Music</div>
						<div className={cls.item}>Settings</div>
				</div>
		)
}

export default ContentLeft;