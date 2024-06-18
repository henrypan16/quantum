import { Dashboard } from "./components/Dashboard";
import { Authentication } from "./components/Authentication";
import { useAuth } from "./utils/useAuth";
import React from "react";

const App = () => {
	const { status, login } = useAuth();

	return (
		<>
			{/*eslint-disable-next-line @typescript-eslint/no-misused-promises*/}
			{status ? <Dashboard /> : <Authentication login={login} />}
		</>
	);
};

export default App;
