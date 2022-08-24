import { useState } from "react";
import { createUserWithEmailAndPassword } from "@firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context";

const SignInPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const { auth, setLoading, toggleAlert, signInWithGoogle, setCreateNewAccount, setRedirect } = useGlobalContext();

	const handleSubmit = (e) => {
		e.preventDefault();
		if (!email || !password || !confirmPassword) {
			console.error("enter values");
			return;
		} else if (password !== confirmPassword) {
			console.error("passwords no coinciden");
			return;
		}
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				//const user = userCredential.user;
				setLoading(false);

				toggleAlert(true, "User created correctly!", "success");
				setRedirect(true);
				// ...
			})
			.catch((error) => {
				const errorCode = error.code;
				setLoading(false);
				//const errorMessage = error.message;
				toggleAlert(true, errorCode, "danger");
				// ..
			});
	};

	return (
		<>
			<div className='form-container createAccount-form'>
				<h1 className='form-heading'>Create your Account</h1>

				<form className='form' style={{ height: "29.5rem" }} onSubmit={(e) => handleSubmit(e)}>
					<button className='btn btn-outline-primary ' type='button' onClick={signInWithGoogle}>
						Sign up with <FcGoogle />
						oogle
					</button>

					<hr />
					<p className='form-text'>Or create account with email and password</p>
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
					<div className='form-group'>
						<label htmlFor='pwd'>Confirm Password:</label>
						<input
							type='password'
							className='form-control text-label'
							autoComplete='cc-number'
							placeholder='Confirm password'
							id='confirm_pwd'
							value={confirmPassword}
							onChange={(e) => setConfirmPassword(e.target.value)}
						/>
					</div>
					<button className='btn btn-primary submit-btn' type='submit'>
						Create Account
					</button>
					<hr />

					<span className='form-bottom-text'>
						<p className='form-text'>Already have an account? &nbsp;</p>
						<Link to='LogIn' className='decoration-none form-text form-bottom-text'>
							Log In
						</Link>
					</span>
				</form>
			</div>
		</>
	);
};

export default SignInPage;
