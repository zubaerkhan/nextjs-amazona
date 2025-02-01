import { UserIcon } from 'lucide-react'
import Link from 'next/link'
import CartButton from './cart-button'

export default function Menu() {
  return (
    <div className='flex justify-end'>
      <div></div>
      <nav className='flex gap-3 w-full'>
        <Link href='/cart' className='header-button flex flex-col items-center'>
          <UserIcon className='h-8 w-8' />
          <span className='font-bold'>Sign in</span>
        </Link>

        <nav className='flex gap-3 w-full'>
            <CartButton />
          </nav>
      </nav>
    </div>
  )
}