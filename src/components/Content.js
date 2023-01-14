import ContentLeft from "./ContentLeft";
import ContentRight from "./ContentRight";
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