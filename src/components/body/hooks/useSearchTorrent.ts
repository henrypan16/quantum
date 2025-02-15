import { useState, useEffect } from "react";
import { TorrentInfo } from "@utils/types";

type SearchTorrentsProps = {
	data: TorrentInfo[];
	setTorrentData: (data: TorrentInfo[] | undefined) => void;
	isLoading: boolean;
};

export const useSearchTorrent = ({
	data,
	setTorrentData,
	isLoading,
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
	}, [searchString]);

	return {
		searchString,
		setSearchString,
	};
};
