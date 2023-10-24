import { 
  FC, 
  Dispatch, 
  SetStateAction, 
} from 'react'
import { authContentEnum } from '../AuthDialog'

interface IProps {
  changeContent: (content: authContentEnum) => void
}

const SignupContent:FC<IProps> = ({ changeContent }) => {
  return null
}

export default SignupContent
