'use client'
import { FC, useState, ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/ui'

import {
  LoginContent,
  SignupContent,
  ForgotPasswordContent,
  EnterLoginPasswordContent,
} from './contents'

export enum authContentEnum {
  LOGIN = 'LOGIN',
  SIGNUP = 'SIGNUP',
  FORGOT_PASSWORD = 'FORGOT_PASSWORD',
  ENTER_LOGIN_PASSWORD = 'ENTER_LOGIN_PASSWORD',
}

interface IProps {
  triggerComponent: ReactNode
}

const AuthDialog: FC<IProps> = ({ triggerComponent }) => {
  const [email, setEmail] = useState<string>('')
  const [prevDisplay, setPrevDisplay] = useState<authContentEnum|null>(null)
  const [currentDisplay, setCurrentDisplay] = useState<authContentEnum>(authContentEnum.LOGIN)

  const changeContent = (content: authContentEnum): void => {
    setPrevDisplay(currentDisplay)
    setCurrentDisplay(content)
  }

  const renderContent = () => {
    switch (currentDisplay) {
      case authContentEnum.LOGIN:
        return <LoginContent setEmail={setEmail} changeContent={changeContent} />

      case authContentEnum.SIGNUP: 
        return <SignupContent changeContent={changeContent} />

      case authContentEnum.FORGOT_PASSWORD: 
        return <ForgotPasswordContent changeContent={changeContent} />

      case authContentEnum.ENTER_LOGIN_PASSWORD:
        return <EnterLoginPasswordContent email={email} changeContent={changeContent} />

      default:
        return null
    }
  }

  return (
    <Dialog>
      <DialogTrigger asChild>
        {triggerComponent()}
      </DialogTrigger>
      <DialogContent>
        {prevDisplay && (
          <button
            className='absolute top-2 left-4 w-4 h-4'
            onClick={() => setCurrentDisplay(prevDisplay && prevDisplay)}
          >
            <ArrowLeft className='absolute w-4 h-4'/>
          </button>
        )}
        {renderContent()}
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
