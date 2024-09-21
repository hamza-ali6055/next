import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
    <div
     className='flex gap-3 p-6 bg-slate-500'>
        <Link href="\home" className='p1-3 pr-3'>Home page</Link>
        <Link href="\name" className='p1-3 pr-3>Name page</Link>
        <Link href="\address" className='p1-3 pr-3>Address page</Link>
    </div>
  )
}

export default Header