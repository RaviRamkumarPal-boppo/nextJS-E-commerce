import Image from 'next/image'
import Link from 'next/link'
import NotFoumdLogo from '../public/pal/404.jpg'

export default function NotFound() {
  return (
    <div className=''>
      <div className='text-center pb-[5rem]'>
        <Image src={NotFoumdLogo} className='w-[40rem] mx-auto'/>
        <Link href="/" className='text-yellow-500 text-3xl font-bold'>Return Home</Link>
      </div>
    </div>
  )
}