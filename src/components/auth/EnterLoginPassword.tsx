import { FC } from 'react'
import { ArrowRight } from 'lucide-react'

import {
  Input,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/shadcn-ui'
import { authStateEnum } from './AuthDialog'

interface IProps {
  email: string
  changeState: (state: authStateEnum) => void
}

const EnterLoginPassword: FC<IProps> = ({ email, changeState }) => {

  return (
    <>
      <DialogHeader className='mt-4'>
        <DialogTitle className='text-2xl'>
          Log in
        </DialogTitle>
      </DialogHeader>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Input type='email' placeholder={email} readOnly />
          <Input type='password' placeholder='Password' />
          <Button onClick={() => changeState(authStateEnum.ENTER_LOGIN_PASSWORD)}>
            Log in
            <ArrowRight className='h-4 w-4 ml-2'/>
          </Button>
          <Button 
            variant='link' 
            onClick={() => changeState(authStateEnum.FORGOT_PASSWORD)}
          > Forgot Password?
          </Button>
        </div>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        {"Don't have an account?"}
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => changeState(authStateEnum.SIGNUP)}
        > Sign up
        </span>
      </DialogFooter>
    </>
  )
}

export default EnterLoginPassword
