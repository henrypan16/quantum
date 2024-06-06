import { useQuery } from '@tanstack/react-query';
import { torrentApi } from '../../utils/torrentApi';
import { TransferInfo } from './TransferInfo';
import { TorrTorrentInfo } from '../../utils/types';
import { intToSize, intToSpeed, secToTime } from '../../utils/convert';

export const General = ({torrent}: {torrent: TorrTorrentInfo}) => {
    const {data, isPending, isError}: {data: TorrTorrentInfo} = useQuery({
        queryKey: ['torrent', torrent.hash],
        queryFn: () => torrentApi.getProperties(torrent.hash),
    });

    if(isError) {
        window.location.reload();
    }

  return !isPending && (
    <div>        
        <div className="flex justify-between px-60">
            <p>Progress</p>
            <div className="w-[50vw] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto ml-10">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: torrent.progress.toString() + '%'}}></div>
            </div>                
        </div>
        <div className="flex justify-between px-60">
            <p>Available: </p>
            <div className="w-[50vw] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto ml-10">
                <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
            </div>
            
        </div>
            
        
        <div className="border m-4 pb-4 border-gray-600">
            <p className="relative -top-3 left-2 bg-gray-800 w-fit px-2">Transfer</p>
            <div className="grid grid-cols-3 gap-4">
                <div className="col-start-1 text-right">
                    <div className="grid grid-cols-12 ">
                        <TransferInfo label="Time Active" value={secToTime(torrent.time_active)} />
                        <TransferInfo label="Downloaded" value={intToSize(torrent.downloaded)} />
                        <TransferInfo label="Download Speed" value={intToSpeed(torrent.dlspeed)}/>
                        <TransferInfo label="Download Limit" value={intToSpeed(torrent.dl_limit)} />
                        <TransferInfo label="Share Ratio" value={torrent.ratio} />
                    </div>
                </div>

                <div className="col-start-2">
                    <div className="grid grid-cols-12">
                        <TransferInfo label="ETA" value={secToTime(torrent.eta)} />
                        <TransferInfo label="Uploaded" value={intToSize(torrent.uploaded)} />
                        <TransferInfo label="Upload Speed" value={intToSpeed(torrent.upspeed)} />
                        <TransferInfo label="Upload Limit" value={intToSpeed(torrent.up_limit)} />
                        <TransferInfo label="Reannounce In" value="∞" />
                    </div>
                </div>

                <div className="col-start-3">
                    <div className="grid grid-cols-12">
                        <TransferInfo label="Connection" value={`${data.nb_connections} (${data.nb_connections_limit})`} />
                        <TransferInfo label="Seeds" value={torrent.num_seeds} />
                        <TransferInfo label="Peers" value={data.peers} />
                        <TransferInfo label="Wasted" value={intToSize(data.total_wasted)} />
                        <TransferInfo label="Last Seen Complete" value={data.last_seen} />
                    </div>
                </div>
            </div>
        </div>
        
        <div className="border mx-4 px-4 border-gray-600">
            <p className="relative -top-4 -left-1 bg-gray-800 w-fit px-2">Information</p>
            <div className="grid grid-cols-4 grid-rows-3">
                    <p>Total Size:</p>
                    <p>10GB</p>
                    <p>Pieces</p>

                <p>Added On:</p>
                <p>Info Hash v1:</p>
                <p>Save Path:</p>
                <p>Comment:</p>
            </div>
        </div>
    </div>
  )
}
