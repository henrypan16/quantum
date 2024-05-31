import {Navbar} from '../components/navbar/Navbar'
import {Sidebar} from '../components/sidebar/Sidebar'
import {Body} from '../components/body/Body'

export const Dashboard = () => {
  return (
    <div>
        <div className="antialiased bg-gray-50 dark:bg-gray-900">
            <Navbar />
            <Sidebar />
            <Body />
        </div>
    </div>
 )
}
