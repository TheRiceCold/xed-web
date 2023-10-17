import { useState } from 'react'
import {
  TextField,
  InputAdornment
} from '@mui/material'
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material'

interface IProps {
  id: string
  label: string
  errors: any
}

const PasswordInput = ({
  id,
  label,
  errors,
  ...props
}: IProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false)

  const passwordIcon = () => (
    <InputAdornment
      position='end'
      style={{ cursor: 'pointer', color: 'white' }}
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <Visibility /> : <VisibilityOff />}
    </InputAdornment>
  )

  return (
    <TextField
      id={id}
      label={label}
      variant='outlined'
      error={!!errors[id]}
      type={showPassword ? 'text' : 'password'}
      InputProps={{ endAdornment: passwordIcon() }}
      helperText={errors[id] ? errors[id].message : null}
      {...props}
    />
  )
}

export default PasswordInput
