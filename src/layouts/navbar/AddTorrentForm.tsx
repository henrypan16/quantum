import { useState, useRef } from "react";
// import { useMutation } from "@tanstack/react-query";
// import { torrentApi } from "../../utils/torrentApi.ts";
import { AiOutlineClose } from "react-icons/ai";

export const AddTorrentForm = () => {
	// const torrent = useMutation({
	// 	mutationKey: ["torrent"],
	// 	mutationFn: torrentApi.addTorrent,
	// });
	const itemsRef = useRef();
	const [torrents, setTorrents] = useState<FileList>();

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		//torrent.mutate({file: torrents})
	};

	const remove = (index: number) => {
		const list = new DataTransfer();
		Array.from(torrents).map((torrent) => {
			if (torrent !== torrents[index]) {
				list.items.add(new File(Array.from(torrent), torrent.name));
			}
		});
		setTorrents(list.files);
		itemsRef.current.files = list.files;
		// testRef.current.files = filtered;
	};

	const add = (files: FileList) => {
		setTorrents(files);
	};

	return (
		<form className="p-4 md:p-5 w-full" onSubmit={submit} method="post">
			<div className="flex flex-col gap-4 w-full">
				<div className="grid grid-rows-4 gap-2 border w-full p-2 bg-white h-48 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<ul className="overflow-y-scroll row-span-3 scrollbar">
						{torrents &&
							Array.from(torrents).map(
								(torrent, index) => (
									<li
										key={index}
										className="flex justify-between">
										<button
											type="button"
											className="text-gray-900 w-full bg-white border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm border-b text-sm dark:bg-gray-800 mr-3 mb-1 p-1 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-left text-nowrap overflow-hidden">
											{torrent.name}
										</button>
										<button
											className="text-white mr-4"
											onClick={() => {
												remove(index);
											}}>
											<AiOutlineClose />
										</button>
									</li>
								),
							)}
					</ul>
					<input
						className="block w-full row-start-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						type="file"
						accept=".torrent"
						multiple="multiple"
						ref={itemsRef}
						onChange={(e) => {
							add(e.target.files);
						}}
					/>
				</div>

				<div>
					<label
						htmlFor="name"
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
						Path
					</label>
					<input
						type="text"
						name="name"
						id="name"
						className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
						placeholder="Enter download path"
					/>
				</div>

				<div>
					<label
						className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
						htmlFor="">
						Category
					</label>
					<select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
						<option>test</option>
					</select>
				</div>
			</div>
		</form>
	);
};
