import { Notification } from "./Notification";
import { ToggleSearch } from "./ToggleSearch";
import { Application } from "./Application";
import { User } from "./User";
import { Search } from "./Search";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Plus, Pause, Start } from "../../assets/icons";
import { useState } from "react";
import { AddTorrentModal } from "./AddTorrentModal"
import React from 'react'

export const Navbar = () => {
	//Do not run setIsOpen to directly manipulate the state of Modal 
	//Because it will cause error with backdrop modal destructor
	//Instead, pass it to Modal as a function
	const [isOpen, setIsOpen] = useState(false);
	
	return (
		<>
			<nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
				<div className="flex flex-wrap justify-between items-center">
					{/* Left side */}
					<div className="flex justify-start items-center">
						<Button />
						<div className="lg:block hidden">
							<Logo />
						</div>

						<Search />
					</div>
					<div className="flex justify-between items-center gap-4">
						<button className="text-white focus:ring-2 focus:outline-none bg-blue-800 focus:ring-blue-300 dark:focus:ring-blue-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex"
							onClick={() => {setIsOpen(true)}}>
							<Plus />
							<span className="my-auto ml-1 hidden lg:block">
								Add Torrent
							</span>
						</button>
						

						<button
							type="button"
							className="text-white bg-red-800 focus:ring-2 focus:outline-none focus:ring-red-300 dark:focus:ring-red-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex">
							<Pause />
							<span className="my-auto ml-1 hidden lg:block">
								Pause
							</span>
						</button>
						<button
							type="button"
							className="text-white bg-emerald-800 focus:ring-2 focus:outline-none focus:ring-emerald-300 dark:focus:ring-emerald-700 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex">
							<Start />
							<span className="my-auto ml-1 hidden lg:block">
								Start
							</span>
						</button>
					</div>
					{/* Right side */}
					<div className="lg:flex items-center lg:order-2 hidden">
						<ToggleSearch />
						<Notification />
						<Application />
						<User />
					</div>
					{/* <AddTorrentForm/> */}
				</div>
			</nav>
			<AddTorrentModal visible={isOpen} setIsOpen={(state) => {setIsOpen(state)}}/>
		</>
	);
};
