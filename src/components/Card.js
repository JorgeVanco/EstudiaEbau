import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const Card = ({ name, images }) => {
	const imageRef = useRef(null);
	const [isSmall, setIsSmall] = useState(true);
	const [index, setIndex] = useState(null);

	const getRandomIndex = (indexToNotUse = null) => {
		let num = Math.floor(Math.random() * images.length);
		// do {
		// 	num =
		// } while (num != indexToNotUse);
		while (num == indexToNotUse) {
			Math.floor(Math.random() * images.length);
		}
		setIndex(num);
	};

	useEffect(() => {
		getRandomIndex();
		// setTimeout(() => {
		// 	console.log(imageRef.current, imageRef.current.clientHeight);
		// 	if (imageRef.current.clientHeight < 300) {
		// 		setIsSmall(true);
		// 	} else if (imageRef.current.clientHeight > 300 && window.innerWidth <= 768) {
		// 		setIndex(index + 1);
		// 		console.log("hhh");
		// 	}
		// }, 55);
	}, []);

	return (
		<Link to={`/${name}`} className='decoration-none card'>
			<div>
				<div className='img-div'>
					<img
						className={isSmall ? "card-img card-img-small" : "card-img"}
						src={images[index]}
						alt={name}
						ref={imageRef}
					></img>
				</div>

				<h2 style={{ marginTop: "5px", color: "#212529", textTransform: "capitalize" }}>{name}</h2>
			</div>
		</Link>
	);
};

export default Card;
