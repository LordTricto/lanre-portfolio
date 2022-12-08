import React, {useCallback, useState} from "react";
import {useLocation, useNavigate} from "react-router-dom";

import {ReactComponent as ArrowDownIcon} from "../../assets/svg/arrowDownIcon.svg";

function Nav(): JSX.Element {
	const [isNavOpen, setIsNavOpen] = useState<boolean>(false);
	const navigate = useNavigate();

	const location = useLocation();

	const handleGoHome = useCallback(() => {
		navigate("/");
	}, []);

	const handleGoLenco = useCallback(() => {
		navigate("/lenco");
	}, []);
	const handleGoAccure = useCallback(() => {
		navigate("/accure");
	}, []);

	const handleGoFora = useCallback(() => {
		navigate("/fora");
	}, []);
	const handleGoRidr = useCallback(() => {
		navigate("/ridr");
	}, []);
	const handleGoBerger = useCallback(() => {
		navigate("/berger");
	}, []);

	return (
		<div className="flex justify-start items-start max-w-7xl mx-auto relative w-full h-14">
			<div
				className={
					`lg:hidden fixed h-screen w-full uppercase bg-black z-40 transition-all ` +
					`${isNavOpen ? "text-white opacity-100" : "opacity-0 pointer-events-none"}`
				}
			>
				<ul
					className={
						`flex flex-col justify-center items-center gap-14 h-full w-full p-8 text-6xl cursor-pointer ` +
						`${isNavOpen ? "text-white" : ""}`
					}
				>
					<li
						className={
							`transition-all` +
							`${!location.pathname.includes("lenco") ? " text-white" : "line-through text-black-secondary opacity-10"}`
						}
						onClick={handleGoLenco}
					>
						LENCO
					</li>
					<li
						className={
							`transition-all` +
							`${!location.pathname.includes("lenco") ? " text-white" : "line-through text-black-secondary opacity-10"}`
						}
						onClick={handleGoAccure}
					>
						ACCRUE
					</li>
					<li
						className={
							`transition-all` +
							`${!location.pathname.includes("fora") ? " text-white" : "line-through text-black-secondary opacity-10"}`
						}
						onClick={handleGoFora}
					>
						FORA
					</li>
					<li
						className={
							`transition-all` +
							`${!location.pathname.includes("ridr") ? " text-white" : "line-through text-black-secondary opacity-10"}`
						}
						onClick={handleGoRidr}
					>
						RIDR
					</li>
					<li
						className={
							`transition-all` +
							`${!location.pathname.includes("berger") ? " text-white" : "line-through text-black-secondary opacity-10"}`
						}
						onClick={handleGoBerger}
					>
						BERGER
					</li>
				</ul>
			</div>
			<nav
				className={
					"w-full flex flex-row justify-between items-start  top-0 left-0 pt-8 px-8 lg:px-16 max-w-7xl mx-auto " +
					`${isNavOpen ? "fixed z-40" : "absolute"}`
				}
			>
				<div
					className={`uppercase 2xs:text-lg lg:text-xl cursor-pointer ` + `${isNavOpen ? "text-white" : "text-black"}`}
					onClick={handleGoHome}
				>
					Olanrewaju Olukanni
				</div>
				<div className="hidden lg:block uppercase">
					<ul className="flex flex-row gap-14 text-base text-black-tertiary cursor-pointer">
						<li
							className={
								`transition-all` +
								`${!location.pathname.includes("lenco") ? " text-white" : "line-through text-black-secondary opacity-10"}`
							}
							onClick={handleGoLenco}
						>
							LENCO
						</li>
						<li
							className={
								`transition-all` +
								`${!location.pathname.includes("lenco") ? " text-white" : "line-through text-black-secondary opacity-10"}`
							}
							onClick={handleGoAccure}
						>
							ACCRUE
						</li>
						<li
							className={
								`transition-all` +
								`${!location.pathname.includes("fora") ? " text-white" : "line-through text-black-secondary opacity-10"}`
							}
							onClick={handleGoFora}
						>
							FORA
						</li>
						<li
							className={
								`transition-all` +
								`${!location.pathname.includes("ridr") ? " text-white" : "line-through text-black-secondary opacity-10"}`
							}
							onClick={handleGoRidr}
						>
							RIDR
						</li>
						<li
							className={
								`transition-all` +
								`${!location.pathname.includes("berger") ? " text-white" : "line-through text-black-secondary opacity-10"}`
							}
							onClick={handleGoBerger}
						>
							BERGER
						</li>
					</ul>
				</div>
				<div className="block lg:hidden cursor-pointer" onClick={() => setIsNavOpen((prev) => !prev)}>
					<ArrowDownIcon
						className={`stroke-current h-4 w-4 transform transition-all ` + `${isNavOpen ? "text-white" : "text-black rotate-180"}`}
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
