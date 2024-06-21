
import { Logo } from "./Logo";

export const Sidebar = () => {

	return (
		<>
			<aside
				className="fixed top-0 left-0 z-40 w-64 pt-4 h-screen transition-transform -translate-x-full bg-white border-r border-gray-200 md:translate-x-0 dark:bg-gray-800 dark:border-gray-700 "
				aria-label="Sidenav"
				id="drawer-navigation">
				<div className="overflow-y-auto px-3 h-full scrollbar bg-white dark:bg-gray-800">
					<Logo />
					<ul className="space-y-2">
						<li>
							<a
								href="#"
								className="flex items-center p-2 text-base font-medium text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
								<span className="ml-3">Overview</span>
							</a>
						</li>

					</ul>
				</div>
			</aside>
		</>
	);
};

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
