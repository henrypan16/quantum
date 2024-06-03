import { useRef, useEffect } from "react";
import { Dropdown as FlowbiteDropdown } from "flowbite";

interface RefObject {
  current: {
    toggle: () => void;
  };
}

interface DropdownButtonProps {
  button: React.ReactNode;
  children: React.ReactNode;
  id: string;
}

export const CreateDropdown = ({button, children, id}: DropdownButtonProps) => {
  const dropdown: RefObject = useRef<HtmlDivElement>();

  useEffect(() => {
    // set the dropdown menu element
    const targetEl = document.getElementById(id + '-menu');

    // set the element that trigger the dropdown menu on click
    const triggerEl = document.getElementById(id + '-button');

    const options = {
      placement: 'bottom',
      triggerType: 'click',
      offsetSkidding: 0,
      offsetDistance: 10,
      delay: 300,
      ignoreClickOutsideClass: false
    }

    dropdown.current = new FlowbiteDropdown(targetEl, triggerEl, options)
  })
  
  return (
    <>
      {/* Dropdown Button */}
      <button type="button" id={id + '-button'} className="flex items-center p-2 w-full text-base font-medium text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">
        {button}
      </button>

      <ul className="hidden space-y-2" id={id + '-menu'}>
        {children}
      </ul>
      {/* Dropdown Menu */}


    </>
  )
}