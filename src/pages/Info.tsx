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
    <>
        <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-t border-gray-200 dark:border-gray-700 dark:text-gray-400">
        {tabs.map(tab => (
            <Tab key={tab.id} title={tab.title} id={tab.id} click={setSelectedTab} selected={tab.id == selectedTab}/>
        ))}
        </ul>
        <div className="h-full p-2 text-gray-100 flex flex-col">
            <div className="flex justify-between px-60">
                <p>Progress: </p>
                <div className="w-[50vw] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto ml-10">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                </div>
                
            </div>
            <div className="flex justify-between px-60">
                <p>Available: </p>
                <div className="w-[50vw] bg-gray-200 rounded-full h-2.5 dark:bg-gray-700 my-auto ml-10">
                    <div className="bg-blue-600 h-2.5 rounded-full" style={{width: '45%'}}></div>
                </div>
                
            </div>
            
            <div className="border m-4">
                <p className="relative -top-3 left-2 bg-gray-800 w-fit px-2">Transfer</p>
                <div className="grid grid-cols-6 gap-4">
                    <div className="col-start-1 text-right">
                        <p>Time Active:</p>
                        <p>Downloaded:</p>
                        <p>Download Speed:</p>
                        <p>Download Limit:</p>
                        <p>Share Ratio:</p>
                    </div>
                    <div className="col-start-2 text-left">
                        <p>10 Hrs</p>
                        <p>8GB</p>
                        <p>10MB/s</p>
                        <p>∞</p>
                        <p>∞</p>
                    </div>
                    <div className="col-start-3">
                        <p>General</p>
                        <p>Tracker</p>
                        <p>Peers</p>
                        <p>HTTP Sources</p>
                        <p>Content</p>
                    </div>
                    <div className="col-start-5">
                        <p>General</p>
                        <p>Tracker</p>
                        <p>Peers</p>
                        <p>HTTP Sources</p>
                        <p>Content</p>
                    </div>
                </div>
            </div>

            <div className="border mx-4 p-4">
                <p className="relative -top-3 left-2 bg-gray-800 w-fit px-2">Information</p>
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
    </>

)
}
