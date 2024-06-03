import {Search} from './left/Search'
import {Button} from './left/Button'
import {Logo} from './left/Logo'

export const Left = () => {
  return (
    <div className="flex justify-start items-center">
        <Button/>
        <Logo/>
        <Search/>
    </div>
  )
}