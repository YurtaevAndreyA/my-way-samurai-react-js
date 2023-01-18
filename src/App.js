// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./components/Profile";


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
