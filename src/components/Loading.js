import { useGlobalContext } from "../context";

const Loading = () => {
	const { setLoading } = useGlobalContext();
	// useEffect(() => {
	// 	const timeout = setTimeout(() => {
	// 		setLoading(false);
	// 	}, 1000);
	// 	return () => clearTimeout(timeout);
	// }, []);

	return (
		<div className='d-flex justify-content-center'>
			<div
				className='spinner-border text-primary loading'
				style={{ height: "6rem", width: "6rem", position: "absolute", top: "40%", margin: "auto" }}
			></div>
		</div>
	);
};
export default Loading;
