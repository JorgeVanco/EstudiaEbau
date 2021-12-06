const ProgressBar = ({ percentage, isTimer }) => {
	if (isTimer) {
		return (
			<div
				style={{ alignContent: "center", alignItems: "center", justifyContent: "center", position: "relative", top: "55px" }}
			>
				<div id='myProgress'>
					<div
						id='myBar'
						style={{ width: `${percentage}%`, backgroundColor: "rgba(255, 0, 0, 0.515)", transition: "100ms all linear" }}
					></div>
				</div>
			</div>
		);
	}

	return (
		<div
			style={{ alignContent: "center", alignItems: "center", justifyContent: "center", position: "relative", top: "50px" }}
		>
			<div id='myProgress'>
				<div id='myBar' style={{ width: `${percentage}%` }}></div>
			</div>
		</div>
	);
};

export default ProgressBar;
