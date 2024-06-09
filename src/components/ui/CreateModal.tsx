import { Modal } from 'flowbite';
import type { ModalOptions, ModalInterface } from 'flowbite';
import type { InstanceOptions } from 'flowbite';
import {useRef, useEffect} from 'react'

export const CreateModal = ({Button, children, id, setClose}) => {
    const modalRef = useRef<ModalInterface>();

    useEffect(() => {
        const modalElement: HTMLElement = document.getElementById(id);

        const modalOptions: ModalOptions = {
            placement: 'center',
            backdrop: 'dynamic',
            backdropClasses:
                'bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40',
            closable: true,
        };
        

        modalRef.current = new Modal(modalElement, modalOptions);
        document.addEventListener(`close-${id}`, () => {
            modalRef.current.hide();
        })
    }, [])
    

  return (
    <>
        <button onClick={() => modalRef.current.show()}>
            {Button}
        </button>
        
        {/* <button onClick={() => {modalRef.current.toggle()}} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">
            Toggle {id}
        </button> */}

        <div tabIndex="-1" id={id} aria-hidden="true" className="hidden overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full">
            {children}
        </div>
        
    </>
  )
}
