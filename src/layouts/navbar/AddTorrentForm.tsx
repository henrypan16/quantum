import { useState, useEffect, useRef } from "react";
import { useMutation } from "@tanstack/react-query";
import { torrentApi } from "../../utils/torrentApi.ts";

export const AddTorrentForm = () => {
	const torrent = useMutation({
		mutationKey: ["torrent"],
		mutationFn: torrentApi.addTorrent,
	});
	const itemsRef = useRef();
	const [torrents, setTorrents] = useState<FileList>();
	const [category, setCategory] = useState("");

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		//torrent.mutate({file: torrents})
	};

	const remove = (index) => {
		let list = new DataTransfer();
		Array.from(torrents).map((torrent) => {
			if (torrent !== torrents[index]) {
				list.items.add(new File(Array.from(torrent), torrent.name));
			}
		});
		setTorrents(list.files);
		itemsRef.current.files = list.files;
		// testRef.current.files = filtered;
	};

	const add = (files) => {
		setTorrents(files);
	};

	const close = () => {
		const event = document.createEvent("HTMLEvents");
		event.initEvent("close-addTorrent", true, true);
		event.eventName = "close-addTorrent";
		document.dispatchEvent(event);
	};

	return (
		<div className="relative p-4 w-full max-w-md max-h-full">
			{/* <!-- Modal content --> */}
			<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
				{/* <!-- Modal header --> */}
				<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
					<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
						Add Torrent
					</h3>
					<button
						onClick={close}
						type="button"
						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						data-modal-toggle="crud-modal">
						<svg
							className="w-3 h-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 14">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							/>
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
				</div>
				{/* <!-- Modal body --> */}
				<form className="p-4 md:p-5" onSubmit={submit} method="post">
					<div className="flex flex-col gap-4">
						<div className="grid grid-rows-4 gap-2 border w-full max-w-sm p-2 bg-white h-48 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
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
													className="text-white"
													onClick={() => {
														remove(index);
													}}>
													X
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
								files={torrents}
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
								<option>test</option>
								<option>test</option>
								<option>test</option>
							</select>
						</div>

						<div className="flex justify-evenly items-center">
							<button
								type="submit"
								className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
								<svg
									className="me-1 -ms-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
										clipRule="evenodd"></path>
								</svg>
								Add
							</button>
							<button
								onClick={close}
								type="button"
								className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
								<svg
									className="me-1 -ms-1 w-5 h-5"
									fill="currentColor"
									viewBox="0 0 20 20"
									xmlns="http://www.w3.org/2000/svg">
									<path
										fillRule="evenodd"
										d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
										clipRule="evenodd"></path>
								</svg>
								Cancel
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};
