
import PaymentPage from '@/components/PaymentPage'
import React from 'react'
import { notFound } from 'next/navigation'
import connectDb from '@/db/connectDb'
import User from '@/models/User'
const page = async ({ params }) => {
    //If Username is not present in the database. Show a 404 page
    const checkUser = async () => {
        await connectDb()
        let u = await User.findOne({ username: params.username })
        if (!u) {
            return notFound()
        }
    }
    await checkUser()

    return (
        <>

            <PaymentPage username={params.username} />
        </>
    )
}

export default page

export async function generateMetadata({ params }) {
    return {
      title: `${params.username}  - The Nameless Patron`
    }
  }
