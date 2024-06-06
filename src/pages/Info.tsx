import {useState} from 'react'
import { Tab } from '../components/ui/Tab'
import { General } from './Info/General'
import { TorrTorrentInfo } from '../utils/types.ts';

export const Info = ({torrent}: {torrent: TorrTorrentInfo}) => {
    const [selectedTab, setSelectedTab] = useState(1)
    const tabs = [
        {
            id: 1,
            title: 'General'
        },
        {
            id: 2,
            title: 'Tracker'
        },
        {
            id: 3,
            title: 'Peers'
        },
        {
            id: 4,
            title: 'HTTP Sources'
        },
        {
            id: 5,
            title: 'Content'
        }
    ]

    const changeTab = (tab) => {
        switch(tab) {
            case 1:
                return <General torrent={torrent}/>
            case 2:
                return <div>Tracker</div>
            case 3:
                return <div>Peers</div>
            case 4:
                return <div>HTTP Sources</div>
            case 5:
                return <div>Content</div>
        }
    }

    return (
        <>
            <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-t bg-gray-900 border-none border-gray-200 dark:border-gray-700 border-0 dark:text-gray-400">
                {tabs.map(tab => (
                    <Tab key={tab.id} title={tab.title} id={tab.id} click={setSelectedTab} selected={tab.id == selectedTab}/>
                ))}
                <li className="grow border border-x-0 border-gray-700 border-b-0"></li>
            </ul>
            <div className="h-full p-2 text-gray-100 flex flex-col overflow-y-auto scrollbar">
                {changeTab(selectedTab)}
            </div>
        </>
    )
}
