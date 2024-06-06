import {AngleDown} from '/src/assets/icons/AngleDown.jsx';

interface itemProps {
    list: {
        name: string;
        enable: boolean;
    }[];
    id: string;
    icon: React.ReactNode;
}

export const Collapse = ({list, id, icon}: itemProps) => {
  return (
    <>
        <div id={`trigger-${id}`} className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
            {icon}
            <span className="flex-1 ml-3 text-left whitespace-nowrap select-none">{id.toLowerCase().replace(/\b[a-z]/g, (letter) => letter.toUpperCase())}</span>
            <AngleDown/>
        </div>
        <ul id={`target-${id}`} className="hidden">
            {list.map((item, index) => 
                <li key={index}>
                    <a href="#" className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700"
                    >{item.name}</a>
                </li>
            )}
        </ul>
    </>
  )
}