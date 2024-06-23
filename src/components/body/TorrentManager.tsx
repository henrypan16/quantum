
import { useState } from "react";
import { Info } from "../Info";
import { Loading } from "../ui/Loading";
import { TorrTorrentInfo } from "../../utils/types";
import { TorrentTable } from "./TorrentTable";
import { Toolbar, ToolbarProps } from "./Toolbar";
import { AddTorrentModal } from "./AddTorrentModal";
import { useModal } from "../ui/hooks";

import {
	useTorrentData,
	useFilterTorrent,
	useSearchTorrent,
} from "./hooks"

import stateDictionary from "../../utils/StateDictionary"


export const TorrentManager = () => {
	const [torrentData, setTorrentData] = useState<TorrTorrentInfo[]>();
	const [selectedItem, setSelectedItem] = useState(0);
	const {torrents, categories, tags} = useTorrentData();

	const {filter, setFilter} = useFilterTorrent({torrents, setTorrentData})
	const {setSearchString } = useSearchTorrent({torrents, setTorrentData})

	//{modalId, modalRef, hide, show}
	const modal = useModal();

	const toolBarProps: ToolbarProps = {
		show: modal.show,
		setSearchString: setSearchString,
		status: Object.values(stateDictionary).map(
			(item) => item.short,
		),
		categories: !categories.isLoading && categories.data,
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
				{torrents.isLoading ? (
					<Loading />
				) : (
					<>
						{torrentData && (
							<TorrentTable
								data={torrentData}
								selectedItem={selectedItem}
								itemClick={(index) => setSelectedItem(index)}
							/>
						)}
					</>
				)}
			</div>
			<div className="basis-1/2 w-full overflow-auto relative scrollbar flex flex-col-reverse border rounded-t-sm border-gray-700 bg-gray-800">
				{torrents.isLoading ? (
					<Loading />
				) : (
					torrents.data && <Info torrent={torrents.data[selectedItem]} />
				)}
			</div>
			<AddTorrentModal
				modalId={modal.modalId} hide={modal.hide} show={modal.show}
			/>
		</main>
	);
};
