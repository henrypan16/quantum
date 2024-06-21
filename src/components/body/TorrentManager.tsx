import { torrentApi } from "../../utils/torrentApi";
import { useState, useEffect } from "react";
import { Info } from "../Info";
import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { Loading } from "../ui/Loading";
import { TorrTorrentInfo } from "../../utils/types";
import { TorrentTable } from "./TorrentTable";
import { Toolbar, ToolbarProps } from "./Toolbar";
import { AddTorrentModal } from "./AddTorrentModal";
import { useModal } from "../ui/useModal";
import stateDictionary from "../../utils/StateDictionary";
import React from "react";

interface QueryProps {
	data: TorrTorrentInfo[],
	isLoading: boolean,
	isFetching: boolean,
	isError: boolean,
}
interface FilterInterface {
	status: string;
	categories: string;
	tags: string;
}
interface TagInterface {
	[key: string]: string;
}

export const TorrentManager = () => {
	const [selectedItem, setSelectedItem] = useState(0);
	const [searchString, setSearchString] = useState("");
	const [filter, setFilter] = useState<FilterInterface>({
		status: "Status",
		categories: "Categories",
		tags: "Tags",
	});

	const { data, isLoading, isFetching }: QueryProps =
		useQuery({
			queryKey: ["torrents", "all"],
			queryFn: torrentApi.getTorrents,
			refetchInterval: 5000,
		});

	const categories: UseQueryResult<TagInterface, Error> =
		useQuery({
			queryKey: ["categories"],
			queryFn: torrentApi.getCategories,
		});

	const tags: UseQueryResult<TagInterface, Error> = useQuery({
		queryKey: ["tags"],
		queryFn: torrentApi.getTags,
	});

	const [torrentData, setTorrentData] = useState<TorrTorrentInfo[]>();

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
	const modal = useModal();

	const itemClick = (index: number) => {
		setSelectedItem(index);
	};

	const toolBarProps: ToolbarProps = {
		show: modal.show,
		setSearchString: setSearchString,
		status: Object.values(stateDictionary).map(
			(item) => item.short,
		),
		categories: !categories.isLoading && Object.keys(categories.data),
		tags: !tags.isLoading && tags.data,
		filter: filter,
		setFilter: setFilter
	}

	return (
		<main className="p-4 pb-0 md:pt-4 pt-12 md:ml-64 h-screen relative flex flex-col gap-4">
			<Toolbar
				{...toolBarProps}
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
				modal={modal}
			/>
		</main>
	);
};
