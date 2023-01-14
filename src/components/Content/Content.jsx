import ContentLeft from "../ContentLeft/ContentLeft.jsx";
import ContentRight from "../ContentRight/ContentRight.jsx";
import cls from './Content.module.css';

let Content = () => {
		return (
				<div className={ cls.content }>
						<ContentLeft/>
						<ContentRight/>
				</div>
		)
}

export default Content;