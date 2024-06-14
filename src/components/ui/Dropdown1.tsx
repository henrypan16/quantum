import { useRef, useEffect } from "react";
import { Dropdown as FlowbiteDropdown } from "flowbite";

interface RefObject {
	current: {
		toggle: () => void;
	};
}

interface DropdownButtonProps {
	button: React.ReactNode;
	menu: React.ReactNode;
	id: string;
}

export const Dropdown1 = ({ button, menu }: DropdownButtonProps) => {
	const dropdown: RefObject = useRef<HtmlDivElement>();

	useEffect(() => {
		// set the dropdown menu element
		const targetEl = document.getElementById("menu");

		// set the element that trigger the dropdown menu on click
		const triggerEl = document.getElementById("button");

		const options = {
			placement: "bottom",
			triggerType: "click",
			offsetSkidding: 0,
			offsetDistance: 10,
			delay: 300,
			ignoreClickOutsideClass: false,
		};

		dropdown.current = new FlowbiteDropdown(targetEl, triggerEl, options);
	});

	return (
		<>
			{/* Dropdown Button */}
			{button}

			{/* Dropdown Menu */}

			{menu}
		</>
	);
};
