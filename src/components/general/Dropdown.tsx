import { DropdownMenu } from "./DropdownMenu";
import { DropdownToggle } from "./DropdownToggle";
import { useRef, useEffect } from "react";
import { Dropdown as FlowbiteDropdown } from "flowbite";

interface RefObject {
  current: {
    toggle: () => void;
  };
}

interface DropdownButtonProps {
  children: React.ReactNode;
  icon: React.ReactNode;
  menu: string;
  toggle: string;
  title: string;
}

export const Dropdown = ({children, menu, toggle, title, icon}: DropdownButtonProps) => {
  const dropdown: RefObject = useRef<HtmlDivElement>();


  useEffect(() => {
    console.log(children)
    // set the dropdown menu element
    const targetEl = document.getElementById(menu);

    // set the element that trigger the dropdown menu on click
    const triggerEl = document.getElementById(toggle);

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
      <DropdownToggle id={toggle} icon={icon}/>
      <DropdownMenu title={title} id={menu}>
        {children}
      </DropdownMenu>
    </>
  )
}
