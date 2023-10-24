import { FC } from 'react'
import { ArrowRight } from 'lucide-react'

import {
  Input,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui'
import { authContentEnum } from '../AuthDialog'

interface IProps {
  email: string
  changeContent: (content: authContentEnum) => void
}

const EnterLoginPasswordDisplay: FC<IProps> = ({ email, changeContent }) => {

  return (
    <>
      <DialogHeader>
        <DialogTitle className='text-2xl'>Log in</DialogTitle>
      </DialogHeader>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Input type='email' placeholder={email} readOnly />
          <Input type='password' placeholder='Password' />
          <Button onClick={() => changeContent(authContentEnum.ENTER_LOGIN_PASSWORD)}>
            Log in
            <ArrowRight className='h-4 w-4 ml-2'/>
          </Button>
          <Button 
            variant='link' 
            onClick={() => changeContent(authContentEnum.FORGOT_PASSWORD)}
          > Forgot Password?
          </Button>
        </div>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        Don't have an account?
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => changeContent(authContentEnum.SIGNUP)}
        > Sign up
        </span>
      </DialogFooter>
    </>
  )
}

export default EnterLoginPasswordDisplay
