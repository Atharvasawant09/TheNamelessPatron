"use server"
import Razorpay from "razorpay"
import User from "@/models/User"
import Payment from "@/models/Payment"
import connectDb from "@/db/connectDb"


export const initiate = async (amount, to_username, paymentform) => {
    await connectDb()
      ///Fetch the secret of user who is getting the payment
      let user = await User.findOne({username:to_username})
      const secret = user.razorpaysecret
    var instance = new Razorpay({ key_id: user.razorpayid, key_secret: secret })

    let options = {
        amount: Number.parseInt(amount),
        currency:"INR"
    }
    let x = await instance.orders.create(options)

    //Create a pending object which shows a pending payment in the database
    await Payment.create({oid:x.id, amount:amount, to_user: to_username,name:paymentform.name,message:paymentform.message})

    return x

    }
    
    export const fetchuser = async (username) => {
        await connectDb()
        let u = await User.findOne({username:username})
        let user = u.toObject({flattenObjectIds:true})
        return user
    }


    export const fetchpayments = async (username) => {
        await connectDb()
        let p = await Payment.find({ to_user: username, done: true }).sort({ amount: -1 }).limit(9).lean()
        // Convert _id and any other fields to plain strings
        p = p.map(payment => ({ ...payment, _id: payment._id.toString(),
        // Convert other non-serializable fields if needed
        }))
    
        console.log('Fetched Payments:', p); 
        return p
    }
    

    export const updateProfile = async(data,oldusername)=>{
        await connectDb()
            let ndata = Object.fromEntries(data)

            //If the username is being updated and check if the username is available
            if(oldusername !== ndata.username){
                let u = await User.findOne({username:ndata.username})
                await User.updateOne({email:ndata.email},ndata)
                await Payment.updateMany({to_user:oldusername},{to_user:ndata.username})

            }
            else{
                await User.updateOne ({email:ndata.email}, ndata)

            }


        

    }
    



