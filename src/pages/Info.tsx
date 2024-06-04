import {useState} from 'react'
import { Tab } from '../components/ui/Tab'

export const Info = () => {
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
    
return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-t border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map(tab => (
            <Tab key={tab.id} title={tab.title} id={tab.id} click={setSelectedTab} selected={tab.id == selectedTab}/>
        ))}
    </ul>
)
}
