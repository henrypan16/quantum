import { SearchTorrent } from "./SearchTorrent";
import { Select } from "../ui/Select";

import {
	FiMoreHorizontal,
	FiFilePlus,
	FiPauseCircle,
	FiPlayCircle,
	FiTrash2,
} from "react-icons/fi";

export interface ToolbarProps {
	show: () => void;
	pause: () => void;
	resume: () => void;
	setSearchString: (state: string) => void;
	status: string[];
	categories: string[] | false | undefined;
	tags: string[] | false | undefined;
	filter: { status: string; categories: string; tags: string };
	setFilter: (obj: {
		status: string;
		categories: string;
		tags: string;
	}) => void;
}

export const Toolbar = ({
	show,
	pause,
	resume,
	setSearchString,
	status,
	categories,
	tags,
	filter,
	setFilter,
}: ToolbarProps) => {
	return (
		<div className="flex flex-row mt-8 md:my-4 ml-1 flex-shrink-0 w-full space-y-0 items-center space-x-3 overflow-hidden justify-evenly md:justify-between">
			<button
				className="text-white focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center"
				onClick={show}>
				<FiFilePlus />
			</button>
			<button
				type="button"
				onClick={() => pause()}
				className="text-white focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
				<FiPauseCircle />
			</button>
			<button
				type="button"
				onClick={() => resume()}
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
			<div className="hidden md:block w-full">
				<SearchTorrent setSearchString={setSearchString} />
			</div>
			<div className="flex flex-row gap-4">
				<div className="hidden md:block">
					<Select
						items={status ? [...status, "All"] : []}
						title="Status"
						selected={filter.status}
						setSelected={(obj) =>
							setFilter({ ...filter, status: obj })
						}
					/>
				</div>
				<div className="hidden md:block">
					<Select
						items={
							categories
								? [...categories, "All", "Uncategorized"]
								: []
						}
						title="Categories"
						selected={filter.categories}
						setSelected={(obj) =>
							setFilter({ ...filter, categories: obj })
						}
					/>
				</div>
				<div className="hidden md:block">
					<Select
						items={tags ? [...tags, "All", "Untagged"] : []}
						title="Tags"
						selected={filter.tags}
						setSelected={(obj) =>
							setFilter({ ...filter, tags: obj })
						}
					/>
				</div>
			</div>
		</div>
	);
};
