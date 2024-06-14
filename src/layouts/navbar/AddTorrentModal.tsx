import { Modal, ModalProps } from "../../components/ui/Modal";
import { AddTorrentForm } from './AddTorrentForm'

export const AddTorrentModal = (props : ModalProps) => {
  return (
    <Modal {...props}>
        <Modal.Header>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Add Torrent
            </h3>
        </Modal.Header>
        <Modal.Body>
            <AddTorrentForm/>
        </Modal.Body>
        <Modal.Footer>
            <button
                type="submit"
                className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Add
            </button>
            <button
                onClick={props.closeModal}
                type="button"
                className="text-white inline-flex items-center bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                Cancel
            </button>
        </Modal.Footer>
    </Modal>
  )
}
