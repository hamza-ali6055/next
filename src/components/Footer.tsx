import React from 'react'
import Link from 'next/link'

const Footer = () => {
  return (
    <div
        className='flex gap-3 p-6 bg-slate-200'>
        <Link href="#">Privacy</Link>
        <Link href="#">Contact</Link>
        <Link href="#">About</Link>
    </div>
  )
}

export default Footer