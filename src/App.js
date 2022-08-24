import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";
import "./firebase";
import { sendEmailVerification, updateProfile } from "firebase/auth";

import Loading from "./components/Loading";

import Alert from "./components/Alert";
import MainContent from "./components/MainContent";
import QuestionPage from "./components/QuestionPage";
import RankedPage from "./components/RankedPage";
import LogInPage from "./components/LogInPage";
import SignInPage from "./components/SignInPage";
import AddQuestionsPage from "./components/AddQuestionsPage";
import axios from "axios";
import { URL_FOR_API } from "./api_var";

function App() {
	const { auth, user, setLoading, loading, alert, toggleAlert, data, redirect, setRedirect } = useGlobalContext();
	const [email, setEmail] = useState("");
	const [isVerified, setIsVerified] = useState(true);

	useEffect(async () => {
		//checkForLogin(email, setEmail);
		// setLoading(true);
		if (user) {
			toggleAlert(true, "Logged in", "success");
			setEmail(user.email);
			let is_user_in_db = false;
			const users_response = await axios.get(URL_FOR_API + "/users");
			for (let user_in_db of users_response.data) {
				if (user_in_db.email === user.email) {
					is_user_in_db = true;
				}
			}

			if (!is_user_in_db) {
				if (user.displayName === null || user.displayName.length <= 0) {
					let response = await axios.post(URL_FOR_API + "/users", {
						email: user.email,
						username: user.email.slice(0, user.email.indexOf("@")),
					});
					if (response.data.hasOwnProperty("Error")) {
						let new_username;
						while (response.data.hasOwnProperty("Error")) {
							new_username = user.email.slice(0, user.email.indexOf("@")) + Math.floor(Math.random() * 10000).toString();
							response = await axios.post(URL_FOR_API + "/users", {
								email: user.email,
								username: new_username,
							});
						}
						updateProfile(user, {
							displayName: new_username,
						});
					} else {
						updateProfile(user, {
							displayName: user.email.slice(0, user.email.indexOf("@")),
						});
					}
				} else {
					const response = await axios.post(URL_FOR_API + "/users", {
						email: user.email,
						username: user.email.slice(0, user.email.indexOf("@")),
					});
				}
			}

			if (!user.emailVerified) {
				sendEmailVerification(auth.currentUser).then(() => {
					// Email verification sent!
					// ...
					setIsVerified(false);
					toggleAlert(true, "Email verification sent", "success");
				});
			}
		}
	}, [user, auth.currentUser]);

	if (redirect) {
		setRedirect(false);
		return <Redirect to='/' />;
	}
	if (loading) {
		return <Loading />;
	}

	// if (!isVerified) {
	// 	return (
	// 		<>
	// 			{alert.show && <Alert {...alert} />}
	// 			<h1>You must verify your email</h1>
	// 		</>
	// 	);
	// }

	return (
		<>
			<Navbar />
			{alert.show && <Alert {...alert} />}

			<Switch>
				<Route exact path='/'>
					<MainContent />
				</Route>

				<Route path='/SignIn'>
					<SignInPage />
				</Route>
				<Route path='/LogIn'>
					<LogInPage />
				</Route>
				<Route exact path='/add-questions'>
					<AddQuestionsPage />
				</Route>

				<Route path='/ranked'>
					<RankedPage />
				</Route>
				<Route path='/loading'>
					<Loading />
				</Route>
				{data.map((subject, index) => {
					return (
						<Route path={`/${subject.name}`} key={index}>
							<QuestionPage name={subject.name} />
						</Route>
					);
				})}

				<Route path='*'>
					<h1>Error page</h1>
				</Route>
			</Switch>
			{/* {user ? (
				<>
					<Navbar />
					{alert.show && <Alert {...alert} />}
					<Switch>
						<Route exact path='/'>
							<MainContent />
						</Route>
						<Route path='loading'>
							<Loading />
						</Route>
						{data.map((subject, index) => {
							return (
								<Route path={`/${subject.name}`} key={index}>
									<QuestionPage name={subject.name} />
								</Route>
							);
						})}
						<Route path='*'>
							<h1>Error page</h1>
						</Route>
					</Switch>
				</>
			) : (
				<>
					{alert.show && <Alert {...alert} />}
					<SignIn />
				</>
			)} */}
		</>
	);
}

export default App;
