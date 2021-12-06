import { useEffect } from "react";
import { useGlobalContext } from "../context";
const Alert = ({ msg, type }) => {
	const { toggleAlert } = useGlobalContext();
	useEffect(() => {
		const timeout = setTimeout(() => {
			toggleAlert();
		}, 3000);
		return () => clearTimeout(timeout);
	}, []);

	return (
		<div style={{ zIndex: 999, marginBottom: 0 }} className={`alert alert-${type}`}>
			{msg}
		</div>
	);
};

export default Alert;
