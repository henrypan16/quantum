import { ReactNode, useState } from "react";
import { Info } from "../Info";
import { Loading } from "../ui/Loading";
import { TorrentInfo } from "@utils/types";
import { TorrentTable } from "./TorrentTable";
import { Toolbar, ToolbarProps } from "./Toolbar";
import { AddTorrentModal } from "./AddTorrentModal";
import { useModal } from "../ui/hooks";
import { Dismiss } from "@components/ui/Dismiss";
import { useMutation } from "@tanstack/react-query";
import { torrentApi } from "@utils/api/torrents";
import { useFetchData, useFilterTorrent, useSearchTorrent } from "./hooks";
import { createPortal } from "react-dom";

import stateDictionary from "../../utils/StateDictionary";

export const TorrentManager = () => {
	const [torrentData, setTorrentData] = useState<TorrentInfo[]>();
	const [toast, setToast] = useState<ReactNode[]>([]);
	const [hash, setHash] = useState("");

	const { torrents, categories, tags } = useFetchData();

	const { mutate: pauseTorrent } = useMutation({
		mutationFn: torrentApi.pause,
		onSuccess: () =>
			setToast([
				...toast,
				<Dismiss
					key="pause"
					toast="Torrent is paused"
					onHide={() => setToast([])}
				/>,
			]),
	});

	const { mutate: resumeTorrent } = useMutation({
		mutationFn: torrentApi.resume,
		onSuccess: () =>
			setToast([
				...toast,
				<Dismiss
					key="resume"
					toast="Torrent is resumed"
					onHide={() => setToast([])}
				/>,
			]),
	});

	const { filter, setFilter } = useFilterTorrent({
		torrents,
		setTorrentData,
	});
	const { setSearchString } = useSearchTorrent({ torrents, setTorrentData });

	//{modalId, modalRef, hide, show}
	const modal = useModal();

	const toolBarProps: ToolbarProps = {
		show: modal.show,
		pause: () => pauseTorrent(hash),
		resume: () => resumeTorrent(hash),
		setSearchString: setSearchString,
		status: Object.values(stateDictionary).map((item) => item.short),
		categories: !categories.isLoading && categories.data,
		tags: !tags.isLoading && tags.data,
		filter: filter,
		setFilter: setFilter,
	};

	return (
		<main className="p-4 pb-0 md:pt-4 pt-12 md:ml-64 h-screen relative flex flex-col gap-4">
			{createPortal(
				toast.map((a) => a),
				document.body,
			)}

			<Toolbar {...toolBarProps} />
			<div className="basis-1/2 w-full overflow-auto relative scrollbar">
				{torrents.isLoading ? (
					<Loading />
				) : (
					<>
						{torrentData && (
							<TorrentTable
								data={torrentData}
								hash={hash}
								itemClick={setHash}
							/>
						)}
					</>
				)}
			</div>
			<div className="basis-1/2 w-full overflow-auto relative scrollbar flex flex-col-reverse border rounded-t-sm border-gray-700 bg-gray-800">
				{torrents.isLoading ? (
					<Loading />
				) : (
					torrents.data && (
						<Info
							torrent={torrents.data.find(
								(torrent) => torrent.hash === hash,
							)}
						/>
					)
				)}
			</div>
			<AddTorrentModal
				modalId={modal.modalId}
				hide={modal.hide}
				show={modal.show}
			/>
		</main>
	);
};
