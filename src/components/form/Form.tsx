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
import RadioInput from './RadioInput'

const MyForm: FC = ({
  formHook,
  onSubmit,
  inputFields,
  submitLabel,
}) => {
  const renderInputType = (input) => {
    switch (input.type) {
      case 'separator':
        return <Separator />
      case 'password':
        return <Input type={input.type} placeholder={input.label} />
      case 'date':
        return (
          <DateSelect 
            label='Birthday'
            minAge={8}
            maxAge={100}
          />
        )
      case 'tel':
      // return <PhoneInput {...props} />
      case 'select':
        return null
      case 'radio':
        return <RadioInput label={input.label} />
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
        <div className='space-y-8' />
        <Button className='w-full text-base'>{submitLabel}</Button>
      </form>
    </Form>
  )
}

export default MyForm
