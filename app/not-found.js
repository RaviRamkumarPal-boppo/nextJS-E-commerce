import Link from 'next/link'

export default function NotFound() {
  return (
    <div className=''>
      <div className='text-center'>
        <p className='text-4xl font-medium'>Not Found</p>
        <Link href="/" className='text-blue-500'>Return Home</Link>
      </div>
    </div>
  )
}