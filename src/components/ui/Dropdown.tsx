import { useRef, useEffect } from "react";
import { Dropdown as FlowbiteDropdown } from "flowbite";

interface RefObject {
	current: {
		toggle: () => void;
	};
}

interface DropdownButtonProps {
	children: React.ReactNode;
	icon: React.ReactNode;
	menu: string;
	toggle: string;
	title: string;
}

export const Dropdown = ({
	children,
	menu,
	toggle,
	title,
	icon,
}: DropdownButtonProps) => {
	const dropdown: RefObject = useRef<HtmlDivElement>();

	useEffect(() => {
		// set the dropdown menu element
		const targetEl = document.getElementById(menu);

		// set the element that trigger the dropdown menu on click
		const triggerEl = document.getElementById(toggle);

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
			<button
				type="button"
				id={toggle}
				className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
				<span className="sr-only">View {menu}</span>
				{icon}
			</button>

			{/* Dropdown Menu */}
			<div
				className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl"
				id={menu}>
				<div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
					{title}
				</div>
				{children}
			</div>
		</>
	);
};
