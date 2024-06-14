import { Notification } from "./Notification";
import { ToggleSearch } from "./ToggleSearch";
import { Application } from "./Application";
import { User } from "./User";
import { Search } from "./Search";
import { Button } from "./Button";
import { Logo } from "./Logo";
import { Plus, Pause, Start } from "../../assets/icons";
import { Modal } from "../../components/ui/Modal";
import { AddTorrentForm } from "./AddTorrentForm";
import { CreateModal } from "../../components/ui/CreateModal";
import { useState } from "react";

export const Navbar = () => {
	const [close, setClose] = useState();

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
						<CreateModal
							setClose={setClose}
							id="addTorrent"
							Button={
								<div className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex">
									<Plus />
									<span className="my-auto ml-1 hidden lg:block">
										Add Torrent
									</span>
								</div>
							}>
							<AddTorrentForm close={close} />
						</CreateModal>

						<button
							type="button"
							className="text-white bg-gradient-to-r from-amber-500 to-orange-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex">
							<Pause />
							<span className="my-auto ml-1 hidden lg:block">
								Pause
							</span>
						</button>
						<button
							type="button"
							className="text-white bg-gradient-to-r from-lime-500 to-emerald-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center flex">
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
		</>
	);
};
