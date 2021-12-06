import "./App.css";
import React, { useEffect, useState } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useGlobalContext } from "./context";
import "./firebase";
import { sendEmailVerification } from "firebase/auth";
import Loading from "./components/Loading";
import SignIn from "./components/SignIn";
import Alert from "./components/Alert";
import MainContent from "./components/MainContent";
import QuestionPage from "./components/QuestionPage";
import RankedPage from "./components/RankedPage";
import LogInPage from "./components/LogInPage";
import SignInPage from "./components/SignInPage";

function App() {
	const { auth, user, setLoading, loading, alert, toggleAlert, data, redirect, setRedirect } = useGlobalContext();
	const [email, setEmail] = useState("");
	const [isVerified, setIsVerified] = useState(true);

	useEffect(() => {
		//checkForLogin(email, setEmail);
		setLoading(true);
		if (user) {
			toggleAlert(true, "Logged in", "success");
			setEmail(user.email);
			if (user.displayName === null || user.displayName.length <= 0) user.displayName = "No Username";
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
