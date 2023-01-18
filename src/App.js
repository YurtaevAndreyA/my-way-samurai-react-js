// import logo from './logo.svg';
import './App.css';


let App = () => {
		return (
				<div className="app-wrapper">
						<header className='header'>
								<img
										src='https://avatars.mds.yandex.net/i?id=51713017d31a4b9bc1e2d35585b7ee742b5126c5-7757653-images-thumbs&n=13'/>
						</header>
						<main>
								<nav className='nav'>
										<div>
												<a>Profile</a>
										</div>
										<div>
												<a>Messages</a>
										</div>
										<div>
												<a>News</a>
										</div>
										<div>
												<a>Music</a>
										</div>
										<div>
												<a>Settings</a>
										</div>
								</nav>
								<div className='content'>
										<div>
												<img
														src='https://avatars.mds.yandex.net/i?id=b4cfb9f93cd8305a618b6058056eea509961b5c7-8196573-images-thumbs&n=13'/>
										</div>
										<div>
												ava + description
										</div>
										<div>
												My posts
												<div>
														New post
												</div>
												<div>
														<div>
																post 1
														</div>
														<div>
																post 2
														</div>
												</div>
										</div>
								</div>
						</main>
				</div>
		);
}


export default App;
