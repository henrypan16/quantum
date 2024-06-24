import { authApi } from "@utils/api/auth";
import { useMutation } from "@tanstack/react-query";
import { useState, useEffect } from "react";

export const useAuth = () => {
	const [user, setUser] = useState({
		username: localStorage.getItem("username") || "",
		password: localStorage.getItem("password") || "",
	});
	const [status, setStatus] = useState(false);

	useEffect(() => {
		mutation.mutate({ username: user.username, password: user.password });
	}, []);

	const mutation = useMutation({
		mutationFn: authApi.login,
		onSuccess: (data: Response) => {
			data.text()
				.then((response) => {
					if (response === "Ok.") {
						localStorage.setItem("username", user.username);
						localStorage.setItem("password", user.password);
						setStatus(true);
					} else {
						localStorage.clear();
					}
				})
				.catch((error: unknown) => {
					console.log(error);
				});
		},
	});

	const login = (username: string, password: string) => {
		setUser({ username: username, password: password });
		mutation.mutate({ username: username, password: password });
	};

	return {
		login,
		user,
		status,
	};
};
