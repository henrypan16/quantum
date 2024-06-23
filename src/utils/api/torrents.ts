import {
	AddTorrentParameters,
	TorrentFile,
	TorrentInfo,
	TorrentInfoParameters,
	TorrentPieceState,
	TorrentProperties,
	TorrentTrackers,
	TorrentUrl,
} from "@utils/types";

let serverAddress: string = "/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
	serverAddress = `${serverAddress}/`;
}

const baseURL: string = `${serverAddress}api/v2/torrents`;

export const torrentApi = {
	getTorrents: async (
		parameters?: TorrentInfoParameters,
	): Promise<TorrentInfo> => {
		let paramString = "";
		if (typeof parameters === "undefined") {
			paramString = JSON.stringify(parameters);
		}

		return await fetch(`${baseURL}info?${paramString}`, {
			credentials: "include", // include, *same-origin, omit
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	getProperties: async (hash: string): Promise<TorrentProperties> => {
		return await fetch(`${baseURL}properties?hash=${hash}`, {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	getTrackers: async (hash: string): Promise<TorrentTrackers> => {
		return await fetch(`${baseURL}trackers?hash=${hash}`, {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	getWebseeds: async (hash: string): Promise<TorrentUrl[]> => {
		return await fetch(`${baseURL}webseeds?hash=${hash}`, {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	getFiles: async (
		hash: string,
		indexes?: string,
	): Promise<TorrentFile[]> => {
		return await fetch(`${baseURL}files?hash=${hash}&${indexes}`, {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	getPieceStates: async (hash: string): Promise<TorrentPieceState[]> => {
		return await fetch(`${baseURL}pieceStates?hash=${hash}`, {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	getPieceHashes: async (hash: string): Promise<string[]> => {
		return await fetch(`${baseURL}pieceHashes?hash=${hash}`, {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	pause: async (hash: string): Promise<string> => {
		return await fetch(`${baseURL}pause?hashes=${hash}`, {
			method: "POST",
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	resume: async (hash: string): Promise<string> => {
		return await fetch(`${baseURL}resume?hashes=${hash}`, {
			method: "POST",
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	delete: async (hash: string, deleteFiles: boolean): Promise<string> => {
		return await fetch(
			`${baseURL}delete?hashes=${hash}&deleteFiles=${deleteFiles}`,
			{
				method: "POST",
				credentials: "include",
			},
		).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	recheck: async (hash: string): Promise<string> => {
		return await fetch(`${baseURL}recheck?hashes=${hash}`, {
			method: "POST",
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	reannounce: async (hash: string): Promise<string> => {
		return await fetch(`${baseURL}reannounce?hashes=${hash}`, {
			method: "POST",
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	addTorrent: async (parameters: AddTorrentParameters): Promise<void> => {
		const fileList = parameters.torrents;
		const formData = new FormData();
		Array.from(fileList.file).map((torrent: Blob) => {
			formData.append("torrents", torrent);
		});

		return await fetch(baseURL + "add", {
			method: "POST",
			body: formData,
			credentials: "include",
		}).then((response) => {
			console.log(response);
		});
	},

	//TODO
	//addTrackers: async (hash: string, urls: string): Promise<string> => {}

	//TODO
	//editTracker: async (hash: string, origUrl: string, newUrl: string): Promise<string> => {}

	//TODO
	//removeTracker: async (hash: string, urls: string): Promise<string> => {}

	//TODO
	//addPeers: async (hash: string, peers: string): Promise<string> => {}

	//TODO
	//increasePrio: async (hash: string): Promise<string> => {}

	//TODO
	//decreasePrio: async (hash: string): Promise<string> => {}

	//TODO
	//topPrio: async (hash: string): Promise<string> => {}

	//TODO
	//bottomPrio: async (hash: string): Promise<string> => {}

	//TODO
	//filePrio: async (hash: string, id: string, priority: number): Promise<string> => {}

	//TODO
	//downloadLimit: async (hashes: string | 'all'): Promise<string> => {}

	//TODO
	//setDownloadLimit: async (hashes: string, limit: number): Promise<string> => {}

	//TODO
	//setShareLimits: async (hashes: string, ratioLimit: number, seedingTimeLimit: number, inactiveSeedingTimeLimit: number): Promise<string> => {}

	//TODO
	//uploadLimit: async (hashes: string | 'all'): Promise<string> => {}

	//TODO
	//setUploadLimit: async (hashes: string, limit: number): Promise<string> => {}

	//TODO
	//setLocation: async (hashes: string, location: string): Promise<string> => {}

	//TODO
	//rename: async (hash: string, name: string): Promise<string> => {}

	//TODO
	//setCategory : async (hash: string, category: string): Promise<string> => {}

	getCategories: async (): Promise<string[]> => {
		return await fetch(baseURL + "categories", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json().then((data) => Object.keys(data));
			} else {
				throw new Error("Error");
			}
		});
	}, //TESTED

	//TODO
	// addCategory: async (name: string, path: string): Promise<string> => {
	// 	return (await fetch(baseURL + "createCategory", {
	// 		method: "POST",
	// 		body: `category=${name}&savePath=${path}`,
	// 		credentials: "include",
	// 	}).then((response) => {
	// 		if (response.status == 200) {
	// 			return response.status;
	// 		} else {
	// 			throw new Error("Error");
	// 		}
	// 	})) as Promise<string>;
	// }, //NOT

	//TODO
	//editCategory: async (category: string, savePath: string): Promise<string> => {}

	//TODO
	// removeCategories: async (category: string): Promise<string> => {
	// 	return (await fetch(baseURL + "removeCategories", {
	// 		method: "POST",
	// 		body: `categories=${category}`,
	// 		credentials: "include",
	// 	}).then((response) => {
	// 		if (response.status == 200) {
	// 			return response.status;
	// 		} else {
	// 			throw new Error("Error");
	// 		}
	// 	})) as Promise<string>;
	// }, //NOT

	//TODO
	//addTags: async (hashes: string, tags: string[]): Promise<string> => {}

	//TODO
	//removeTags: async (hashes: string, tags: string[]): Promise<string> => {}

	getTags: async (): Promise<string[]> => {
		return await fetch(baseURL + "tags", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //TESTED

	//TODO
	//createTags: async (tags: string[]): Promise<string> => {}

	//TODO
	//deleteTags: async (tags: string[]): Promise<string> => {}

	//TODO
	//setAutoManagement: async (hashes: string, enable: boolean): Promise<string> => {}

	//TODO
	//toggleSequentialDownload: async (hashes: string): Promise<string> => {}

	//TODO
	//toggleFirstLastPiecePrio: async (hashes: string): Promise<string> => {}

	//TODO
	//setForceStart: async (hashes: string, value: boolean): Promise<string> => {}

	//TODO
	//setSuperSeeding: async (hashes: string, value: boolean): Promise<string> => {}

	//TODO
	//renameFile: async (hash: string, oldPath: string, newPath: string): Promise<string> => {}

	//TODO
	//renameFolder: async (hash: string, oldPath: string, newPath: string): Promise<string> => {}
};
