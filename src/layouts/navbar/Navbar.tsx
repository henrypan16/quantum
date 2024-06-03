import { Left } from "./Left";
import { Right } from "./Right";

export const Navbar = () => {
  return (
    <>
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
            <div className="flex flex-wrap justify-between items-center">
                <Left/>
                <Right/>
            </div>
        </nav>
    </>
  )
}