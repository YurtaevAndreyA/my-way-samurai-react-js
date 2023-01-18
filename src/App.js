// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";


let App = () => {
		return (
				<div className="app-wrapper">
						<Header/>
						<main>
								<Navbar/>
								<Profile/>
						</main>
				</div>
		);
}


export default App;
