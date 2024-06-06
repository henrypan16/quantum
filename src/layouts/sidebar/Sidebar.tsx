import { Status } from '../../utils/status'; 
import Clipboard from '../../assets/icons/Clipboard';
import {PieChart} from '../../assets/icons/PieChart';
import {Tag} from '../../assets/icons/Tag';
import {CreateCollapse} from '../../components/ui/CreateCollapse';
import {Refresh} from '../../assets/icons/Refresh';
import {Collapse} from '../../components/ui/Collapse';
import { useQuery } from '@tanstack/react-query';
import { torrentApi } from '../../utils/torrentApi';

export const Sidebar = () => {
    const categories: {data: {id: {name:string, savePath:string}}} = useQuery({
        queryKey: ['categories'],
        queryFn: torrentApi.getCategories,
    });

    const tags: {data: {id: {name:string}}} = useQuery({
        queryKey: ['tags'],
        queryFn: torrentApi.getTags,
    });

    if(!categories.isPending)console.log(tags.data)
    return (
    <>
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen pt-14 transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 " aria-label="Sidenav" id="drawer-navigation">
            <div className="overflow-y-auto py-5 px-3 h-full scrollbar bg-white dark:bg-gray-800">
                
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
                            <Collapse list={Status} id='status' icon={<Refresh/>}/>
                            <Collapse list={!categories.isPending ?
                                [...Object.keys(categories.data)
                                    .map((item) => (
                                            {name: item}
                                        )
                                    ), {name:'all'}, {name:'uncategorized'}
                                ]: []}
                                id='categories'
                                icon={<Clipboard/>}/>

                            <Collapse list={!tags.isPending ? 
                                [...Object.values(tags.data)
                                    .map((item) => (
                                            {name: item}
                                        )
                                    ), {name:'all'}, {name:'uncategorized'}
                                ] : []}
                                id='tags'
                                icon={<Tag/>}/>
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