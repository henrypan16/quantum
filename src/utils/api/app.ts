import { IBuildInfo, IPreferences } from "@utils/types";

let serverAddress = "/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
	serverAddress = `${serverAddress}/`;
}

const baseURL = `${serverAddress}api/v2/app/`;

export const appApi = {
	getVersion: async () => {
		return await fetch(baseURL + "version", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //TESTED

	getWebapiVersion: async () => {
		return await fetch(baseURL + "webapiVersion", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, // NOT

	getBuildInfo: async (): Promise<IBuildInfo> => {
		return await fetch(baseURL + "buildInfo", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT

	shutdown: async () => {
		return await fetch(baseURL + "shutdown", {
			method: "POST",
			credentials: "include",
		});
	}, //NOT

	getPreferences: async (): Promise<IPreferences> => {
		return await fetch(baseURL + "preferences", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	},

	setPreferences: async (preferences: IPreferences) => {
		return await fetch(baseURL + "preferences", {
			method: "POST",
			body: JSON.stringify(preferences),
			headers: {
				"Content-Type": "application/json",
			},
			credentials: "include",
		});
	}, //NOT

	getDefaultSavePath: async () => {
		return await fetch(baseURL + "defaultSavePath", {
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.text();
			} else {
				throw new Error("Error");
			}
		});
	}, //NOT
};
