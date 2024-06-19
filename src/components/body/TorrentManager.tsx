import { torrentApi } from "../../utils/torrentApi";
import { useState, useEffect } from "react";
import { Info } from "../Info";
import { useQuery } from "@tanstack/react-query";
import { Loading } from "../ui/Loading";
import { TorrTorrentInfo } from "../../utils/types";
import { TorrentTable } from "./TorrentTable";
import { Toolbar } from "./Toolbar";
import { AddTorrentModal } from "./AddTorrentModal";
import { useModal } from "../ui/useModal";
import stateDictionary from "../../utils/StateDictionary";
import React from "react";

export const TorrentManager = () => {
	const [selectedItem, setSelectedItem] = useState(0);
	const [searchString, setSearchString] = useState("");
	const [filter, setFilter] = useState({
		status: "Status",
		categories: "Categories",
		tags: "Tags",
	});

	const { data, isLoading, isFetching }: { data: TorrTorrentInfo[] } =
		useQuery({
			queryKey: ["torrents", "all"],
			queryFn: torrentApi.getTorrents,
			refetchInterval: 5000,
		});

	const categories: { data: { id: { name: string; savePath: string } } } =
		useQuery({
			queryKey: ["categories"],
			queryFn: torrentApi.getCategories,
		});

	const tags: { data: { id: { name: string } } } = useQuery({
		queryKey: ["tags"],
		queryFn: torrentApi.getTags,
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

	useEffect(() => {
		if (!isLoading) {
			setTorrentData(
				data.filter((torrent) => {
					const statusCondition =
						filter.status === "Status" ||
						filter.status === "All" ||
						stateDictionary[torrent.state].short === filter.status;
					const categoriesCondition =
						filter.categories === "Categories" ||
						filter.categories === "All" ||
						torrent.category === filter.categories;
					const tagsCondition =
						filter.tags === "Tags" ||
						filter.tags === "All" ||
						torrent.tags.includes(filter.tags);

					return (
						statusCondition && categoriesCondition && tagsCondition
					);
				}),
			);
		}
	}, [filter, isFetching, data]);

	//{modalId, modalRef, hide, show}
	const { modalId, modalRef, hide, show } = useModal();

	const itemClick = (index: number) => {
		setSelectedItem(index);
	};

	return (
		<main className="p-4 pb-0 md:pt-4 pt-12 md:ml-64 h-screen relative flex flex-col gap-4">
			<Toolbar
				show={show}
				setSearchString={setSearchString}
				test={() => {}}
				status={Object.values(stateDictionary).map(
					(item) => item.short,
				)}
				categories={
					!categories.isLoading && Object.keys(categories.data)
				}
				tags={!tags.isLoading && tags.data}
				filter={filter}
				setFilter={setFilter}
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
			<AddTorrentModal
				modalId={modalId}
				modalRef={modalRef}
				hide={hide}
				show={show}
			/>
		</main>
	);
};
