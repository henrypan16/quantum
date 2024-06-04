import React from 'react'

export const Info = () => {
  return (
    <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-t border-gray-200 dark:border-gray-700 dark:text-gray-400">
        <li className="me-2">
            <a href="#" aria-current="page" className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500">General</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Tracker</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">Peers</a>
        </li>
        <li className="me-2">
            <a href="#" className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300">HTTP Sources</a>
        </li>
        <li>
            <a className="inline-block p-4 text-gray-400 rounded-t-lg cursor-not-allowed dark:text-gray-500">Content</a>
        </li>
    </ul>
  )
}
