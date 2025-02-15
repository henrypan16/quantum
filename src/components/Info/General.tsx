import { useQuery, UseQueryResult } from "@tanstack/react-query";
import { torrentApi } from "@utils/api/torrents";
import { TransferInfo } from "./TransferInfo";
import { TorrentInfo, TorrentProperties } from "@utils/types";
import { intToSize, intToSpeed, secToTime } from "../../utils/convert";

export const General = ({ torrent }: { torrent: TorrentInfo }) => {
	const {
		data,
		isPending,
		isError,
	}: UseQueryResult<TorrentProperties | null, Error> = useQuery({
		queryKey: ["torrent", torrent.hash],
		queryFn: () => torrentApi.getProperties(torrent.hash),
	});

	if (isError) {
		//window.location.reload();
	}

	return (
		!isPending && (
			<div className="text-sm text-gray-200">
				<div className="flex justify-between md:px-60 mb-1">
					<p className="font-semibold">Progress</p>
					<div className="md:w-[50vw] w-[65vw] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto md:ml-10">
						<div
							className="bg-blue-600 h-2.5 rounded-full"
							style={{
								width:
									(torrent.progress * 100).toString() + "%",
							}}></div>
					</div>
				</div>
				<div className="flex justify-between md:px-60 mb-1">
					<p className="font-semibold">Available</p>
					<div className="md:w-[50vw] w-[65vw] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto md:ml-10">
						<div
							className="bg-blue-600 h-2.5 rounded-full"
							style={{ width: "45%" }}></div>
					</div>
				</div>

				<div className="border relative m-4 px-4 border-gray-600">
					<p className="absolute -top-3 bg-gray-800 w-fit px-1 -left-1 font-bold text-gray-300 text-md">
						Transfer
					</p>
					<div className="md:grid md:grid-cols-3 mt-3 mb-2">
						<div className="md:col-start-1 flex flex-wrap gap-x-2 gap-y-1 justify-between">
							<TransferInfo
								label="Active"
								value={secToTime(torrent.time_active)}
							/>
							<TransferInfo
								label="Ratio"
								value={torrent.ratio.toFixed(3)}
							/>
							<TransferInfo
								label="Download"
								value={intToSize(torrent.downloaded)}
							/>
							<TransferInfo
								label="Upload"
								value={intToSize(torrent.uploaded)}
							/>
							<TransferInfo
								label="DL Speed"
								value={intToSpeed(torrent.dlspeed)}
							/>
							<TransferInfo
								label="DL Limit"
								value={intToSpeed(torrent.dl_limit)}
							/>
							<TransferInfo
								label="UL Speed"
								value={intToSpeed(torrent.upspeed)}
							/>
							<TransferInfo
								label="UL Limit"
								value={intToSpeed(torrent.up_limit)}
							/>

							<TransferInfo
								label="ETA"
								value={secToTime(torrent.eta)}
							/>

							<TransferInfo label="Reannounce In" value="∞" />
						</div>

						<div className="col-start-3 hidden">
							<TransferInfo
								label="Connection"
								value={`${data?.nb_connections} (${data?.nb_connections_limit})`}
							/>
							<TransferInfo
								label="Seeds"
								value={torrent.num_seeds}
							/>
							<TransferInfo label="Peers" value={data?.peers} />
							<TransferInfo
								label="Wasted"
								value={intToSize(data?.total_wasted || 0)}
							/>
							<TransferInfo
								label="Last Seen Complete"
								value={data?.last_seen}
							/>
						</div>
					</div>
				</div>

				<div className="relative border mx-4 border-gray-600">
					<p className="absolute -top-3 -left-1 bg-gray-800 w-fit px-1 text-gray-300 font-bold">
						Information
					</p>
					<div className="mt-3 overflow-scroll scrollbar">
						<div className="px-4 pb-2 w-fit flex flex-col gap-y-1">
							<TransferInfo
								label="Total Size"
								value={intToSize(data?.total_size)}
							/>
							<TransferInfo
								label="Pieces"
								value={`${data?.pieces_num} x ${intToSize(data?.piece_size)} (have ${data?.pieces_have})`}
							/>
							<TransferInfo
								label="Created By"
								value={data?.created_by}
							/>
							<TransferInfo
								label="Added On"
								value={data?.addition_date}
							/>
							<TransferInfo
								label="Completed On"
								value={data?.completion_date}
							/>
							<TransferInfo label="Hash" value={torrent.hash} />
							<TransferInfo label="Info Hash v2" value="N/A" />
							<TransferInfo
								label="Path"
								value={data?.save_path}
							/>
							<TransferInfo
								label="Comment"
								value={data?.comment}
							/>
						</div>
					</div>
				</div>
			</div>
		)
	);
};
