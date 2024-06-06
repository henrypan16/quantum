import { torrentApi } from '../../utils/torrentApi';
import { useState } from 'react';
import { convertTorrentInfo } from '../../utils/convert';
import { Info } from '../../pages/Info'
import { useQuery } from '@tanstack/react-query';
import { Loading } from '../ui/Loading';
import { TorrTorrentInfo } from '../../utils/types.ts'

export const Body = () => {
    const [selectedItem, setSelectedItem] = useState(0);
    const {data, isError, isPending}: {data: TorrTorrentInfo[]} = useQuery({
        queryKey: ['torrents'],
        queryFn: torrentApi.getTorrents
    });
    
    if(isError) {
        console.log('Error');
        window.localStorage.clear();
        window.location.reload();
    }

    const itemClick = (index: number) => {
        setSelectedItem(index);
        console.log()
    }
    
  return (
    <>
        <main className="p-4 pb-0 md:ml-64 h-screen pt-20 relative flex flex-col gap-4">
            <div className="basis-1/2 w-full overflow-auto relative scrollbar">
                {isPending ?
                    <Loading/>
                    :
                <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr className="h-full">
                            {['Name', 'Size', 'Progress', 'Status', 'Seeds', 'Peers','Down Speed', 'Up Speed', 'Ratio', 'Downloaded', 'Uploaded', 'Time']
                                .map((item, index) => <th key={index} scope="col" className="px-6 py-3">
                                        {item}
                                    </th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((item, index) => (
                            <tr key={index} className={selectedItem == index ? "bg-white border-b dark:bg-gray-500 dark:border-gray-700" : "bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-600"} onClick={() => {itemClick(index)}}>
                                {Object.values(convertTorrentInfo(item)).map((value, index) => (
                                    <td key={index} className="px-6 py-4 whitespace-nowrap dark:text-white">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>}
            </div>
            <div className="basis-1/2 w-full overflow-auto relative scrollbar flex flex-col-reverse border rounded-t-sm border-gray-700 bg-gray-800">
                {isPending ? <Loading/> : <Info torrent={data[selectedItem]}/>}
            </div>

        </main>
    </>
  )
}
