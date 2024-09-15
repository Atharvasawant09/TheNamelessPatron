"use client"
import React, { useEffect, useState } from 'react'
import Script from 'next/script'
import { useSession } from 'next-auth/react'
import { fetchuser, fetchpayments, initiate } from '@/actions/useractions'
import { useSearchParams } from 'next/navigation'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Bounce } from 'react-toastify'
import { useRouter } from 'next/navigation'

const PaymentPage = ({ username }) => {
    const [paymentform, setPaymentform] = useState({name:'',message:"",amount:""})
    const [currentUser, setcurrentUser] = useState({})
    const [payments, setPayments] = useState([])
    const searchParams = useSearchParams()
    const router = useRouter()

    useEffect(() => {
        getData()
    }, [])

    useEffect(() => {
        if (searchParams.get("paymentdone") === "true") {
            toast('Thanks for your donation', {
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
        router.push(`/${username}`)
    }, [searchParams, router, username])
    
    const handleChange = (e) => {
        setPaymentform({ ...paymentform, [e.target.name]: e.target.value })
    }

    const getData = async () => {
        const u = await fetchuser(username)
        setcurrentUser(u)
        const dbpayments = await fetchpayments(username)
        console.log('Payments in Component:', dbpayments); 
        setPayments(dbpayments)
    }

    const pay = async (amount) => {
        const a = await initiate(amount, username, paymentform)
        const orderId = a.id
        const options = {
            "key": currentUser.razorpayid,
            "amount": amount,
            "currency": "INR",
            "name": "The Nameless Patron",
            "description": "Test Transaction",
            "image": "https://example.com/your_logo",
            "order_id": orderId,
            "callback_url": `${process.env.NEXT_PUBLIC_URL}/api/razorpay`,
            "prefill": {
                "name": "Gaurav Kumar",
                "email": "gaurav.kumar@example.com",
                "contact": "9000090000"
            },
            "notes": {
                "address": "Razorpay Corporate Office"
            },
            "theme": {
                "color": "#3399cc"
            }
        }
        const rzp1 = new Razorpay(options);
        rzp1.open();
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
            <Script src="https://checkout.razorpay.com/v1/checkout.js"></Script>

            <div className='relative w-full'>
                <img className='object-cover w-full h-[400px] min-h-[400px]' src={currentUser.coverpic} alt="" />
                <div className='absolute -bottom-10 right-1/2 transform translate-x-1/2 border-white border-2 rounded-full'>
                    <img className='rounded-full' width={80} height={80} src={currentUser.profilepic} alt="" />
                </div>
            </div>

            <div className='text-center md:text-left p-4 md:p-12 md:mt-0 mt-10'>
                <div className='font-bold text-lg text-center'>
                    @{username}
                </div>
                <div className='text-slate-400 text-center'>
                    Creating mods for souls borne games!!
                </div>
                <div className='text-slate-400 text-center'>
                    {payments.length} Tarnished . 500 ₹/release
                </div>

                <div className="flex flex-col md:flex-row gap-4 mt-8">
                    <div className="supporters bg-stone-900 text-white p-4 rounded-lg flex-1">
                        <h2 className='text-2xl font-bold text-center my-5'>Supporters</h2>
                        <ul className='text-base'>
                            {payments.length === 0 ? <li>No Payments Yet</li> : payments.map((p, i) => (
                                <li key={i} className='my-3 flex items-center gap-2'>
                                    <img width={38} src="/usericon(1).png" alt="user avatar" />
                                    <span>
                                        {p.name} donated <span className='font-bold'>₹{p.amount / 100}</span> with a message "{p.message}"
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="makepayment bg-stone-900 text-white p-5 rounded-lg flex-1">
                        <h2 className='text-2xl font-bold text-center my-5'>Make a Payment</h2>
                        <div className="flex flex-col gap-3">
                            <input onChange={handleChange} value={paymentform.name} type="text" name="name" placeholder='Enter Name' className='w-full p-3 rounded-lg bg-stone-700' />
                            <input onChange={handleChange} value={paymentform.message} type="text" name="message" placeholder='Enter Message' className='w-full p-3 rounded-lg bg-stone-700' />
                            <input onChange={handleChange} value={paymentform.amount} type="text" name="amount" placeholder='Enter Amount' className='w-full p-3 rounded-lg bg-stone-700' />

                            <button onClick={() => pay(Number.parseInt(paymentform.amount) * 100)}
                                type="button"
                                className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 font-bold rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out disabled:bg-zinc-100 disabled:from-zinc-700 disabled:to-zinc-400 disabled:focus:ring-zinc-500"
                                disabled={paymentform.name.length < 3 || paymentform.message.length < 4 || paymentform.amount.length < 1}>
                                Pay
                            </button>

                            <div className="flex gap-3 mt-5">
                                <button className='bg-stone-700 rounded-lg p-3' onClick={() => pay(1000)}>Pay ₹10</button>
                                <button className='bg-stone-700 rounded-lg p-3' onClick={() => pay(2000)}>Pay ₹20</button>
                                <button className='bg-stone-700 rounded-lg p-3' onClick={() => pay(4000)}>Pay ₹40</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PaymentPage
