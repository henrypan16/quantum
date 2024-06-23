import { useEffect, useRef, useId, useState } from "react";
import { Modal, ModalInterface, ModalOptions  } from "flowbite";

export const useModal = () => {
	const modalRef = useRef<ModalInterface>();
	const modalId = useId();
	const [isOpen, setIsOpen] = useState(false);

	useEffect(() => {
		const modalElement: HTMLElement | null = document.getElementById(modalId);

		const modalOptions: ModalOptions = {
			placement: "center",
			backdrop: "dynamic",
			backdropClasses:
				"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
			closable: true,
			onHide: () => setIsOpen(false),
		};

		modalRef.current  = new Modal(modalElement, modalOptions);
	}, [modalId, setIsOpen]);

	useEffect(() => {
		if (isOpen) {
			modalRef.current?.show();
		} else {
			modalRef.current?.hide();
		}
	}, [isOpen]);

	return {
		hide() {
			modalRef.current?.hide();
		},
		show() {
			modalRef.current?.show();
		},
		modalId,
	};
};
