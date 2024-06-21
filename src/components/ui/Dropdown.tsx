import { FiChevronDown } from "react-icons/fi";
import { memo } from "react";

interface DropdownProps {
	menu: string;
	button: string;
	title: string;
	items: string[];
}

export const Dropdown = memo(function Dropdown({
	menu,
	button,
	title,
	items,
}: DropdownProps) {
	return (
		<>
			{/* Dropdown Button */}
			<button
				type="button"
				id={button}
				className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-1 focus:ring-gray-200 dark:focus:ring-gray-600 border border-gray-600 flex gap-2 items-center">
				<span className="">{title}</span>
				<FiChevronDown />
			</button>

			{/* Dropdown Menu */}
			<div
				className="hidden overflow-hidden z-50 my-4 max-w-sm text-base border-gray-600 list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600"
				id={menu}>
				{items.map((item, i) => (
					<div
						key={i}
						className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
						{item}
					</div>
				))}
			</div>
		</>
	);
});
