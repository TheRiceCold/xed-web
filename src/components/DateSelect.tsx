import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/shadcn-ui'
import { capitalize } from '@/lib/utils'

const DateSelect = ({ label }) => {
  const monthNames = [ 
    'january', 'february', 'march',
    'april', 'may', 'june',
    'july', 'august', 'september',
    'october', 'november', 'december'
  ]

  return (
    <>
      <p className='text-sm'>{label}</p>
      <div className='flex gap-4'>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Month' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              {monthNames.map((monthName: string, idx: number) => (
                <SelectItem 
                  key={`${monthName}-${idx}`}
                  value={monthName}
                >{capitalize(monthName)}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Day' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
            </SelectGroup>
          </SelectContent>
        </Select>

        <Select>
          <SelectTrigger>
            <SelectValue placeholder='Year' />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </>
  )
}

export default DateSelect
