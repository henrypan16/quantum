import { MainLayout } from "../layouts/MainLayout";
import { TorrentManager } from "../components/body/TorrentManager";
import React from "react";

export const Dashboard = () => {
	return (
		<div>
			<div className="antialiased bg-gray-50 dark:bg-gray-900">
				<MainLayout>
					<TorrentManager />
				</MainLayout>
			</div>
		</div>
	);
};
