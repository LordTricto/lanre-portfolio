import {ReactComponent as CloseIcon} from "../../assets/svg/close.svg";
import React from "react";
// import useDimension from "../../hooks/useDimension";
import ScrollTrigger from "gsap/ScrollTrigger";
import gsap from "gsap";
import {useNavigate} from "react-router-dom";

gsap.registerPlugin(ScrollTrigger);

interface Props {
	link: string;
	customCloseStyle: string;
}

function ClosePage(props: Props): JSX.Element {
	const navigate = useNavigate();

	const handleLeavePage = () => {
		navigate(`${props.link}`);
	};

	return (
		<div className={`gsap-close flex flex-row justify-center items-center cursor-pointer ${props.customCloseStyle}`} onClick={handleLeavePage}>
			<CloseIcon className="stroke-current h-16 w-16 lg:h-20 lg:w-20" />
			<span className="text-5xl 2xs:text-6xl lg:!text-7xl">Close</span>
		</div>
	);
}

export default ClosePage;
