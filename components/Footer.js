import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear()
  return (
    <footer className='bg-zinc-900 text-white flex justify-center items-center px-4 h-16 '>
       <p>Copyright &copy; {currentYear} The Nameless Patron - All rights reserved</p>
    </footer>
  )
}

export default Footer
