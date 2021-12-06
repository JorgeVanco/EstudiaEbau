import { signOut } from "@firebase/auth";
import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
// import { FaBars } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

import { useGlobalContext } from "../context";

const Navbar = () => {
	const { auth, toggleAlert, user, setWantsToGetAccount, setCreateNewAccount } = useGlobalContext();
	const [editName, setEditName] = useState(false);
	const [userName, setUserName] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (userName.length <= 0) {
			setEditName(false);
			return;
		}
		updateProfile(user, {
			displayName: userName,
		})
			.then(() => {
				// Profile updated!
				// ...
				setEditName(false);
			})
			.catch((error) => {
				// An error occurred
				// ...
			});
	};

	return (
		<nav>
			{/* <div className='nav-header'> */}
			{/* <img src={logo} className='logo' alt='logo' /> */}

			<Link to='/' className='decoration-none nav-title'>
				<h1>Home</h1>
			</Link>

			<div className={user ? "links-container links-container-small" : "links-container"}>
				{user ? (
					<button
						className='btn btn-primary nav-btn nav-btn-only'
						onClick={() => {
							signOut(auth);
							toggleAlert(true, "Signed Out", "success");
						}}
					>
						Sign Out
					</button>
				) : (
					<>
						<Link to='/LogIn'>
							<button
								className='btn btn-outline-primary nav-btn'
								onClick={() => {
									setCreateNewAccount(false);
									// toggleAlert(true, "Signed Out", "success");
								}}
							>
								Log In
							</button>
						</Link>
						<Link to='/SignIn' className='decoration-none'>
							<button
								className='btn btn-primary nav-btn'
								onClick={() => {
									setCreateNewAccount(true);
									// 	setWantsToGetAccount("signin");
									// 	// toggleAlert(true, "Signed Out", "success");
								}}
							>
								Sign Up
							</button>
						</Link>
					</>
				)}
			</div>
			{user && (
				<div
					className='username-navbar'
					onClick={() => {
						setEditName(true);
					}}
				>
					{editName ? (
						<form className='username-form' onSubmit={(e) => handleSubmit(e)}>
							{/* <label htmlFor='text'>Email address:</label> */}
							<input
								type='text'
								// className='form-control text-label'
								placeholder={user.displayName}
								id='username'
								value={userName}
								onChange={(e) => setUserName(e.target.value)}
							/>
							<button className='username-form-btn ' type='submit'>
								Aceptar
							</button>
						</form>
					) : (
						<h3>{user.displayName}</h3>
					)}
				</div>
			)}
			{/* </div> */}
		</nav>
	);

	// const [showLinks, setShowLinks] = useState(false);
	// const linksContainerRef = useRef(null);
	// const linksRef = useRef(null);
	// const toggleLinks = () => {
	// 	setShowLinks(!showLinks);
	// 	console.log(showLinks);
	// };

	// useEffect(() => {
	// 	const linksHeight = linksRef.current.getBoundingClientRect().height;
	// 	if (showLinks) {
	// 		linksContainerRef.current.style.height = `${linksHeight}px`;
	// 	} else {
	// 		linksContainerRef.current.style.height = "0px";
	// 	}
	// }, [showLinks]);

	// const links = [
	// 	{ id: 0, url: "tres", text: "q" },
	// 	{ id: 1, url: "tres", text: "sdfgh" },
	// 	{ id: 2, url: "tres", text: "jhgf" },
	// 	{ id: 3, url: "tres", text: "8" },
	// ];

	// return (
	// 	<nav>
	// 		<div className='nav-center'>
	// 			<div className='nav-header'>
	// 				{/* <img src={logo} className='logo' alt='logo' /> */}
	// 				<button className='nav-toggle' onClick={toggleLinks}>
	// 					<FaBars />
	// 				</button>
	// 			</div>
	// 			<div className='links-container' ref={linksContainerRef}>
	// 				<ul className='links' ref={linksRef}>
	// 					{links.map((link) => {
	// 						const { id, url, text } = link;
	// 						return (
	// 							<li key={id}>
	// 								<a href={url}>{text}</a>
	// 							</li>
	// 						);
	// 					})}
	// 				</ul>
	// 			</div>
	// 			{/* <ul className='social-icons'>
	// 				{social.map((socialIcon) => {
	// 					const { id, url, icon } = socialIcon;
	// 					return (
	// 						<li key={id}>
	// 							<a href={url}>{icon}</a>
	// 						</li>
	// 					);
	// 				})}
	// 			</ul> */}
	// 		</div>
	// 	</nav>
	// );

	// return (
	// 	<nav role='navigation' className='navbar navbar-expand-lg navbar-dark bg-dark'>
	// 		<div>
	// 			<a style={{ marginRight: "1rem" }} className='navbar-brand' href='#'>
	// 				Navbar
	// 			</a>

	// 			<button style={{ right: "1rem", position: "absolute" }} className='navbar-toggler' type='button' data-toggle='collapse' data-target='#collapsibleNavbar'>
	// 				<span className='navbar-toggler-icon'></span>
	// 			</button>
	// 		</div>

	// 		<div className='collapse navbar-collapse d-inline-flex' id='collapsibleNavbar'>
	// 			<ul className='navbar-nav'>
	// 				<li className='nav-item'>
	// 					<a className='nav-link' href='#'>
	// 						Link
	// 					</a>
	// 				</li>
	// 				<li className='nav-item'>
	// 					<a className='nav-link' href='#'>
	// 						Link
	// 					</a>
	// 				</li>
	// 				<li className='nav-item'>
	// 					<a className='nav-link' href='#'>
	// 						Link
	// 					</a>
	// 				</li>
	// 				<button
	// 					style={{ right: "1rem", position: "absolute" }}
	// 					className='btn btn-primary sign-out-btn'
	// 					type='button'
	// 					onClick={() => {
	// 						signOut(auth);
	// 						toggleAlert(true, "Signed out", "warning");
	// 					}}
	// 				>
	// 					Sign Out
	// 				</button>
	// 			</ul>
	// 		</div>
	// 	</nav>
	// );
};

export default Navbar;
