import React from 'react'
import {convertTorrentInfo} from '../../utils/convert'
import {TorrTorrentInfo} from '../../utils/types'

interface TorrentTableProps {
    header: string[],
    data:  TorrTorrentInfo[],
    selectedItem: number,
    itemClick: (index: number) => void
}

export const TorrentTable = ({data, selectedItem, itemClick} : TorrentTableProps) => {
    const Columns = [
		"Name",
		"Size",
		"Progress",
		"Status",
		"Seeds",
		"Peers",
		"Down Speed",
		"Up Speed",
		"Ratio",
		"Downloaded",
		"Uploaded",
		"Time",
	]

    const addTextColor = (status) => {
        switch(status) {
            case "stalledDL":
            case "downloading":
                return "text-green-300"
            case "pausedDL":
                return "text-gray-400"
            case "missingFiles":
            case "error":
                return "text-red-400"
            case "stalledUP":
            case "uploading":
                return "text-sky-400"
            default:
                return "text-white"
        }
    }
  return (
    <table className="text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 w-full">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr className="h-full">
                {Columns.map((item, index) => (
                    <th
                    key={index}
                    scope="col"
                    className="px-6 py-3">
                        {item}
                    </th>
                ))}
            </tr>
        </thead>

        <tbody>
            {data.map((item, index) => (
                <tr
                    key={index}
                    className={
                        `bg-white border-b dark:border-gray-700
                        ${selectedItem == index ? " dark:bg-gray-500" : "dark:bg-gray-800 hover:bg-gray-600"} 
                        ${addTextColor(item.state)}
                        `
                    }
                    onClick={() => {
                        itemClick(index);
                    }}>
                    {Object.values(
                        convertTorrentInfo(item),
                    ).map((value, index) => (
                        <td
                            key={index}
                            className="px-6 py-4 whitespace-nowrap">
                            {value}
                        </td>
                    ))}
                </tr>
            ))}
        </tbody>
    </table>
  )
}
