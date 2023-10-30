'use client'
import {
  FC,
  useState,
  Dispatch,
  SetStateAction
} from 'react'
import { UseFormReturn } from 'react-hook-form'
import {
  Form,
  FormItem,
  FormField,
  FormControl,
  FormMessage,

  Input,
  Button,
  Separator,
} from '@/components/shadcn-ui'
import DateSelect from './DateSelect'

const MyForm: FC = ({
  formHook,
  onSubmit,
  inputFields,
  submitLabel,
}) => {
  const handleCloseAlert = (event?: React.SyntheticEvent, reason?: string) => {
    if (reason === 'clickaway') return
    setShowAlert(false)
  }

  const renderInputType = (input) => {
    switch (input.type) {
      case 'separator':
        return <Separator />
      case 'password':
        return <Input type={input.type} placeholder={input.label} />
      case 'date':
        return <DateSelect label={input.label} />
      case 'tel':
      // return <PhoneInput {...props} />
      case 'select':
        return (
          <SelectInput 
            register={register}
            {...props} 
          />
        )
      case 'radio':
        return <div className='text-sm'>{input.label}</div>
      case 'textarea':
      // return <TextArea {...props} />
      case 'image':
      // return <ImageUpload {...props} />
      default:
        return <Input type={input.type} placeholder={input.label} />
    }
  };

  return (
    <Form {...formHook}>
      <form onSubmit={formHook.handleSubmit(onSubmit)} className='space-y-4'>
        {inputFields.map((input, idx) => !!input.id ? (
          <FormField
            key={`${input.id}-${input.type}-${idx}`}
            control={formHook.control}
            name={input.id}
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  {renderInputType(input)}
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
            <div key={`${input.type}-${idx}`}> 
              {renderInputType(input)}
            </div>
          )
        )}
        <Button>{submitLabel}</Button>
      </form>
    </Form>
  )
}

export default MyForm

// interface IProps {
//   inputFields: Array<inputFieldsType>
//   onSubmit: () => void
//   formHook: UseFormReturn<IFormInput>
//   alertMessage: string
//   submitLabel: string
// }
