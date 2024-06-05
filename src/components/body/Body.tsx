import { TorrClient } from '../../utils/TorrClient';
import { useState, useEffect } from 'react';
import { convertTorrentInfo } from '../../utils/convert';
import { Info } from '../../pages/Info'

export const Body = () => {
    const mockData = [
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Dell XPS 13',
            size: 'Rose Gold',
            progress: 'Laptop',
            status: '$1999',
            seeds: '3',
            peers: '4',
            downSpeed: '15 MB/s',
            upSpeed: '3 MB/s',
            ratio: '0.3',
            downloaded: '15GB',
            uploaded: '800MB',
            time: '8'
        },
        {
            name: 'Lenovo ThinkPad X1 Carbon',
            size: 'Black',
            progress: 'Laptop',
            status: '$2499',
            seeds: '6',
            peers: '7',
            downSpeed: '25 MB/s',
            upSpeed: '6 MB/s',
            ratio: '0.5',
            downloaded: '25GB',
            uploaded: '1.5GB',
            time: '12'
        },
        {
            name: 'HP Spectre x360',
            size: 'Copper',
            progress: 'Laptop',
            status: '$1799',
            seeds: '2',
            peers: '3',
            downSpeed: '10 MB/s',
            upSpeed: '2 MB/s',
            ratio: '0.2',
            downloaded: '10GB',
            uploaded: '500MB',
            time: '6'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
        {
            name: 'Apple MacBook Pro',
            size: 'Silver',
            progress: 'Laptop',
            status: '$2999',
            seeds: '5',
            peers: '5',
            downSpeed: '20 MB/s',
            upSpeed: '5 MB/s',
            ratio: '0.4',
            downloaded: '20GB',
            uploaded: '1GB',
            time: '10'
        },
    ];
    const [data, setData] = useState([]);
    useEffect(() => {
        TorrClient.getTorrents()
            .then((response: Response): string[] => response.json() as Promise<string[]>)
            .then((data) => {setData(data)})
            .catch((error: unknown) => {console.error('Error:', error)});
    },[])

  return (
    <>
        <main className="p-4 pb-0 md:ml-64 h-screen pt-20 relative flex flex-col gap-4">
            <div className="basis-1/2 w-full overflow-auto relative scrollbar">
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
                    <tbody className="">
                        {data.map((item, index) => (
                            <tr key={index} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                {Object.values(convertTorrentInfo(item)).map((value, index) => (
                                    <td key={index} className="px-6 py-4 whitespace-nowrap dark:text-white">
                                        {value}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="basis-1/2 w-full overflow-auto relative scrollbar flex flex-col-reverse border rounded-t-sm border-gray-700 bg-gray-800">
                <Info/>
            </div>

        </main>
    </>
  )
}
