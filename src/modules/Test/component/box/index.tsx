import React, {useRef} from "react";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";

function Box(): JSX.Element {
	const circle = useRef<HTMLDivElement | null>(null);
	// const landingDivRef = useRef<HTMLDivElement | null>(null);

	useGSAP(() => {
		gsap.to(".box", {
			rotation: "+=360",
			duration: 3,
			repeat: 5000,
			ease: "none",
		});
	});

	return (
		<>
			<div
				className="nested flex flex-col gap-8 rounded-sm border border-white p-4 h-fit "
				// ref={landingDivRef}
			>
				<div className="box h-20 w-20 rounded-sm bg-gradient-to-bl bg-pink-500">Selector</div>
				<div ref={circle} className="circle h-16 w-16 rounded-full bg-blue">
					Ref
				</div>
			</div>
		</>
	);
}

export default Box;
