import { SyncMainData } from "@utils/types";

let serverAddress = "/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
	serverAddress = `${serverAddress}/`;
}

const baseURL = `${serverAddress}api/v2/sync/`;

export const syncApi = {
	getMainData: async (rid = 0): Promise<SyncMainData> => {
		return await fetch(`${baseURL}maindata?rid=${rid}`, {
			method: "GET",
			credentials: "include",
		}).then((response) => {
			if (response.status == 200) {
				return response.json();
			} else {
				throw new Error("Error");
			}
		});
	}, //TESTED
};
