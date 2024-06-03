import {Navbar} from './navbar/Navbar';
import {Sidebar} from './sidebar/Sidebar'; 
import {ReactNode} from 'react';

export const MainLayout = ({children}: {children: ReactNode}) => {
  return (
    <div>
        <Navbar />
        <Sidebar />
        {children}
    </div>
  )
}
