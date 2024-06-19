import React from "react";
import { SearchTorrent } from "./SearchTorrent";

import {
	FiMoreHorizontal,
	FiFilePlus,
	FiPauseCircle,
	FiPlayCircle,
	FiTrash2,
} from "react-icons/fi";

interface ToolbarProps {
	setIsOpen: (state: boolean) => void;
	test: string;
	setSearchString: (state: string) => void;
}

export const Toolbar = ({ setIsOpen, test, setSearchString }: ToolbarProps) => {
	return (
		<div className="flex flex-row mt-8 md:my-4 ml-1 flex-shrink-0 w-full w-auto flex-row space-y-0 items-center space-x-3">
			<button
				className="text-white focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center"
				onClick={() => {
					setIsOpen(true);
				}}>
				<FiFilePlus />
			</button>
			<button
				type="button"
				className="text-white focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center"
				onClick={() => {
					console.log(test);
				}}>
				<FiPauseCircle />
			</button>
			<button
				type="button"
				className="text-white  focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
				<FiPlayCircle />
			</button>
			<button
				type="button"
				className="text-white  focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
				<FiTrash2 />
			</button>
			<button
				type="button"
				className="text-white  focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
				<FiMoreHorizontal />
			</button>
			<SearchTorrent setSearchString={setSearchString} />
		</div>
	);
};
