import { useQuery } from "@tanstack/react-query";
import { syncApi } from "@utils/api/sync";
import { SyncMainData, TorrentInfo } from "@utils/types";
import { useEffect, useState } from "react";

export const useFetchData = () => {
	const [torrents, setTorrents] = useState<{ [key: string]: TorrentInfo }>(
		{},
	);
	const [categories, setCategories] = useState<{
		[key: string]: { name: string; savePath: string };
	}>({});
	const [tags, setTags] = useState<string[]>([]);

	// const torrents: UseQueryResult<TorrentInfo[], Error> = useQuery({
	// 	queryKey: ["torrents", "all"],
	// 	queryFn: () => torrentApi.getTorrents(),
	// });

	// const categories: UseQueryResult<string[], Error> = useQuery({
	// 	queryKey: ["categories"],
	// 	queryFn: torrentApi.getCategories,
	// });

	// const tags: UseQueryResult<string[], Error> = useQuery({
	// 	queryKey: ["tags"],
	// 	queryFn: torrentApi.getTags,
	// });

	const { data, isSuccess, isLoading } = useQuery({
		queryKey: ["mainData"],
		queryFn: (): Promise<SyncMainData> =>
			syncApi.getMainData(data?.rid ?? 0),
		refetchInterval: 1000,
	});

	useEffect(() => {
		if (isSuccess) {
			if (data.full_update == true) {
				//full_update == true, torrents, categories and tags won't be undefined
				setTorrents(data.torrents);

				setCategories(data.categories);

				setTags(data.tags);
				console.log("full update");
			}

			console.log(data);
		}
	}, [data]);

	return {
		torrents: Object.keys(torrents).map((hash) => ({
			...torrents[hash],
			hash: hash,
		})),
		categories: Object.keys(categories).map((name) => name),
		tags,
		isLoading,
	};
};
