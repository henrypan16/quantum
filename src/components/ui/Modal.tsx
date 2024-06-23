import { ReactElement } from "react";

export interface ModalProps {
	children:  ReactElement | ReactElement[];
	modalId: string;
	hide: () => void;
	show: () => void;
}

const Header = ({ children }: { children: ReactElement }) => (
	<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
		{children}
	</div>
);

const Body = ({ children }: { children: ReactElement }) => (
	<div className="p-4 md:p-5 space-y-4">{children}</div>
);

const Footer = ({ children }: { children: ReactElement | ReactElement[] }) => (
	<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
		{children}
	</div>
);

export const Modal = ({ children, modalId, hide }: ModalProps) : ReactElement => {
	return (
		<div
			id={modalId}
			tabIndex={-1}
			className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
			<div className="relative p-4 w-full max-w-2xl max-h-full">
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<button
						className="absolute right-2 top-2  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
						onClick={() => { hide()}}>
						<svg
							className="w-3 h-3"
							aria-hidden="true"
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 14 14">
							<path
								stroke="currentColor"
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
							/>
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
					{children}
				</div>
			</div>
		</div>
	);
};

Modal.Header = Header;
Modal.Body = Body;
Modal.Footer = Footer;
