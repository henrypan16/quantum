import { Modal as FlowbiteModal} from "flowbite";
import type { ModalOptions, InstanceOptions } from "flowbite";
import { useRef, useEffect, useId, forwardRef, useImperativeHandle } from "react";
import React from 'react'; 

export interface ModalProps {
	visible: bool;
	children: React.Node
	setIsOpen: (state: bool) => void
}

const Header = ({children} : {children: React.Node}) => 
	<div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
		{children}
	</div>

const Body = ({children} : {children: React.Node}) => 
	<div className="p-4 md:p-5 space-y-4">
		{children}
	</div>

const Footer = ({children} : {children: React.Node}) => 
	<div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
		{children}
	</div>

//Pass in a ref as a props to gain access to child function
//Ex1: Parent component have access to hide & show 
//     <Modal {...props} ref={parentRef}></Modal> 
//Ex2: Parent component does not have access to hide & show
//     <Modal {...props}></Modal>
export const Modal = forwardRef(function Modal({visible, children, setIsOpen}: ModalProps, modalRef) {
	if(!modalRef) {
		modalRef = useRef();
	}

	const modalId = useId();

	useEffect(() => {
		const modalElement: HTMLElement = document.getElementById(modalId);

		const modalOptions: ModalOptions = {
			placement: "center",
			backdrop: "dynamic",
			backdropClasses:
				"bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
			closable: true,
			onHide: () => setIsOpen(false)
		};

		const instanceOptions: InstanceOptions = {
			id: {modalId},
			override: true
		};

		modalRef.current = new FlowbiteModal(modalElement, modalOptions, instanceOptions);
	}, [modalId, setIsOpen]);

	useEffect(() => {
		if(visible) {
			modalRef.current.show();
		} else {
			modalRef.current.hide();
		}
			
	}, [visible])

	useImperativeHandle(modalRef, () => ({

		hide() {
		  modalRef.current.hide();
		},
		
		show() {
			modalRef.current.show();
		}
	  }));

	return (
		<div id={modalId} ref={modalRef} tabIndex="-1" aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
			<div className="relative p-4 w-full max-w-2xl max-h-full">
				<div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
					<button className="absolute right-2 top-2  text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" onClick={() => {modalRef.current.hide()}}>
						<svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
							<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"/>
						</svg>
						<span className="sr-only">Close modal</span>
					</button>
					{children}
				</div>
			</div>
		</div>
	);
});

Modal.Header = Header
Modal.Body = Body
Modal.Footer = Footer
