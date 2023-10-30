'use client'
import { FC, useState, ReactNode } from 'react'
import { ArrowLeft } from 'lucide-react'
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from '@/components/shadcn-ui'

// Auth State Components
import Login from './Login'
import SignUp from './SignUp'
import ResetPassword from './ResetPassword'
import EnterLoginPassword from './EnterLoginPassword'

export enum authStateEnum {
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
  const [prevState, setPrevState] = useState<authStateEnum|null>(null)
  const [currentState, setCurrentState] = useState<authStateEnum>(authStateEnum.LOGIN)

  const changeState = (state: authStateEnum): void => {
    setPrevState(currentState)
    setCurrentState(state)
  }

  const renderState = () => {
    const props = { changeState };

    switch (currentState) {
      case authStateEnum.LOGIN:
        return <Login setEmail={setEmail} {...props} />

      case authStateEnum.SIGNUP: 
        return <SignUp {...props} />

      case authStateEnum.FORGOT_PASSWORD: 
        return <ResetPassword {...props} />

      case authStateEnum.ENTER_LOGIN_PASSWORD:
        return <EnterLoginPassword email={email} {...props} />

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
        {prevState && (
          <button
            className='absolute top-2 left-4 w-4 h-4'
            onClick={() => setCurrentState(prevState && prevState)}
          >
            <ArrowLeft className='absolute w-4 h-4'/>
          </button>
        )}
        {renderState()}
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
