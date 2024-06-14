import { useRef, useEffect } from "react";
import { Accordion } from "flowbite";

interface CreateCollapseProps {
	ids: string[];
	triggerEls: string[];
	targetEls: string[];
	children: React.ReactNode;
}

export const CreateCollapse = ({ ids, children }: CreateCollapseProps) => {
	const accordionElement = useRef<HtmlDivElement>();

	useEffect(() => {
		const accordionItems = [
			{
				id: ids[0],
				triggerEl: document.getElementById("trigger-" + ids[0]),
				targetEl: document.getElementById("target-" + ids[0]),
				active: false,
			},
			{
				id: ids[1],
				triggerEl: document.getElementById("trigger-" + ids[1]),
				targetEl: document.getElementById("target-" + ids[1]),
				active: false,
			},
			{
				id: ids[2],
				triggerEl: document.getElementById("trigger-" + ids[2]),
				targetEl: document.getElementById("target-" + ids[2]),
				active: false,
			},
		];

		const options = {
			alwaysOpen: true,
			activeClasses:
				"bg-gray-100 dark:bg-gray-800 text-white dark:text-white",
			inactiveClasses: "text-gray-500 dark:text-white",
		};
		accordionElement.current = new Accordion(
			accordionElement,
			accordionItems,
			options,
		);
	});

	return <div ref={accordionElement}>{children}</div>;
};
