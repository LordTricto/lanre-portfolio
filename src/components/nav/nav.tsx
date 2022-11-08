import React, {useState} from "react";

import {ReactComponent as ArrowDownIcon} from "../../assets/svg/arrowDownIcon.svg";

function Nav(): JSX.Element {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	return (
		<div className="flex justify-start items-start max-w-7xl mx-auto relative w-full h-14">
			<div
				className={
					`fixed h-screen w-full uppercase bg-black z-20 transition-all ` +
					`${isNavOpen ? "text-white opacity-100" : "opacity-0 pointer-events-none"}`
				}
			>
				<ul className={`flex flex-col justify-center items-center gap-14 h-full w-full p-8 text-6xl  ` + `${isNavOpen ? "text-white" : ""}`}>
					<li className="transition-all text-white hover:scale-110">LENCO</li>
					<li className="transition-all line-through text-black-secondary opacity-10 hover:scale-110">ACCRUE</li>
					<li className="transition-all text-white hover:scale-110">FORA</li>
					<li className="transition-all text-white hover:scale-110">RIDR</li>
					<li className="transition-all text-white hover:scale-110">BERGER</li>
				</ul>
			</div>
			<nav className="w-full flex flex-row justify-between items-start absolute top-0 left-0 px-8 lg:px-16 pt-8 z-10 max-w-7xl mx-auto">
				<div className={`uppercase 2xs:text-lg lg:text-xl  ` + `${isNavOpen ? "text-white" : "text-black"}`}>Olanrewaju Olukanni</div>
				<div className="hidden lg:block uppercase">
					<ul className="flex flex-row gap-14 text-base text-black-tertiary">
						<li>LENCO</li>
						<li>ACCRUE</li>
						<li>FORA</li>
						<li>RIDR</li>
						<li>BERGER</li>
					</ul>
				</div>
				<div className="block lg:hidden cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
					<ArrowDownIcon
						className={`stroke-current h-4 w-4 text-black transform transition-all ` + `${!isNavOpen ? "rotate-180" : "text-white"} `}
					/>
					{/* <div className="h-1 w-8 bg-black rounded-lg"></div>
							<div className="h-1 w-8 bg-black rounded-lg mt-1"></div>
							<div className="h-1 w-8 bg-black rounded-lg mt-1"></div> */}
				</div>
			</nav>
		</div>
	);
}

export default Nav;
