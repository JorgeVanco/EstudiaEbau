import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { useGlobalContext } from "../context";

const Card = ({ name, images }) => {
	const imageRef = useRef(null);
	const [index, setIndex] = useState(null);
	const { setLoading } = useGlobalContext();

	const standardImgUrl = name == "historia" ? "images/historia-img.jpg" : "images/generacion-del-98.webp";

	const getRandomIndex = (indexToNotUse = null) => {
		let num = Math.floor(Math.random() * images.length);
		while (num == indexToNotUse) {
			Math.floor(Math.random() * images.length);
		}
		setIndex(num);
	};

	useEffect(() => {
		setLoading(true);
		getRandomIndex();
	}, []);

	useEffect(() => {
		setLoading(false);
	}, [index]);

	return (
		<Link to={`/${name}`} className='decoration-none card'>
			<div>
				<div className='img-div'>
					<img className={"card-img card-img-small"} src={images[index] || standardImgUrl} alt={name} ref={imageRef}></img>
				</div>

				<h2 style={{ marginTop: "5px", color: "#212529", textTransform: "capitalize" }}>{name}</h2>
			</div>
		</Link>
	);
};

export default Card;
