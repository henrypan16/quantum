import { TorrTorrentInfo } from '../utils/types';
import  stateDictionary  from './StateDictionary';

export const convertTorrentInfo = (info: TorrTorrentInfo) => {
    return {
        name: info.name,
        size: intToSize(info.size),
        progress: info.progress,
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

export const secToTime = (time: number) => {
    const units = ['s', 'm', 'h', 'd'];
    let i = 0;
    while (time > 60 && i < units.length) {
        time /= 60;
        i++;
    }
    return time.toFixed(2) + ' ' + units[i];
}