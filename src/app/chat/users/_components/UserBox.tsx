'use client'
import { useState, useCallback } from 'react'
import { useRoutes } from '@/hooks'

import Avatar from '@/components/chat/ChatAvatar'

const UserBox = () => {
  const router = useRoutes()
  const [isLoading, setIsLoading] = useState(false)

  const handleClick = useCallback(() => {
    setIsLoading(true) 
  }, [])

  return (
    <div className="
      w-full
      relative
      flex
      items-center
      space-x-3
      bg-white
      hover:bg-neutral-100
      rounded-md
      transition
      cursor-pointer"
      onClick={handleClick}
    >
      <div className='mt-2 ml-2'>
        <Avatar />
      </div>
      <div className='min-w-0 flex-1'>
        <div className='focus:outline-none'>
          <div className='flex justify-between items-center mb-1'>
            <p className='text-sm font-medium text-gray-900'>
              Name
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserBox
