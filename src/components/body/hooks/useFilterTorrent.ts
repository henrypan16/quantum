import { useState, useEffect } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { TorrTorrentInfo } from "../../../utils/types";
import stateDictionary from "../../../utils/StateDictionary"

type FilterTorrentProps = {
	torrents: UseQueryResult<TorrTorrentInfo[], Error>,
	setTorrentData: (data: TorrTorrentInfo[] | undefined) => void
}

interface FilterInterface {
	status: string;
	categories: string;
	tags: string;
}

export const useFilterTorrent = ({torrents: {data, isLoading, isFetching}, setTorrentData}: FilterTorrentProps) => {
	const [filter, setFilter] = useState<FilterInterface>({
		status: "Status",
		categories: "Categories",
		tags: "Tags",
	});

    useEffect(() => {
		if (!isLoading) {
			setTorrentData(
				data?.filter((torrent) => {
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
    
  return {
    filter,
	setFilter
  }
}