import { Dropdown } from "/src/components/general/Dropdown";
import { ApplicationItem } from "./ApplicationItem";

export const Application = () => {
    const icon = (
        <svg className="w-6 h-6"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
            >
            <path
                d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
            ></path>
        </svg>
    )


    return (
        <Dropdown menu="apps-dropdown" toggle="apps-toggle" title="Application" icon={icon}>
            <div className="grid grid-cols-3 gap-4 p-4">
                <ApplicationItem/>
                <ApplicationItem/>
                <ApplicationItem/>
                <ApplicationItem/>
                <ApplicationItem/>
                <ApplicationItem/>
            </div>
        </Dropdown>
  )
}


{/*                <div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:bg-gray-700 dark:divide-gray-600 rounded-xl">
                    <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                        Apps
                    </div> */}