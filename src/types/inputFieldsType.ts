import { FieldError, UseFormReturn } from 'react-hook-form'

type inputFieldsType = {
  id: string
  type: string
  label: string
  validations?: validationsType
  register: UseFormReturn['register']
  errors: FieldError | undefined
}

type validationsType = {
  required: boolean
  maxLength: number
  minLength: number
  min: number
  max: number
  pattern: RegExp
  validate: () => string
}

export default inputFieldsType
