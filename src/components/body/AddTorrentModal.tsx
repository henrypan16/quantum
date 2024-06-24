import { Modal } from "../../components/ui/Modal";
import { AddTorrentForm } from "./AddTorrentForm";
import { useRef } from "react";

interface ModalProps {
	modalId: string;
	hide: () => void;
	show: () => void;
}

export const AddTorrentModal = ({ modalId, hide, show }: ModalProps) => {
	const submitRef = useRef<HTMLButtonElement>(null);

	return (
		<Modal modalId={modalId} hide={hide} show={show}>
			<Modal.Header>
				<h3 className="text-lg font-semibold text-gray-900 dark:text-white">
					Add Torrent
				</h3>
			</Modal.Header>
			<Modal.Body>
				<AddTorrentForm submitRef={submitRef} />
			</Modal.Body>
			<Modal.Footer>
				<div className="flex justify-between md:px-40 px-5">
					<input
						type="submit"
						form="addTorrentForm"
						className="w-24 text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-2 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:border-gray-500 dark:border dark:hover:bg-gray-800 dark:focus:ring-gray-600"></input>
					<button
						onClick={() => hide()}
						type="button"
						className="w-24 text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-2 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-gray-600 dark:border-gray-500 dark:border dark:hover:bg-gray-700 dark:focus:ring-gray-600">
						<span className="m-auto">Cancel</span>
					</button>
				</div>
			</Modal.Footer>
		</Modal>
	);
};
