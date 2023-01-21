// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header/Header.jsx";
import Navbar from "./components/Navbar/Navbar.jsx";
import Profile from "./components/Profile/Profile.jsx";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";


let App = () => {
		return (
				<Router>
						<div className="app-wrapper">
								<Header/>
								<main>
										<Navbar/>
										<div className="app-wrapper-content">
												<Routes>
														<Route path='/profile' element={<Profile/>}></Route>
														<Route path='/dialogs' element={<Dialogs/>}></Route>
												</Routes>
										</div>

								</main>
						</div>
				</Router>
		);
}


export default App;
