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
  Separator,
} from '@/components/ui'
import { 
  Mail,
  ArrowRight, 
} from 'lucide-react'

const AuthDialog = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className=''>
          Log In
        </Button>
      </DialogTrigger>
      <DialogContent className='sm:max-w-md'>
        <DialogHeader>
          {/* <DialogDescription> */}
            {/* {'By continuing, you agree to our '} */}
            {/* <Link href='/' className='hover:underline font-bold'> */}
            {/*   User Agreement */}
            {/* </Link>  */}
            {/*   {'and acknowledge that you understand the '} */}
            {/* <Link href='/' className='hover:underline font-bold'> */}
            {/*   Privacy Policy. */}
            {/* </Link> */}
          {/* </DialogDescription> */}
        </DialogHeader>
        <DialogTitle className='text-2xl'>XED</DialogTitle>
        <DialogDescription>
          Welcome to your corner of the internet. You'll never be bored again.
        </DialogDescription>
        <div className='flex items-center space-x-2'>
          <div className='grid flex-1 gap-4'>
            <Button variant='outline'>
              <Mail className='mr-2 h-4 w-4' /> Login with Gmail
            </Button>
            <Button variant='outline'>
              <Mail className='mr-2 h-4 w-4' /> Login with Apple
            </Button>
            <span className='flex justify-center'>
              OR
            </span>
            <Input type='email' placeholder='Email or username' />
            <Button>
              Continue 
              <ArrowRight className='h-4 w-4 ml-2'/>
            </Button>
            <Button variant='link'>Forgot Password?</Button>
          </div>
        </div>
        <DialogFooter className='sm:justify-normal'>
          Don't have an account?
          <span className='ml-2 hover:underline cursor-pointer'>
            Sign up
          </span>
          {/* <DialogClose asChild> */}
          {/*   <Button>Login</Button> */}
          {/* </DialogClose> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

export default AuthDialog
