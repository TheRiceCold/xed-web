import { FC, ReactElement } from 'react'
import MobileFooter from './MobileFooter'
import DesktopSidebar from './DesktopSidebar'

interface IProps {
  children: ReactElement
}

const Sidebar: FC<IProps> = ({ children }) => (
  <div className='h-full'>
    <DesktopSidebar />
    <MobileFooter />
    <main className='lg:pl-16 h-full'>
      {children}
    </main>
  </div>
) 

export default Sidebar
