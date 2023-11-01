import { TextField } from '@mui/material'
import { inputFieldsType } from '@/types'

const TextInput = ({
  id,
  label,
  validations,
  register,
  errors
}: inputFieldsType) => (
  <TextField
    id={id}
    label={label}
    fullwidth
    margin='normal'
    variant='standard'
    error={!!errors[id]}
    {...register(id, validations)}
  />
)

export default TextInput
