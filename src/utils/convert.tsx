import { TorrTorrentInfo } from '../utils/types';
import  stateDictionary  from './StateDictionary';

const Progress = ({percentage}: {percentage: string}) => {
    return <div className="w-full bg-gray-200 rounded-full dark:bg-gray-700">
        <div className="bg-blue-600 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full" style={{width: `${percentage}%`}}>
            {percentage+'%'}
        </div>
    </div>}


export const convertTorrentInfo = (info: TorrTorrentInfo) => {
    return {
        name: info.name,
        size: intToSize(info.size),
        progress: <Progress percentage={info.progress}/>,
        status: stateDictionary[info.state].short,
        seeds: info.num_seeds,
        peers: info.num_leechs,
        downSpeed: intToSpeed(info.dlspeed),
        upSpeed: intToSpeed(info.upspeed),
        ratio: info.ratio,
        downloaded: intToSize(info.downloaded),
        uploaded: intToSize(info.uploaded),
        time: secToTime(info.eta)
    }
}



export const intToSize = (size: number) => {
    const units = ['B', 'KB', 'MB', 'GB', 'TB'];
    let i = 0;
    while (size > 1024 && i < units.length) {
        size /= 1024;
        i++;
    }
    return size.toFixed(2) + ' ' + units[i];
}

export const intToSpeed = (time: number) => {
    const units = ['B/s', 'KB/s', 'MB/s', 'GB/s', 'TB/s'];
    let i = 0;
    while (time > 1024 && i < units.length) {
        time /= 1024;
        i++;
    }
    return time.toFixed(2) + ' ' + units[i];
}

export const secToTime = (time: number): string => {
    const units = ['s', 'm', 'h', 'd'];
    let i = 0;
    while (time > 60 && i < units.length) {
        time /= 60;
        i++;
    }
    return time.toFixed(2) + ' ' + units[i];
}