import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase";
import { useState } from "react";
import { useGlobalContext } from "../context";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";

const LogInPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const { setLoading, toggleAlert, createNewAccount, setCreateNewAccount, signInWithGoogle, setRedirect } =
		useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password) {
			toggleAlert(true, "Please enter email and password", "danger");
			return;
		}
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((UserCredential) => {
				// Signed in

				const user = UserCredential.user;
				toggleAlert(true, "Signed in succesfully!", "success");
				setRedirect(true);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;

				toggleAlert(true, errorMessage, "danger");
			});
		setLoading(false);
	};

	const forgotPassword = () => {
		if (!email) {
			toggleAlert(true, "please enter email address", "danger");
		}
		sendPasswordResetEmail(auth, email)
			.then(() => {
				toggleAlert(true, "Email to reset password sent", "success");
				// Password reset email sent!
				// ..
			})
			.catch((error) => {
				const errorCode = error.code;
				const errorMessage = error.message;
				toggleAlert(true, errorMessage, "danger");

				// ..
			});
	};

	// if (createNewAccount)
	// 	return <CreateAccount setCreateNewAccount={setCreateNewAccount} signUpWithGoogle={signInWithGoogle} />;

	return (
		<>
			<div className='form-container'>
				<h1 className='form-heading'>Log In</h1>

				<form className='form' onSubmit={(e) => handleSubmit(e)}>
					<button className='btn btn-outline-primary ' type='button' onClick={signInWithGoogle}>
						Sign in with <FcGoogle />
						oogle
					</button>

					<hr />
					<p className='form-text'>Or sign in with email and password</p>

					<div className='form-group'>
						<label htmlFor='email'>Email address:</label>
						<input
							type='email'
							className='form-control text-label'
							placeholder='Enter email'
							id='email'
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='form-group'>
						<label htmlFor='pwd'>Password:</label>
						<input
							type='password'
							className='form-control text-label'
							autoComplete='cc-number'
							placeholder='Enter password'
							id='pwd'
							value={password}
							onChange={(e) => setPassword(e.target.value)}
						/>
					</div>

					<button className='btn btn-primary submit-btn' type='submit'>
						Sign in
					</button>
					<hr />
					<span className='form-bottom-text-right'>
						<p className='form-text'>Dont have an account? &nbsp;</p>
						<Link to='/SignIn' className='decoration-none form-text form-bottom-text'>
							Create new Account
						</Link>
					</span>
					<p className='form-text form-bottom-text form-bottom-text-left' onClick={forgotPassword}>
						Forgot Password?
					</p>
				</form>
			</div>
		</>
	);
};

export default LogInPage;
