import { Status } from '../../utils/status'; 
import AngleDown from '../../assets/icons/AngleDown';
import Clipboard from '../../assets/icons/Clipboard';
import {PieChart} from '../../assets/icons/PieChart';
import {CreateCollapse} from '../../components/ui/CreateCollapse';


export const Sidebar = () => {
    return (
    <>
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidenav" id="drawer-navigation">
            <div className="overflow-y-auto py-5 px-3 h-full bg-white dark:bg-gray-800">
                
                <ul className="space-y-2">
                    <li>
                        <a
                        href="#"
                        className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group"
                        >
                        <PieChart/>
                        <span className="ml-3">Overview</span>
                        </a>
                    </li>
                    
                    <li>
                        <CreateCollapse ids={['status','categories','tags']}>
                            <div id="trigger-status" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> 
                                <Clipboard/>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Status</span>
                                <AngleDown/>
                            </div>
                            <ul id="target-status" className="hidden">
                                {Status.map((item, index) => {return item.enable && <li key={index}>
                                        <a href="#" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >{item.name}</a>
                                    </li>
                                })}
                            </ul>
                            <div id="trigger-categories" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> 
                                <Clipboard/>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Categories</span>
                                <AngleDown/>
                            </div>
                            <ul id="target-categories" className="hidden">
                                {['Action', 'Seed', 'Music', 'Movies'].map((item, index) => <li key={index}>
                                        <a href="#" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >{item}</a>
                                    </li>
                                )}
                            </ul>
                            <div id="trigger-tags" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"> 
                                <Clipboard/>
                                <span className="flex-1 ml-3 text-left whitespace-nowrap">Tags</span>
                                <AngleDown/>
                            </div>
                            <ul id="target-tags" className="hidden">
                                {['tag', 'none', 'remove', 'nothing'].map((item, index) => <li key={index}>
                                        <a href="#" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                                        >{item}</a>
                                    </li>
                                )}
                            </ul>
                        </CreateCollapse>
                    </li>
                </ul>
            </div>
            
        </aside>
    </>
  )
}

// // <li className="w-full">
// <CreateDropdown id="status" button={
//     <> 
//         <Clipboard/>
//         <span className="flex-1 ml-3 text-left whitespace-nowrap">Status</span>
//         <AngleDown/>
//     </>}>
//     {Status.map((item, index) => {return item.enable && <li key={index}>
//             <a href="#" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
//             >{item.name}</a>
//         </li>
//     })}
// </CreateDropdown>
// </li>