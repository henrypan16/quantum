interface DropdownToggleProps {
    id: string;
    icon: React.ReactNode;
}

export const DropdownToggle = ({id, icon}: DropdownToggleProps) => {
    return (
        <button type="button" id={id} className="p-2 mr-1 text-gray-500 rounded-lg hover:text-gray-900 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600">
            <span className="sr-only">View notifications</span>
            {icon}
        </button>
    )
}