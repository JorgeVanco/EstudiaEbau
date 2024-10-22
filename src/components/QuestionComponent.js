import { useEffect, useRef, useState } from "react";
import { useGlobalContext } from "../context";
import ProgressBar from "./ProgressBar";

const QuestionComponent = ({
	question,
	answers,
	isDate,
	setIndex,
	index,
	plusRightAnswer,
	length,
	randomizeOrder,
	isRanked,
	finishRanked,
	rankedPercentage,
	timer,
	setTimer,
	stopTimer,
}) => {
	// setShow, show, answerRef, containerRef,
	const [isAnswered, setIsAnswered] = useState(false);
	const [progression, setProgression] = useState(index);
	const answerListRef = useRef(null);
	const { toggleAlert } = useGlobalContext();
	const [randomizedAnswers, setRandomizedAnswers] = useState([]);
	const [writtenAnswer, setWrittenAnswer] = useState("");
	const writtenAnswerRef = useRef(null);
	const submitRef = useRef(null);
	const [disabled, setDisabled] = useState(false);
	const [isCapableOfWrittenAnswer, setIsCapableOfWrittenAnswer] = useState(isDate);
	const [isAlwaysMultipleChoice, setIsAlwaysMultipleChoice] = useState(false);
	const [correctAnswer, setCorrectAnswer] = useState("");
	const answerDivRef = useRef(null);
	const [rankedWrongAnswer, setRankedWrongAnswer] = useState(false);
	const [answerTime, setAnswerTime] = useState(0);

	useEffect(() => {
		let newRandomizedAnswers = randomizeOrder([...answers]);
		setRandomizedAnswers([...newRandomizedAnswers]);
		setWrittenAnswer("");
		setIsCapableOfWrittenAnswer(isDate);
		// setIsCapableOfWrittenAnswer(isAlwaysMultipleChoice || isDate);
	}, [answers]);

	const verifyAnswer = (index, e, isWrittenAnswer = false) => {
		if (!isAnswered) {
			if (isRanked) stopTimer();
			let isRightAnswer;
			if (index === -1) {
				isRightAnswer = false;
			} else {
				isRightAnswer = randomizedAnswers[index][randomizedAnswers[index].length - 1] === " ";
			}
			if (!writtenAnswer) {
				if (isRightAnswer) {
					e.target.classList.add("li-green");
					randomizedAnswers.forEach((answer, index) => e.target.parentNode.children[index].classList.remove("li-hover"));
					plusRightAnswer();
				} else {
					if (isRanked) setRankedWrongAnswer(true);
					randomizedAnswers.forEach((answer, index) => {
						e.target.parentNode.children[index].classList.remove("li-hover");

						if (answer[answer.length - 1] === " ") {
							e.target.parentNode.children[index].classList.add("li-green");
						}
					});
					e.target.classList.add("li-red");
				}
			}
			setIsAnswered(true);
			setAnswerTime(timer * 10);
			setProgression(progression + 1);
		}
	};

	const verifyWrittenAnswer = (writtenAnswer, e) => {
		e.preventDefault();

		if (!writtenAnswer.length > 0) {
			toggleAlert(true, "Escriba una respuesta por favor", "danger");
			return;
		}
		if (isRanked) stopTimer();
		let isRightAnswer;
		const index = answers.findIndex((answer) => {
			if (answer[answer.length - 1] === " ") {
				return answer.slice(0, -1).toLowerCase() === writtenAnswer.toLowerCase();
			} else {
				return answer.toLowerCase() === writtenAnswer.toLowerCase();
			}
		});

		if (index !== -1) {
			isRightAnswer = answers[index][answers[index].length - 1] === " ";
		} else {
			isRightAnswer = false;
		}
		if (isRightAnswer) {
			writtenAnswerRef.current.classList.add("answer-green");
			plusRightAnswer();
		} else {
			if (isRanked) setRankedWrongAnswer(true);
			writtenAnswerRef.current.classList.add("answer-red");
			setCorrectAnswer(answers.filter((answer) => answer[answer.length - 1] === " ")[0]);
			answerDivRef.current.style.display = "block";
		}
		setIsAnswered(true);
		setProgression(progression + 1);

		setDisabled(true);
		// writtenAnswerRef.current.setAttribute("disabled", true);
		// submitRef.current.setAttribute("disabled", true);
		// verifyAnswer(index, e, true);
	};

	const nextClick = () => {
		if (isRanked && rankedWrongAnswer) finishRanked();

		if (!isAnswered) {
			toggleAlert(true, "Seleccione una respuesta por favor", "danger");
			return;
		}
		setIndex(index + 1);
		setIsAnswered(false);
		if (!writtenAnswer) {
			for (let child of answerListRef.current.children) {
				child.classList.add("li-hover");
				child.classList.remove("li-green");
				child.classList.remove("li-red");
			}
		} else {
			writtenAnswerRef.current.classList.remove("answer-green");
			writtenAnswerRef.current.classList.remove("answer-red");
			setWrittenAnswer("");
			answerDivRef.current.style.display = "none";
		}
		setDisabled(false);
		setCorrectAnswer("");
		if (isRanked) setTimer(0);

		// writtenAnswerRef.current.setAttribute("disabled", false);
		// submitRef.current.setAttribute("disabled", false);
	};

	return (
		<>
			{/* //{" "}
			<div className='question-container' ref={containerRef}>
				//{" "}
				<div className='reference'>
					// <p className='question'>Question</p>
					//{" "}
					<button className='close-btn' onClick={() => setShow(!show)}>
						// open //{" "}
					</button>
					//{" "}
					<p className='answer' ref={answerRef}>
						// Answer //{" "}
					</p>
					//{" "}
				</div>
				//{" "}
			</div> */}
			{/* <div style={{ height: "auto", position: "relative", top: "20vh" }}> */}
			<ProgressBar
				percentage={rankedPercentage || Math.round(((progression / length) * 100 + Number.EPSILON) * 100) / 100}
			/>
			{isRanked && <ProgressBar percentage={isAnswered? answerTime: timer * 10} isTimer={true} />}

			<div className='questionContainer'>
				<div className='Question'>
					<h2>{question}</h2>
				</div>
				<div className='Answers'>
					{isCapableOfWrittenAnswer ? (
						<>
							<form onSubmit={(e) => verifyWrittenAnswer(writtenAnswer, e)}>
								<label style={{ margin: "10px 0", fontSize: "17px", padding: "3px", fontFamily: "Arial" }} htmlFor='text'>
									Escriba su respuesta:
								</label>
								<input
									type='text'
									disabled={disabled}
									autoComplete='off'
									className='form-control text-label'
									placeholder='Respuesta'
									id='written-answer'
									value={writtenAnswer}
									ref={writtenAnswerRef}
									onChange={(e) => setWrittenAnswer(e.target.value)}
								/>
								<div ref={answerDivRef} style={{ display: "none" }} className='correct-written-answer'>
									Respuesta correcta: {correctAnswer}
								</div>
								<button
									type='submit'
									disabled={disabled}
									ref={submitRef}
									className={
										disabled ? "d-none" : isRanked ? "submit-written-btn-ranked submit-written-btn" : "submit-written-btn"
									}
								>
									Submit
								</button>
								<button
									type='btn'
									className={disabled || isRanked ? "d-none" : "change-btn"}
									disabled={disabled}
									onClick={() => {
										setIsCapableOfWrittenAnswer(false);
										setWrittenAnswer("");
									}}
								>
									Cambiar a tipo test
								</button>
							</form>
						</>
					) : (
						<ul className='answer-list' ref={answerListRef}>
							<li className='li-hover' onClick={(e) => verifyAnswer(0, e)}>
								{randomizedAnswers[0]}
							</li>
							<li className='li-hover' onClick={(e) => verifyAnswer(1, e)}>
								{randomizedAnswers[1]}
							</li>
							<li className='li-hover' onClick={(e) => verifyAnswer(2, e)}>
								{randomizedAnswers[2]}
							</li>
						</ul>
					)}
				</div>
				<button className={isAnswered ? "next-btn next-btn-shadow" : "next-btn"} onClick={nextClick}>
					Next
				</button>
			</div>
			{/* </div> */}
		</>
	);
};

export default QuestionComponent;
