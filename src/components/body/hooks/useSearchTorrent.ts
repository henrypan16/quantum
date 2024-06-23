import { useState, useEffect } from "react";
import { UseQueryResult } from "@tanstack/react-query";
import { TorrentInfo } from "@utils/types";

type SearchTorrentsProps = {
	torrents: UseQueryResult<TorrentInfo[], Error>;
	setTorrentData: (data: TorrentInfo[] | undefined) => void;
};

export const useSearchTorrent = ({
	torrents: { isLoading, isFetching, data },
	setTorrentData,
}: SearchTorrentsProps) => {
	const [searchString, setSearchString] = useState("");

	useEffect(() => {
		if (!isLoading) {
			if (searchString === "") {
				setTorrentData(data);
			} else {
				setTorrentData(
					data?.filter((torrent) =>
						torrent.name
							.toLowerCase()
							.includes(searchString.toLowerCase()),
					),
				);
			}
		}
	}, [searchString, isFetching]);

	return {
		searchString,
		setSearchString,
	};
};
