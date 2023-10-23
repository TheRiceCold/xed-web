import { 
  FC, 
  Dispatch, 
  SetStateAction, 
} from 'react'
import {
  Input,
  Button,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from '@/components/ui'
import { authContentEnum } from '../AuthDialog'

interface IProps {
  changeContent: (content: authContentEnum) => void
}

const ForgotPasswordContent: FC<IProps> = ({ changeContent }) => {
  return (
    <DialogHeader className='mt-4'>
      <DialogTitle className='text-2xl'>Forgot Password</DialogTitle>
    </DialogHeader>
  )
}

export default ForgotPasswordContent
