// import logo from './logo.svg';
import './App.css';

let App = () => {
		return (
				<div className="App">
						
						<div className="header">
								<img src="https://avatars.mds.yandex.net/i?id=642ebf1056ae6850cfaeaa1aa906afd28107ad47-7887771-images-thumbs&n=13"/>
								<div className="header-heading">Header</div>
						</div>
						
						<div className="content">
								
								<div className="content-left">
										Content-left
										<div className="item">Profile</div>
										<div className="item">Message</div>
										<div className="item">News</div>
										<div className="item">Music</div>
										<div className="item">Settings</div>
								</div>
								
								<div className="content-right">

										<img src="https://avatars.mds.yandex.net/i?id=553d099e5fa979c5f394aa361c67bfff65ad9df7-8231357-images-thumbs&n=13"/>
										<div className="avaDescription">
												ava + description
										</div>

										<div className="myPosts">
												MyPosts
												<div className="newPost">
														New post
												</div>

												<div className="posts">
														<div className="post">post</div>
														<div className="post">post</div>
														<div className="post">post</div>
														<div className="post">post</div>
														<div className="post">post</div>
														<div className="post">post</div>
												</div>
										</div>

								</div>
						</div>
						
				</div>
		);
}

export default App;
