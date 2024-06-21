import { Navbar } from "./navbar/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import { ReactElement } from "react";

export const MainLayout = ({ children }: { children: ReactElement }) => {
	return (
		<div>
			<Navbar />
			<Sidebar />
			{children}
		</div>
	);
};
