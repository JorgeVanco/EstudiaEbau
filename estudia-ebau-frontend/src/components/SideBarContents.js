import { useRef } from "react";
import { useGlobalContext } from "../context";
import { FaCheckCircle, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const SideBarContents = ({ name }) => {
	const { data, openSidebar, isSidebarOpen, setContentToAskFor, contentToAskFor, closeSidebar } = useGlobalContext();
	const sidebarRef = useRef();
	// console.log(data);
	const dataContent = data.filter((signature) => signature.name === name)[0];
	console.log(dataContent.temas);
	dataContent.temas.sort((tema1, tema2) => {
		return tema1.numero - tema2.numero;
	});
	console.log(dataContent.temas);

	// console.log("dataContent", dataContent.estandares);
	// console.log(isSidebarOpen);
	const toggleContentToAskFor = (tema) => {
		if (!contentToAskFor.includes(tema.name)) {
			setContentToAskFor([...contentToAskFor, tema.name]);
		} else {
			// console.log("IT is included");
			const newContents = contentToAskFor.filter((content) => content !== tema.name);
			// console.log("New COntents", newContents);
			setContentToAskFor(newContents);
		}
	};

	const toggleSidebar = () => {
		if (isSidebarOpen) {
			closeSidebar();
			sidebarRef.current.style.display = "none";
		} else {
			openSidebar();
			sidebarRef.current.style.display = "inline-flex";
		}
	};

	return (
		// <aside style={{ height: "100%" }}>
		<aside>
			{/* <div style={{ height: "100%", position: "absolute", top: "10vh", zIndex: 22 }}> */}
			<div>
				<div
					className='sidebar show-sidebar'
					ref={sidebarRef}
					onMouseOver={() => {
						setTimeout(() => {}, 650);
					}}
				>
					{dataContent.temas.map((tema, index) => {
						const isSelected = contentToAskFor.includes(tema.name);
						// console.log(tema.name, isSelected);
						return (
							<div
								className={isSelected ? "sidebar-content sidebar-selected" : "sidebar-content"}
								key={index}
								onClick={() => toggleContentToAskFor(tema)}
							>
								<h2 style={{ margin: 0, alignContent: "center" }}>
									<span className='content-number'>{tema.numero || index + 1}</span>
									<span>{tema.name}</span>
									{isSelected && (
										<span>
											<FaCheckCircle style={{ color: "green", position: "absolute", right: "10%" }} />
										</span>
									)}
								</h2>
							</div>
						);
					})}
				</div>
				<div
					className={isSidebarOpen ? "show-sidebar-btn show-sidebar-btn-opened" : "show-sidebar-btn"}
					onClick={() => toggleSidebar()}
				>
					{/* {isSidebarOpen && <div className='background-cover'></div>} */}
					{isSidebarOpen ? <FaChevronLeft className='simbol' /> : <FaChevronRight className='simbol' />}
					{/* </div> */}
				</div>
				{/* <div style={{ height: "100%", position: "relative", top: "10vh", zIndex: 22, width: "80vh" }}> */}
			</div>
		</aside>
	);
};

export default SideBarContents;
