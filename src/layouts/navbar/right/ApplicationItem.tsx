export const ApplicationItem = () => {
  return (
    <a href="#"
    className="block p-4 text-center rounded-lg hover:bg-gray-100 dark:hover:bg-gray-600 group">
        <svg
        aria-hidden="true"
        className="mx-auto mb-1 w-7 h-7 text-gray-400 group-hover:text-gray-500 dark:text-gray-400 dark:group-hover:text-gray-400"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        >
        <path
            fillRule="evenodd"
            d="M10 2a4 4 0 00-4 4v1H5a1 1 0 00-.994.89l-1 9A1 1 0 004 18h12a1 1 0 00.994-1.11l-1-9A1 1 0 0015 7h-1V6a4 4 0 00-4-4zm2 5V6a2 2 0 10-4 0v1h4zm-6 3a1 1 0 112 0 1 1 0 01-2 0zm7-1a1 1 0 100 2 1 1 0 000-2z"
            clipRule="evenodd"
        ></path>
        </svg>
        <div className="text-sm text-gray-900 dark:text-white">Sales</div>
    </a>
  )
}
