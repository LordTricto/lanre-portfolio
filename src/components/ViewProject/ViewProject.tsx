import React, {useCallback, useEffect, useState} from "react";

import useDimension from "../../hooks/useDimension";
import {useNavigate} from "react-router-dom";

interface CoordsInterface {
	x: number;
	y: number;
}

interface Props {
	link: string;
	coords: CoordsInterface;
	viewProjectCustomStyle?: string;
}

function ViewProject(props: Props): JSX.Element {
	const navigate = useNavigate();
	const {width} = useDimension();
	const [letterAngles, setLetterAngles] = useState<number[]>([]);
	const word = "- View - Project ";

	useEffect(() => {
		const angleIncrement = 360 / word.length;
		setLetterAngles(Array.from({length: word.length}, (_, i) => i * angleIncrement));
	}, [word]);

	const handleViewWork = useCallback(() => {
		navigate(props.link);
	}, []);

	return (
		<>
			<div
				className={
					"lg:absolute z-30 origin-center lg:-translate-x-2/4 lg:-translate-y-2/4 pointer-events-none " +
					`${props.viewProjectCustomStyle || ""}`
				}
				style={{
					top: `${width > 1023 ? props.coords.y : 0}px`,
					left: `${width > 1023 ? props.coords.x : 0}px`,
				}}
			>
				{/* <div className="circle text-black" onClick={handleViewWork}> */}
				<div
					className="relative flex justify-center items-center w-[120px] h-[120px] md:w-[150px] md:h-[150px] rounded-[50%] text-black "
					onClick={handleViewWork}
				>
					<div className="view-project-text absolute w-full h-full">
						<p>
							{word.split("").map((letter, index) => (
								<span
									key={index}
									className={`absolute left-[50%] text-[1.2rem] origin-top-left-0-60 md:origin-top-left-0-75`}
									style={{transform: `rotate(${letterAngles[index]}deg)`}}
								>
									{letter}
								</span>
							))}
						</p>
					</div>
				</div>
			</div>
		</>
	);
}

export default ViewProject;
