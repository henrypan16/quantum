import { TorrTorrentInfo } from '../utils/types';

export const convertTorrentInfo = (info: TorrTorrentInfo) => {
    return {
        name: info.name,
        size: info.size,
        progress: info.progress,
        status: info.state,
        seeds: info.num_seeds,
        peers: info.num_leechs,
        downSpeed: info.dlspeed,
        upSpeed: info.upspeed,
        ratio: info.ratio,
        downloaded: info.downloaded,
        uploaded: info.uploaded,
        time: info.eta
    }
}