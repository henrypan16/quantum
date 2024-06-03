import {Notification} from './Notification'
import {ToggleSearch} from './ToggleSearch'
import {Application} from './Application'
import {User} from './User'
import {Search} from './Search'
import {Button} from './Button'
import {Logo} from './Logo'

export const Navbar = () => {
  return (
    <>
        <nav className="bg-white border-b border-gray-200 px-4 py-2.5 dark:bg-gray-800 dark:border-gray-700 fixed left-0 right-0 top-0 z-50">
            <div className="flex flex-wrap justify-between items-center">
              <Button/>
              <Logo/>
              <Search/>
              <ToggleSearch/>
              <Notification/>
              <Application/>
              <User/>
            </div>
        </nav>
    </>
  )
}
