import {
  Input,
  Button,
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
  buttonVariants
} from '@/components/ui'
import Link from 'next/link'
import { ArrowDownToLine } from 'lucide-react'

const AuthDialog = () => {

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant='outline'>
          <ArrowDownToLine className='mr-2 h-4 w-4' /> Get app
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          <DialogTitle>Get Xed App</DialogTitle>
          <DialogDescription>
            Download our application
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-4'>
            <Button variant='link'>Google Play Store</Button>
          </div>
          <div className='grid flex-1 gap-4'>
            <Button variant='link'>App Store</Button>
          </div>
        </div>
        <DialogFooter className='sm:justify-end'>
          <DialogClose asChild>
            <Button>Download</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
