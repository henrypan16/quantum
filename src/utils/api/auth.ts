let serverAddress = "/";

if (serverAddress.substring(serverAddress.length - 1) !== "/") {
	serverAddress = `${serverAddress}/`;
}

const baseURL = `${serverAddress}api/v2/auth/`;

interface Credential {
	username: string;
	password: string;
}
export const authApi = {
	login: async ({ username, password }: Credential) => {
		const usernameEncode = encodeURIComponent(username);
		const passwordEncode = encodeURIComponent(password);
		return await fetch(baseURL + "login", {
			method: "POST",
			body: `username=${usernameEncode}&password=${passwordEncode}`,
			credentials: "include",
			headers: {
				"Content-Type":
					"application/x-www-form-urlencoded; charset=UTF-8",
			},
		});
	}, //TESTED

	logout: async () => {
		return await fetch(baseURL + "logout", {
			method: "POST",
		});
	}, //NOT
};
