import { convertTorrentInfo } from "../../utils/convert";
import { TorrentInfo } from "@utils/types";

interface TorrentTableProps {
	data: TorrentInfo[];
	hash: string;
	itemClick: (hash: string) => void;
}

export const TorrentTable = ({ data, hash, itemClick }: TorrentTableProps) => {
	const addTextColor = (status: string): string => {
		switch (status) {
			case "stalledDL":
			case "downloading":
				return "text-green-300";
			case "pausedDL":
				return "text-gray-400";
			case "missingFiles":
			case "error":
				return "text-red-400";
			case "stalledUP":
			case "uploading":
				return "text-sky-400";
			default:
				return "text-white";
		}
	};
	return (
		<table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full table-fixed">
			<thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
				<tr className="h-full">
					<th scope="col" className="px-6 py-3 w-72">
						Name
					</th>
					<th scope="col" className="px-6 py-3 w-20">
						Size
					</th>
					<th scope="col" className="px-6 py-3 w-32">
						Progress
					</th>
					<th scope="col" className="px-6 py-3 w-20">
						Status
					</th>
					<th scope="col" className="px-6 py-3 w-16">
						Seed
					</th>
					<th scope="col" className="px-6 py-3 w-16">
						Peers
					</th>
					<th scope="col" className="px-6 py-3 w-32">
						Down Speed
					</th>
					<th scope="col" className="px-6 py-3 w-32">
						Up Speed
					</th>
					<th scope="col" className="px-6 py-3 w-20">
						Ratio
					</th>
					<th scope="col" className="px-6 py-3 w-28">
						Downloaded
					</th>
					<th scope="col" className="px-6 py-3 w-28">
						Uploaded
					</th>
					<th scope="col" className="px-6 py-3 w-28">
						Time
					</th>
				</tr>
			</thead>

			<tbody>
				{data.map((item, index) => (
					<tr
						key={index}
						className={`bg-white border-b dark:border-gray-700
                        ${hash == item.hash ? " dark:bg-gray-500" : "dark:bg-gray-800 hover:bg-gray-600"} 
                        ${addTextColor(item.state)}
                        `}
						onClick={() => {
							itemClick(item.hash);
						}}>
						{Object.values(convertTorrentInfo(item)).map(
							(value, index) => (
								<td
									key={index}
									className="px-6 py-4 whitespace-nowrap overflow-hidden">
									{value}
								</td>
							),
						)}
					</tr>
				))}
			</tbody>
		</table>
	);
};
