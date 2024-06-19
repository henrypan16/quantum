import React from "react";

interface TabProps {
	title: string;
	click: (id: number) => void;
	selected: boolean;
	id: number;
}

export const Tab = ({ title, click, selected, id }: TabProps) => {
	return (
		<li className="hover:cursor-pointer">
			<a
				onClick={() => {
					click(id);
				}}
				className={
					selected
						? "inline-block p-4 text-blue-600 bg-gray-100 active dark:bg-gray-800 dark:text-blue-500"
						: "inline-block p-4 hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300 dark:border-gray-700 border-t"
				}>
				{title}
			</a>
		</li>
	);
};
