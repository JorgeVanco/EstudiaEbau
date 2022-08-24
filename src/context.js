import React, { useContext, createContext, useState, useEffect, useCallback } from "react";
import { auth, db } from "./firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
// import data from "./data";
import { doc, deleteDoc, setDoc, query, orderBy, limit, collection, getDocs, addDoc } from "firebase/firestore";
import axios from "axios";
import { URL_FOR_API } from "./api_var";

const AppContext = createContext();

const AppProvider = ({ children }) => {
	const [user] = useAuthState(auth);
	const [loading, setLoading] = useState(true);
	const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
	const [isSidebarOpen, setIsSidebarOpen] = useState(false);
	const [contentToAskFor, setContentToAskFor] = useState([]);
	const [wantsToGetAccount, setWantsToGetAccount] = useState(null);
	const [createNewAccount, setCreateNewAccount] = useState(false);
	const [redirect, setRedirect] = useState(false);
	const [maxScore, setMaxScore] = useState(0);
	const [docDb, setDocDb] = useState(null);
	const [topFive, setTopFive] = useState([]);
	const [idList, setIdList] = useState([]);
	const [usersRef, setUsersRef] = useState(collection(db, "puntuacion-usuarios"));
	const [data, setData] = useState([]);

	async function getData() {
		setLoading(true);
		try {
			const response = await axios.get(URL_FOR_API + "/data");
			setData(response.data);
		} catch (error) {
			console.error(error);
			setLoading(false);
		}
		setLoading(false);
	}

	useEffect(async () => {
		getData();
	}, []);

	useEffect(() => {
		getDataBase();
	}, [user]);

	const getDataBase = async () => {
		// const docRef = doc(db, "puntuacion-usuarios", "score");

		// const usersRef = collection(db, "puntuacion-usuarios");
		setLoading(true);
		const q = query(usersRef, orderBy("score"), limit(5));
		let list = [];
		let temporaryIdList = [];

		if (q) {
			const querySnapshot = await getDocs(q);
			querySnapshot.forEach((doc) => {
				// doc.data() is never undefined for query doc snapshots
				list.push(doc.data());
				temporaryIdList.push(doc.id);
			});

			list.forEach((user) => (user.score = -user.score));
			setTopFive([...list]);
			setIdList([...temporaryIdList]);
			if (list.length > 0) {
				setMaxScore(list[0].score);
			} else {
				setMaxScore(0);
			}
		}
		setLoading(false);
	};

	const closeSidebar = () => setIsSidebarOpen(false);

	const openSidebar = () => setIsSidebarOpen(true);

	const toggleAlert = useCallback((show = false, msg = "", type = "") => {
		setAlert({ show, msg, type });
	}, []);

	const signInWithGoogle = () => {
		const provider = new GoogleAuthProvider();
		setLoading(true);
		signInWithPopup(auth, provider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential = GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				//const user1 = result.user;
				// console.log(token);
				setLoading(false);

				toggleAlert(true, "Signed in succesfully!", "success");
				setRedirect(true);
				// ...
			})
			.catch((error) => {
				// Handle Errors here.
				const errorCode = error.code;
				const errorMessage = error.message;
				// The email of the user's account used.
				const email = error.email;
				// The AuthCredential type that was used.
				const credential = GoogleAuthProvider.credentialFromError(error);
				setLoading(false);
				// ...
				toggleAlert(true, errorMessage, "danger");
			});
	};

	const resetDataBase = async (newMaxScore) => {
		await deleteDoc(docDb);
		await setDoc(docDb, {
			score: newMaxScore,
		});
	};

	const addMyTopScore = async (myScore) => {
		await addDoc(usersRef, {
			username: user.displayName,
			score: -myScore,
		});
		const minScore = topFive[topFive.length - 1].score;
		await deleteDoc(doc(db, "puntiacion-usuarios", toString(idList[idList.length - 1])));
	};

	return (
		<AppContext.Provider
			value={{
				auth,
				user,
				loading,
				setLoading,
				alert,
				toggleAlert,
				data,
				closeSidebar,
				openSidebar,
				isSidebarOpen,
				contentToAskFor,
				setContentToAskFor,
				setWantsToGetAccount,
				wantsToGetAccount,
				createNewAccount,
				setCreateNewAccount,
				redirect,
				setRedirect,
				signInWithGoogle,
				maxScore,
				resetDataBase,
				getDataBase,
				topFive,
				addMyTopScore,
			}}
		>
			{children}
		</AppContext.Provider>
	);
};

export const useGlobalContext = () => {
	return useContext(AppContext);
};

export default AppProvider;
