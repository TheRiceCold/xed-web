'use client'
import { FC, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import {
  Button,
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui'

import {
  LoginContent,
  SignupContent,
  EnterLoginPasswordContent,
} from './contents'

export enum authContentEnum {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  ENTER_LOGIN_PASSWORD = 'ENTER_LOGIN_PASSWORD',
}

const AuthDialog: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [prevDisplay, setPrevDisplay] = useState<authContentEnum>(authContentEnum.LOGIN)
  const [currentDisplay, setCurrentDisplay] = useState<authContentEnum>(authContentEnum.LOGIN)

  const changeContent = (content: authContentEnum): void => {
    setPrevDisplay(currentDisplay)
    setCurrentDisplay(content)
  }

  const renderContent = () => {
    switch (currentDisplay) {
      case authContentEnum.LOGIN:
        return <LoginContent setEmail={setEmail} changeContent={changeContent} />

      case authContentEnum.ENTER_LOGIN_PASSWORD:
        return <EnterLoginPasswordContent email={email} changeContent={changeContent} />
    
      case authContentEnum.SIGNUP: 
        return <SignupContent changeContent={changeContent} />

      default:
        return null
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          Log In
        </Button>
      </DialogTrigger>
      <DialogContent>
        {prevDisplay && (
          <Button 
            variant='ghost' 
            className='absolute top-2 left-2 w-8 h-8'
            onClick={() => setCurrentDisplay(prevDisplay && prevDisplay)}
          >
            <ArrowLeft className='absolute w-4 h-4'/>
          </Button>
        )}
        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
