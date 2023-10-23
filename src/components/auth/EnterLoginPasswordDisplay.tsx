import { 
  FC, 
  Dispatch, 
  SetStateAction 
} from 'react'
import { ArrowRight } from 'lucide-react'

import {
  Input,
  Button,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui'
import { authDisplayEnum } from '@/constants'

interface IProps {
  email: string
  setCurrentDisplay: Dispatch<SetStateAction<authDisplayEnum>>
}

const EnterLoginPasswordDisplay: FC<IProps> = ({ 
  email,
  setCurrentDisplay
}) => {

  return (
    <DialogContent className='sm:max-w-md'>
      <DialogHeader>
        <DialogTitle className='text-2xl'>Log in</DialogTitle>
      </DialogHeader>
      <div className='flex items-center space-x-2'>
        <div className='grid flex-1 gap-4'>
          <Input type='email' placeholder={email} readOnly />
          <Input type='password' placeholder='Password' />
          <Button onClick={() => setCurrentDisplay(authDisplayEnum.ENTER_LOGIN_PASSWORD)}>
            Log in
            <ArrowRight className='h-4 w-4 ml-2'/>
          </Button>
          <Button 
            variant='link' 
            onClick={() => setCurrentDisplay(authDisplayEnum.FORGOT_PASSWORD)}
          > Forgot Password?
          </Button>
        </div>
      </div>
      <DialogFooter className='sm:justify-normal text-sm'>
        Don't have an account?
        <span 
          className='ml-2 hover:underline cursor-pointer' 
          onClick={() => setCurrentDisplay(authDisplayEnum.SIGNUP)}
        > Sign up
        </span>
      </DialogFooter>
    </DialogContent>
  )
}

export default EnterLoginPasswordDisplay
