import { useState } from 'react'
import {
  TextField,
  InputAdornment
} from '@mui/material'
import {
  Visibility,
  VisibilityOff
} from '@mui/icons-material'
import { inputFieldsType } from '@/types'

const PasswordInput = ({
  id,
  label,
  validations,
  register,
  errors
}: inputFieldsType) => {
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
      margin='normal'
      variant='standard'
      fullwidth
      error={!!errors[id]}
      type={showPassword ? 'text' : 'password'}
      InputProps={{ endAdornment: passwordIcon() }}
      helperText={errors[id] ? errors[id].message : null}
      {...register(id, validations)}
    />
  )
}

export default PasswordInput
