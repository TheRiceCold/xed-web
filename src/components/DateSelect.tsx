'use client'
import { 
  FC, 
  useState,
  SyntheticEvent
} from 'react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui'
import { capitalize, range } from '@/lib/utils'

interface IProps {
  label: string
  minAge: number
  maxAge: number
}

const DateSelect: FC<IProps> = ({ label, minAge, maxAge }) => {
  const [day, setDay] = useState<number>(12)
  const [year, setYear] = useState(1998)
  const [month, setMonth] = useState(11)

  const months = [ 
    'january', 'february', 'march',
    'april', 'may', 'june',
    'july', 'august', 'september',
    'october', 'november', 'december'
  ]

  const numOfDays = daysInMonth(year, month)
  const days = range(1, numOfDays)

  const currentYear: number = new Date().getFullYear()
  const minYear: number = currentYear - maxAge
  const maxYear: number = currentYear - minAge
  const years = range(minYear, maxYear)

  function daysInMonth(year, month) {
    switch (month) {
      case 2:
        const leapYear = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0)
        return leapYear ? 29 : 28

      case 1: case 3: case 5: case 7: case 8: case 10: case 12:
        return 31

      default:
        return 30
    }
  }

  const renderSelect = (setValue, value, options, label) => (
    <Select 
      value={value} 
      onChange={e => setValue(e.target.value)}
    > 
      <SelectTrigger>
        <SelectValue placeholder={capitalize(label)} />
      </SelectTrigger>
      <SelectContent className='h-52'>
        <SelectGroup>
          {options.map((val, idx) => (
            <SelectItem value={val} key={`${val}-${idx}`}>
              {capitalize(val.toString())}
            </SelectItem>
          ))} 
        </SelectGroup>
      </SelectContent>
    </Select>
  )

  return (
    <>
      <p className='text-sm'>{label}</p>
      <div className='flex gap-4'>
        {renderSelect(setMonth, month, months, 'month')}
        {renderSelect(setDay, day, days, 'day')}
        {renderSelect(setYear, year, years, 'year')}
      </div>
    </>
  )
}

export default DateSelect
