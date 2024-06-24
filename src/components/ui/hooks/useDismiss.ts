import { Dismiss } from "flowbite";
import { DismissInterface, DismissOptions } from "flowbite";
import { useEffect, useRef, useId } from "react";

export const useDismiss = (onHide: () => void) => {
	const dismiss = useRef<DismissInterface>();
	const targetId = useId();
	const triggerId = useId();

	useEffect(() => {
		// target element that will be dismissed
		const targetEl: HTMLElement | null = document.getElementById(targetId);

		// optional trigger element
		const triggerEl: HTMLElement | null =
			document.getElementById(triggerId);

		const options: DismissOptions = {
			transition: "transition-opacity",
			duration: 1000,
			timing: "ease-out",

			// callback functions
			onHide: onHide,
		};
		dismiss.current = new Dismiss(targetEl, triggerEl, options);
	}, []);
	return {
		triggerId,
		targetId,
		hide: () => dismiss.current?.hide(),
	};
};
