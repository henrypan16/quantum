import React from "react";

export const Logo = () => {
	return (
		<a
			href="/"
			className="flex items-center bg-gradient-to-r from-sky-100 to-sky-300 bg-clip-text mb-6">
			<svg
				className="w-[40px] h-[40px] text-sky-200"
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
			<span className="ml-2 self-center text-2xl font-semibold whitespace-nowrap text-transparent">
				Quantum
			</span>
		</a>
	);
};
