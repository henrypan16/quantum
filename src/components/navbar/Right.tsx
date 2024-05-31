import {Notification} from './right/Notification'
import {ToggleSearch} from './right/ToggleSearch'
import {Application} from './right/Application'
import {User} from './right/User'

export const Right = () => {
  return (
    <div className="flex items-center lg:order-2">
        <ToggleSearch/>
        <Notification/>
        <Application/>
        <User/>
    </div>
  )
}
