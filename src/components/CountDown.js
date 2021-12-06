const CountDown = () => {
	const date = new Date("June 2, 2022 00:00:00");

	console.log(date.getFullYear());
	console.log(date);
	// document.getElementsByClassName("content")[0].children[1].innerText = `Giveaway ends on ${date.getFullYear()}`;

	let x = setInterval(() => {
		let now = new Date().getTime();
		let distance = date.getTime() - now;
		// Time calculations for days, hours, minutes and seconds
		let days = Math.floor(distance / (1000 * 60 * 60 * 24));
		let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
		let seconds = Math.floor((distance % (1000 * 60)) / 1000);

		// document.getElementById("days").textContent = days;
		// document.getElementById("hours").textContent = hours;
		// document.getElementById("min").textContent = minutes;
		// document.getElementById("sec").textContent = seconds;

		if (distance < 0) {
			clearInterval(x);
			// document.getElementById("counter").innerHTML = "EXPIRED";
		}
	}, 1000);
	return <h1>date</h1>;
};
export default CountDown;
