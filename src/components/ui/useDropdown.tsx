import { useRef, useEffect, useId, useCallback } from "react";
import { Dropdown } from "flowbite";

export const useDropdown = () => {
	const dropdown: RefObject = useRef<HtmlDivElement>();
	const dropdownMenuId = useId();
	const dropdownToggleId = useId();

	const createDropdown = useCallback(() => {
		// set the dropdown menu element
		const targetEl = document.getElementById(dropdownMenuId);

		// set the element that trigger the dropdown menu on click
		const triggerEl = document.getElementById(dropdownToggleId);

		const options = {
			placement: "bottom-start",
			triggerType: "click",
			offsetSkidding: 0,
			offsetDistance: 2,
			delay: 300,
			ignoreClickOutsideClass: true,
		};

		dropdown.current = new Dropdown(targetEl, triggerEl, options);
	}, []);

	useEffect(() => {
		createDropdown();
	}, []);

	return {
		dropdown, // RefObject for manually controlling the dropdown
		dropdownMenuId,
		dropdownToggleId,
	};
};
