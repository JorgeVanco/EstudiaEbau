import { useEffect, useState } from "react";
import { useGlobalContext } from "../context";
import CongratulationsPage from "./CongratulationsPage";
import QuestionComponent from "./QuestionComponent";
const RankedPage = () => {
	const {
		data,
		topFive,
		closeSidebar,
		isSidebarOpen,
		setContentToAskFor,
		toggleAlert,
		maxScore,
		resetDataBase,
		getDataBase,
		addMyTopScore,
	} = useGlobalContext();
	const [show, setShow] = useState(false);
	// const subjectToAskFor = data.filter((subject) => subject.name === name)[0];
	const [questionsToAskFor, setQuestionsToAskFor] = useState([]);
	const [index, setIndex] = useState(0);
	const [rightAnswers, setRightAnswers] = useState(0);
	const [endRanked, setEndRanked] = useState(false);
	const [currentScore, setCurrentScore] = useState(0);
	const [rankedPercentage, setRankedPercentage] = useState(0);
	const [timer, setTimer] = useState(0);
	const [myInterval, setMyInterval] = useState(null);
	const [startingTime, setStartingTime] = useState(null);
	const [timerStopped, setTimerStopped] = useState(false);
	// let startingTime;
	useEffect(() => {
		// subjectToAskFor.temas.forEach((tema) => {
		// 	if (contentToAskFor.includes(tema.name)) {
		// 		list = [...list, ...tema.questions];
		// 	} else {
		// 	}
		// });
		setRightAnswers(0); //para evitar que pueda tener corretas sin hacerlas al bajar contenido
		getDataBase();
		resetRanked();
	}, []);

	useEffect(() => {
		createTimer();
		// return () => clearInterval(myInterval);
	}, [index]);

	useEffect(() => {
		if (!timerStopped) {
			if (timer >= 10 || (new Date().getTime() - startingTime >= 10500 && startingTime != null)) finishRanked();
		}
	}, [timer]);

	const createTimer = () => {
		setMyInterval(
			setInterval(() => {
				setTimer((timer) => timer + 0.1);
			}, 100)
		);
		setTimerStopped(false);
		setStartingTime(new Date().getTime());
		// startingTime = new Date().getTime();
	};

	const stopTimer = () => {
		clearInterval(myInterval);
		setTimerStopped(true);
	};

	useEffect(() => {
		currentScore > maxScore
			? setRankedPercentage(Math.round(((rightAnswers / questionsToAskFor.length) * 100 + Number.EPSILON) * 100) / 100)
			: setRankedPercentage(Math.round(((currentScore / maxScore) * 100 + Number.EPSILON) * 100) / 100);
	}, [currentScore]);

	// useEffect(() => {
	// 	randomizeOrder();
	// }, [questionsToAskFor]);
	const resetQuestions = () => {
		setQuestionsToAskFor([]);
		setRightAnswers(0);
		setIndex(0);
		setContentToAskFor([]);
	};

	const resetRanked = () => {
		let list = [];
		// let newListTEst = [...randomizeOrder(list)];
		data.forEach((subject) => {
			subject.temas.forEach((tema) => {
				let questions = [...tema.questions];
				list = [...list, ...randomizeOrder(questions)]; //
			});
		});
		setIndex(0);
		setRankedPercentage(0);
		setCurrentScore(0);
		setTimer(0);

		setQuestionsToAskFor(randomizeOrder(list));
	};

	const plusRightAnswer = () => {
		setRightAnswers(rightAnswers + 1);
		let scoreToAdd;
		if (timer > 4) {
			scoreToAdd = 10 - timer + 2;
		} else {
			scoreToAdd = 10;
		}
		setCurrentScore(Math.round(currentScore + scoreToAdd));
	};

	const randomizeOrder = (list) => {
		const listLength = list.length;
		let newList = [];
		for (let i = 0; i < listLength; i++) {
			let num = Math.random();
			let multipliedNum = num * list.length;
			let roundedNum = Math.floor(multipliedNum);
			const indexToTakeOut = roundedNum;
			let item = list.splice(indexToTakeOut, 1);
			newList.push(...item);
		}
		return [...newList];
	};

	const finishRanked = () => {
		getDataBase();
		for (let i = 0; i < topFive.length; i++) {
			if (currentScore > topFive[i].score) {
				addMyTopScore(currentScore);
				break;
			}
		}
		// topFive.forEach((user) => {
		// 	if (currentScore > user.score) {
		// 		return;
		// 	}
		// });
		// if (currentScore >= maxScore) {
		// 	resetDataBase(currentScore);
		// }
		stopTimer();
		setEndRanked(true);
	};

	if (endRanked) {
		return <CongratulationsPage isRanked={true} />;
	}

	if (questionsToAskFor.length <= 0 || index >= questionsToAskFor.length) {
		resetRanked();
	}
	return (
		<>
			<h3 className='max-score'>
				<span className='score-text'>Max Score: </span>
				{maxScore}
			</h3>
			<h3 className='current-score'>
				<span className='score-text'>Current Score: </span>
				{currentScore}
			</h3>
			<section className='question-page question-page-background'>
				{questionsToAskFor.length > 0 && index >= questionsToAskFor.length ? (
					<CongratulationsPage
						resetQuestions={resetQuestions}
						name='ranked'
						percentage={Math.round(((rightAnswers / questionsToAskFor.length) * 100 + Number.EPSILON) * 100) / 100}
					/>
				) : (
					<>
						<QuestionComponent
							index={index}
							isRanked={true}
							setIndex={setIndex}
							{...questionsToAskFor[index]}
							plusRightAnswer={plusRightAnswer}
							length={questionsToAskFor.length}
							randomizeOrder={randomizeOrder}
							finishRanked={finishRanked}
							rankedPercentage={rankedPercentage}
							timer={timer}
							setTimer={setTimer}
							stopTimer={stopTimer}
						/>
					</>
				)}
			</section>
		</>
	);
};

export default RankedPage;
