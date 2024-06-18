import { Navbar } from "./navbar/Navbar";
import { Sidebar } from "./sidebar/Sidebar";
import { ReactNode } from "react";
import React from 'react'

export const MainLayout = ({ children }: { children: ReactNode }) => {
	return (
		<div>
			<Sidebar />
			{children}
		</div>
	);
};
