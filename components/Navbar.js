"use client"
import React,{useState} from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import Link from 'next/link'

const Navbar = () => {
  const { data: session } = useSession()
  const [showdropdown, setShowdropdown] = useState(false)
  
  return (
    <nav className='bg-black text-white flex justify-between items-center px-3 md:h-16 flex-col md:flex-row'>
      
        <Link className="logo font-bold text-lg flex justify-center items-center" href={'/'}>
        <img width={80} src="/No-Face2.gif" alt="" />
        <span className='-ml-3 text-xl md:text-xl my-3 md:my-0'>The Nameless Patron</span>
        </Link>

      <div className='relative flex flex-col md:block gap-4'>
        {session && <>
          <button onMouseEnter={()=>setShowdropdown(!showdropdown)}  onMouseLeave={()=> {setTimeout(() => {
             setShowdropdown(false)
          }, 15000);}} id="dropdownHoverButton" data-dropdown-toggle="dropdownHover" data-dropdown-trigger="hover" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 mx-2 text-center inline-flex items-center " type="button">Welcome {session.user.email} <svg className="w-2.5 h-2.5 ms-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 4 4 4-4" />
          </svg>
          </button>

          <div  onMouseLeave={()=> {setTimeout(() => {
             setShowdropdown(false)
          }, 80);}} id="dropdownHover" className={`z-10 ${showdropdown?"":"hidden"} absolute left-[100px] bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700`}>
            <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownHoverButton">
              <li>
                <Link href="/dashboard" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</Link>
              </li>
              <li>
                <Link href={`/${session?.user?.name || 'default'}`} className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Your Page</Link>
              </li>
              <li>
                <Link href="/" className="block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Home</Link>
              </li>
            </ul>
          </div>
        </>}
     

        {session &&
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 " onClick={() => { signOut() }} >Logout</button>}


        {!session && <Link href={"/login"}>
          <button type="button" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2" >Login</button></Link>}
      </div>
    </nav>
  )
}

export default Navbar
