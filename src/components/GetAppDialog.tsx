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
            By continuing, you agree to our 
            <Link href='/' className={buttonVariants({ variant: 'link' })}>
              User Agreement
            </Link> and acknowledge 
            that you understand the 
            <Link href='/' className={buttonVariants({ variant: 'link' })}>
              Privacy Policy.
            </Link>
          </DialogDescription>
        </DialogHeader>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-4'>
            <Button variant='link'>Forgot Password</Button>
          </div>
        </div>
        <DialogFooter className='sm:justify-end'>
          Don't have an account? 
          <Button variant='link'>Sign up</Button>
          <DialogClose asChild>
            <Button>Login</Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
