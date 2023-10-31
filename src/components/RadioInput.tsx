import { FC } from 'react'
import { 
  Label,
  FormLabel,
  RadioGroup,
  RadioGroupItem,
} from '@/components/shadcn-ui'

const RadioInput: FC = ({ label }) => { 

  return (
    <>
      <FormLabel>{label}</FormLabel>
       <RadioGroup defaultValue='' className='!flex gap-8 ml-4'>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='male' id='male' />
          <Label htmlFor='male'>Male</Label>
        </div>
        <div className='flex items-center space-x-2'>
          <RadioGroupItem value='female' id='female' />
          <Label htmlFor='female'>Female</Label>
        </div>
      </RadioGroup>
    </>
  )
}

export default RadioInput
