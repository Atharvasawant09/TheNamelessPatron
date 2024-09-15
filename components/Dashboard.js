"use client"
import React, { useState, useEffect } from 'react'
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/navigation'
import { fetchuser,updateProfile } from '@/actions/useractions'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'

const Dashboard = () => {
    const { data: session , update} = useSession()
    const router = useRouter()
    const [form, setform] = useState({})

    useEffect(() => {
       
        if (!session) {
            router.push('/login')
        }

        else if (session.user?.name) {
            getData()
        }

    }, [router, session])

    const getData = async()=>{
        let u = await fetchuser(session.user.name)
        setform(u)
    }

    const handleChange = (e) => {
        setform({ ...form, [e.target.name]: e.target.value })
    }

    const handleSubmit = async (e)=>{
        let a = await updateProfile(e, session.user.name)
        toast('Profile Updated Successfully', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
            });
    }


    return (
        <>
          <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark" />
                <ToastContainer />
        <div className='container mx-auto py-5 px-6'>

            <h1 className='text-center my-3 text-3xl font-bold'>Welcome to your Dashboard</h1>
            <form className='max-w-2xl mx-auto' action={handleSubmit}>

                <div className="my-2">
                    <label htmlFor="name" className='block mb-2 text-base font-medium  dark:text-white'>Name</label>
                    <input value={form.name ? form.name : ""} onChange={handleChange} type="text" name="name" id="name" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                <div className="my-2">
                    <label htmlFor="email" className='block mb-2 text-base font-medium  dark:text-white'>Email</label>
                    <input value={form.email ? form.email : ""} onChange={handleChange} type="text" name="email" id="email" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                <div className="my-2">
                    <label htmlFor="username" className='block mb-2 text-base font-medium  dark:text-white'>Username</label>
                    <input value={form.username ? form.username : ""} onChange={handleChange} type="text" name="username" id="username" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                <div className="my-2">
                    <label htmlFor="profilepic" className='block mb-2 text-base font-medium  dark:text-white'>Profile Picture</label>
                    <input value={form.profilepic ? form.profilepic : ""} onChange={handleChange} type="text" name="profilepic" id="profilepic" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                <div className="my-2">
                    <label htmlFor="coverpic" className='block mb-2 text-base font-medium  dark:text-white'>Cover Picture</label>
                    <input value={form.coverpic ? form.coverpic : ""} onChange={handleChange} type="text" name="coverpic" id="coverpic" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                <div className="my-2">
                    <label htmlFor="razorpayid" className='block mb-2 text-base font-medium  dark:text-white'>Razorpay Id</label>
                    <input value={form.razorpayid ? form.razorpayid : ""} onChange={handleChange} type="text" name="razorpayid" id="razorpayid" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                <div className="my-2">
                    <label htmlFor="razorpaysecret" className='block mb-2 text-base font-medium  dark:text-white'>Razorpay Secret</label>
                    <input value={form.razorpaysecret ? form.razorpaysecret : ""} onChange={handleChange} type="text" name="razorpaysecret" id="razorpaysecret" className='block w-full p-2 text-stone-900 border border-stone-300 rounded-lg bg-gray-50 text-base dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-500 dark:text-white ' placeholder='' />
                    </div>
                    
                    <button type="submit" className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-12 mt-3 w-full" >Save</button>
                
            </form >
        </div>
        </>


    )
}

export default Dashboard
