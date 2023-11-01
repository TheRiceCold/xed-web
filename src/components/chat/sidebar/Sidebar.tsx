import { ReactNode } from 'react'
import MobileFooter from './MobileFooter'
import DesktopSidebar from './DesktopSidebar'

const Sidebar = ({ children }: ReactNode) => (
  <div className='h-full'>
    <DesktopSidebar />
    <MobileFooter />
    <main className='lg:pl-16 h-full'>
      <div className='h-full'>
        {children}
      </div>
    </main>
  </div>
) 

export default Sidebar
