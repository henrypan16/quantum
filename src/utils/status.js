export const Status = [
	{
		id: "error",
		name: "Error",
		description: "Some error occurred, applies to paused torrents",
		enable: true,
	},
	{
		id: "missingFiles",
		name: "Missing",
		description: "Torrent data files are missing",
		enable: true,
	},
	{
		id: "uploading",
		name: "Uploading",
		description: "Torrent is being seeded and data is being transferred",
		enable: true,
	},
	{
		id: "allocating",
		name: "Allocating",
		description: "Torrent is allocating disk space for download",
		enable: true,
	},
	{
		id: "downloading",
		name: "Downloading",
		description:
			"Torrent is being downloaded and data is being transferred",
		enable: true,
	},
	{
		id: "checkingResumeData",
		name: "Checking",
		description: "Checking resume data on qBt startup",
		enable: true,
	},
	{
		id: "moving",
		name: "Moving",
		description: "Torrent is moving to another location",
		enable: true,
	},
];
