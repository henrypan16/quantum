interface DropdownMenuProps {
    title: string;
    children: React.ReactNode;
    id: string;
}

export const DropdownMenu = ({title, children, id}: DropdownMenuProps) => {
  return (
        <div className="hidden overflow-hidden z-50 my-4 max-w-sm text-base list-none bg-white divide-y divide-gray-100 shadow-lg dark:divide-gray-600 dark:bg-gray-700 rounded-xl" id={id}>
            <div className="block py-2 px-4 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-600 dark:text-gray-300">
                {title}
            </div>
            {children}
        </div>
  )
}
