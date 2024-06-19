import { torrentApi } from "../../utils/torrentApi";
import { useState, useEffect, useMemo } from "react";
import { Info } from "../Info";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../ui/Loading";
import { TorrTorrentInfo } from "../../utils/types";
import { TorrentTable } from "./TorrentTable";
import { Toolbar } from "./Toolbar";
import { AddTorrentModal } from "./AddTorrentModal";

import React from "react";

export const TorrentManager = () => {
	const [selectedItem, setSelectedItem] = useState(0);
	const [searchString, setSearchString] = useState("");

	const { data, isLoading, isFetching }: { data: TorrTorrentInfo[] } =
		useQuery({
			queryKey: ["torrents", "all"],
			queryFn: torrentApi.getTorrents,
			refetchInterval: 5000,
		});

	const [torrentData, setTorrentData] = useState();

	useEffect(() => {
		if (!isLoading) {
			if (searchString === "") {
				setTorrentData(data);
			} else {
				setTorrentData(
					data.filter((torrent) =>
						torrent.name
							.toLowerCase()
							.includes(searchString.toLowerCase()),
					),
				);
			}
		}
	}, [searchString, isFetching]);

	//Do not run setIsOpen to directly manipulate the state of Modal
	//Because it will cause error with backdrop modal destructor
	//Instead, pass it to Modal as a function
	const [isOpen, setIsOpen] = useState();

	//Use useMemo to prevent re-rendering of AddTorrentModal
	//Which will cause a bug with backdrop modal destructor
	const addTorrentModal = useMemo(
		() => (
			<AddTorrentModal
				visible={isOpen}
				setIsOpen={(state) => {
					setIsOpen(state);
				}}
			/>
		),
		[isOpen],
	);

	const itemClick = (index: number) => {
		setSelectedItem(index);
	};

	return (
		<main className="p-4 pb-0 md:pt-4 pt-12 md:ml-64 h-screen pt-1 relative flex flex-col gap-4">
			<Toolbar
				setIsOpen={setIsOpen}
				setSearchString={setSearchString}
				test={searchString}
			/>
			<div className="basis-1/2 w-full overflow-auto relative scrollbar">
				{isLoading ? (
					<Loading />
				) : (
					<>
						{torrentData && (
							<TorrentTable
								data={torrentData}
								selectedItem={selectedItem}
								itemClick={itemClick}
							/>
						)}
					</>
				)}
			</div>
			<div className="basis-1/2 w-full overflow-auto relative scrollbar flex flex-col-reverse border rounded-t-sm border-gray-700 bg-gray-800">
				{isLoading ? (
					<Loading />
				) : (
					<Info torrent={data[selectedItem]} />
				)}
			</div>
			{addTorrentModal}
		</main>
	);
};
