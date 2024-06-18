import { torrentApi } from "../../utils/torrentApi";
import { useState, useContext } from "react";
import { Info } from "../Info";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../ui/Loading";
import { TorrTorrentInfo } from "../../utils/types";
import { TorrentTable } from "./TorrentTable";
import { AiFillPlusCircle,
		 AiFillPauseCircle,
		 AiFillPlayCircle,
		 AiFillDelete } from "react-icons/ai";
import { AddTorrentModal } from "./AddTorrentModal"
import { Search } from "./Search";

import React from 'react'

export const Body = () => {
	const [selectedItem, setSelectedItem] = useState(0);
	const { data, isError, isPending  }: { data: TorrTorrentInfo[] } = useQuery({
		queryKey: ["torrents", "all"],
		queryFn: torrentApi.getTorrents,
		refetchInterval: 5000,
	});

	//Do not run setIsOpen to directly manipulate the state of Modal 
	//Because it will cause error with backdrop modal destructor
	//Instead, pass it to Modal as a function
	const [isOpen, setIsOpen] = useState(false);

	const itemClick = (index: number) => {
		setSelectedItem(index);
	};
	
	return (
		<>
			<main className="p-4 pb-0 md:ml-64 h-screen pt-1 relative flex flex-col gap-4">
				<div className="basis-1/2 w-full overflow-auto relative scrollbar">
					{isPending ? (
						<Loading />
					) : (
						<>
						<div className="flex flex-row my-4 ml-1 flex-shrink-0 w-full md:w-auto md:flex-row md:space-y-0 md:items-center md:space-x-3">
							<button className="text-white focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center"
								onClick={() => {setIsOpen(true)}}>
								<AiFillPlusCircle />
							</button>
							<button
								type="button"
								className="text-white focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
								<AiFillPauseCircle />
							</button>
							<button
								type="button"
								className="text-white  focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
								<AiFillPlayCircle />
							</button>
							<button
								type="button"
								className="text-white  focus:ring-2 focus:outline-none bg-gray-600 font-medium rounded-lg text-2xl p-2 text-center">
								<AiFillDelete />
							</button>
							<Search/>
						</div>
						<TorrentTable data={data} selectedItem={selectedItem} itemClick={itemClick}/>
						</>
					)}
				</div>
				<div className="basis-1/2 w-full overflow-auto relative scrollbar flex flex-col-reverse border rounded-t-sm border-gray-700 bg-gray-800">
					{isPending ? (
						<Loading />
					) : (
						<Info torrent={data[selectedItem]} />
					)}
				</div>
				<AddTorrentModal visible={isOpen} setIsOpen={(state) => {setIsOpen(state)}}/>
			</main>
		</>
	);
};
