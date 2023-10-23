'use client'
import { FC, useState } from 'react'
import {
  Button,
  Dialog,
  DialogTrigger,
} from '@/components/ui'
import { authDisplayEnum } from '@/constants'

import LoginDisplay from './LoginDisplay'
import EnterLoginPasswordDisplay from './EnterLoginPasswordDisplay'

const AuthDialog: FC = () => {
  const [email, setEmail] = useState<string>('')
  const [currentDisplay, setCurrentDisplay] = useState<authDisplayEnum>(authDisplayEnum.LOGIN)

  const renderDisplay = () => {
    switch (currentDisplay) {
      case authDisplayEnum.LOGIN:
        return (
          <LoginDisplay 
            setEmail={setEmail}
            setCurrentDisplay={setCurrentDisplay} 
          />
        )
      case authDisplayEnum.ENTER_LOGIN_PASSWORD:
        return (
          <EnterLoginPasswordDisplay 
            email={email}
            setCurrentDisplay={setCurrentDisplay} 
          />
        )
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
      {renderDisplay()}
    </Dialog>
  )
}

export default AuthDialog
