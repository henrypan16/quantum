import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { torrentApi } from "../../../utils/torrentApi";
import { TorrentInfo } from "@utils/types";

export const useTorrentData = () => {
	const torrents: UseQueryResult<TorrentInfo[], Error> = useQuery({
		queryKey: ["torrents", "all"],
		queryFn: torrentApi.getTorrents,
	});

	const categories: UseQueryResult<string[], Error> = useQuery({
		queryKey: ["categories"],
		queryFn: torrentApi.getCategories,
	});

	const tags: UseQueryResult<string[], Error> = useQuery({
		queryKey: ["tags"],
		queryFn: torrentApi.getTags,
	});

	return {
		torrents,
		categories,
		tags,
	};
};
