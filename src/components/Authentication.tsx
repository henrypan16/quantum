import { useState } from "react";
export const Authentication = ({
	login,
}: {
	login: (username: string, password: string) => void;
}) => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const submit = (e: React.FormEvent) => {
		e.preventDefault();
		login(username, password);
	};

	return (
		<section className="bg-gray-50 dark:bg-gray-900 h-screen">
			<div className="flex flex-col items-center justify-center px-6 py-8 mx-auto my-auto md:h-screen lg:py-0 fixed inset-0">
				<a
					href="/"
					className="flex justify-between items-center bg-gradient-to-r from-sky-100 to-sky-300 bg-clip-text md:mb-6">
					<svg
						className="w-[60px] h-[60px] text-sky-200"
						aria-hidden="true"
						xmlns="http://www.w3.org/2000/svg"
						width="24"
						height="24"
						fill="none"
						viewBox="0 0 24 24">
						<path
							stroke="currentColor"
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="m8 8-4 4 4 4m8 0 4-4-4-4m-2-3-4 14"
						/>
					</svg>
					<span className="ml-2 self-center text-3xl font-semibold whitespace-nowrap text-transparent">
						Quantum qBittorrent UI
					</span>
				</a>
				<div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
					<div className="p-6 space-y-4 md:space-y-6 sm:p-8">
						<h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
							Sign in
						</h1>
						<form
							className="space-y-4 md:space-y-6"
							onSubmit={submit}
							method="post">
							<div>
								<label
									htmlFor="email"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Your username
								</label>
								<input
									value={username}
									onChange={(e) => {
										setUsername(e.target.value);
									}}
									type="text"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									placeholder="Username"
									required
								/>
							</div>
							<div>
								<label
									htmlFor="password"
									className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
									Password
								</label>
								<input
									value={password}
									onChange={(e) => {
										setPassword(e.target.value);
									}}
									type="password"
									placeholder="••••••••"
									className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
									required
								/>
							</div>
							<div className="flex items-center justify-between">
								<div className="flex items-start">
									<div className="flex items-center h-5">
										<input
											id="remember"
											aria-describedby="remember"
											type="checkbox"
											className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-2 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800"
										/>
									</div>
									<div className="ml-3 text-sm">
										<label
											htmlFor="remember"
											className="text-gray-500 dark:text-gray-300">
											Remember me
										</label>
									</div>
								</div>
							</div>
							<div className="flex">
								<button
									type="submit"
									className="w-1/3 m-auto text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-700 dark:hover:bg-primary-700 dark:focus:ring-primary-800 dark:hover:bg-gray-600">
									Sign in
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
};
