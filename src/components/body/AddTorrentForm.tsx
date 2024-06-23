import { useState, useRef, RefObject } from "react";
import { useMutation } from "@tanstack/react-query";
import { torrentApi } from "../../utils/torrentApi.ts";
import { AiOutlineClose } from "react-icons/ai";
import { Form } from "../ui/Form"
import React from "react";

export const AddTorrentForm = ({ submitRef }: { submitRef?: RefObject<HTMLButtonElement> }) => {
	const torrent = useMutation({
		mutationKey: ["torrent"],
		mutationFn: torrentApi.addTorrent,
	});
	const itemsRef = useRef<HTMLInputElement>(null);
	const [torrents, setTorrents] = useState<FileList | null>(null);

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		torrent.mutate({ file: torrents } as { file: FileList });
		setTorrents(null);
	};
	// const parseTorrentFiles = (input: string) => {
	// 	// Regular expression to match each file entry
	// 	const regex = /pathl\d+:(.*?)\.[a-zA-Z0-9]{3,4}/g;
	// 	let fileNames = [];
	// 	let match;
		
	// 	while ((match = regex.exec(input)) !== null) {
	// 		// Extracting the file name from the regex match
	// 		let fileName = match[1].trim(); // Group 1 contains the file name

	// 		fileNames.push(fileName);
	// 	}
		
	// 	return fileNames;
	// }

	const remove = (index: number) => {
		const list = new DataTransfer();
		if(torrents !== null) {
			Array.from(torrents).map((torrent: File) => {
				if (torrent !== torrents[index]) {
					list.items.add(torrent);
				}
			});
		}
		
		setTorrents(list.files);
		if(itemsRef.current !== null) {
			itemsRef.current.files = list.files;
		}
	};

	return (
		<Form submit={submit} submitRef={submitRef}>
				<div className="grid grid-rows-4 gap-2 border w-full p-2 bg-white h-48 border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
					<ul className="overflow-y-scroll row-span-3 scrollbar">
						{torrents &&
							Array.from(torrents).map((torrent, index) => (
								<li
									key={index}
									className="flex justify-between">
									<button
										type="button"
										className="text-gray-900 w-full bg-white border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 font-medium rounded-sm border-b text-sm dark:bg-gray-800 mr-3 mb-1 p-1 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 dark:focus:ring-gray-700 text-left text-nowrap overflow-hidden">
										{torrent.name}
									</button>
									<button
										type="button"
										className="text-white mr-4"
										onClick={() => {
											remove(index);
										}}>
										<AiOutlineClose />
									</button>
								</li>
							))}
					</ul>
					<input
						className="block w-full row-start-4 text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
						type="file"
						accept=".torrent"
						multiple={true}
						ref={itemsRef}
						onChange={(e) => {
							e.target.files && setTorrents(e.target.files);
						}}
					/>
				</div>
				<div className="flex flex-row justify-between">
					<Form.Toggle/>
					<Form.TextBox/>
				</div>

				<Form.Select/>
				<div className="grid grid-cols-2 gap-3">
					<Form.Checkbox label="Start torrent"/>
					<Form.Checkbox label="Add to top of queue"/>
					<Form.Checkbox label="Download first & last piece first"/>
					<Form.Checkbox label="Download in sequential order"/>
				</div>

		</Form>
	);
};
