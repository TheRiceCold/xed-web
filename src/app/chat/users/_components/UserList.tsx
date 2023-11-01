import { FC } from 'react'
import UserBox from './UserBox'

const UserList: FC = () => {
  return (
    <aside className="
      fixed 
      inset-y-0 
      pb-20
      lg:pb-0 
      lg:left-16
      lg:w-80 
      lg:block
      overflow-y-auto 
      border-r 
      border-gray-200
      block 
      w-full 
      left-0
    ">
      <div className='px-4'>
        <div className='
          mb-4 
          pt-4
          text-xl
          font-bold 
          text-neutral-800
        '> 
          People
        </div>

        <UserBox />
        <UserBox />
      </div>
    </aside>
  )
}

export default UserList
