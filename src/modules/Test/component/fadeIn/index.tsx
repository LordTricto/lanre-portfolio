import React, {forwardRef, useRef} from "react";

import gsap from "gsap";
import {useGSAP} from "@gsap/react";

interface Props {
	children: React.ReactNode;
	stagger: number;
	x: number;
}

const FadeIn = forwardRef(({children, stagger = 0, x = 0}: Props, ref) => {
	const el = useRef<HTMLSpanElement | null>(null);
	const animation = useRef<gsap.core.Tween>();

	useGSAP(() => {
		animation.current = gsap.from(el.current?.children || "", {
			opacity: 0,
			stagger,
			x,
		});
	});

	useGSAP(() => {
		// forward the animation instance
		if (typeof ref === "function") {
			ref(animation.current);
		} else if (ref) {
			ref.current = animation.current;
		}
	}, [ref]);

	return <span ref={el}>{children}</span>;
});

FadeIn.displayName = "MyComponent";

export default FadeIn;
