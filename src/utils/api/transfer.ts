import { ITransferInfo } from "@utils/types";

let serverAddress = "/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
	serverAddress = `${serverAddress}/`;
}

const baseURL = `${serverAddress}api/v2/transfer/`;

export const transferApi = {
	getInfo: async (): Promise<ITransferInfo> => {
		return await fetch(baseURL + "info", {
			credentials: "include", // include, *same-origin, omit
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	},

	getSpeedLimitsMode: async (): Promise<boolean> => {
		return await fetch(baseURL + "speedLimitsMode", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	},

	toggleSpeedLimitsMode: async () => {
		return await fetch(baseURL + "toggleSpeedLimitsMode", {
			credentials: "include",
		});
	},

	getDownloadLimit: async (): Promise<number> => {
		return await fetch(baseURL + "downloadLimit", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	},

	setDownloadLimit: async (limit: number) => {
		return await fetch(baseURL + "setDownloadLimit", {
			method: "POST",
			body: `limit=${limit}`,
			credentials: "include",
			headers: {
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
			},
		});
	},

	getUploadLimit: async (): Promise<number> => {
		return await fetch(baseURL + "uploadLimit", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	},

	setUploadLimit: async (limit: number) => {
		return await fetch(baseURL + "setUploadLimit", {
			method: "POST",
			body: `limit=${limit}`,
			credentials: "include",
			headers: {
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
			},
		});
	},
};
