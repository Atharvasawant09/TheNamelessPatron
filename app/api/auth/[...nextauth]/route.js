import React from 'react'
// import AppleProvider from 'next-auth/providers/apple'
// import FacebookProvider from 'next-auth/providers/facebook'
// import GoogleProvider from 'next-auth/providers/google'
// import EmailProvider from 'next-auth/providers/email'
import GitHubProvider from "next-auth/providers/github";
import NextAuth from 'next-auth/next'
import mongoose from 'mongoose';
import User from '@/models/User';
import Payment from '@/models/Payment';
import connectDB from '@/db/connectDb';
import connectDb from '@/db/connectDb';

export const authoptions=NextAuth({
  providers: [
    // OAuth authentication providers...
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET
    }),
    // AppleProvider({
    //   clientId: process.env.APPLE_ID,
    //   clientSecret: process.env.APPLE_SECRET
    // }),
    // FacebookProvider({
    //   clientId: process.env.FACEBOOK_ID,
    //   clientSecret: process.env.FACEBOOK_SECRET
    // }),
    // GoogleProvider({
    //   clientId: process.env.GOOGLE_ID,
    //   clientSecret: process.env.GOOGLE_SECRET
    // }),
    // // Passwordless / email sign in
    // EmailProvider({
    //   server: process.env.MAIL_SERVER,
    //   from: 'NextAuth.js <no-reply@example.com>'
    // }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      if(account.provider == 'github'){
        await connectDb()
       
       //check is user already exist in database
       const currentUser = await User.findOne({email: email})
       if(!currentUser){
        const newUser = new User({
          email:user.email,
          username:user.email.split("@")[0]
        })
        

       }
       
       return true

      }
  },
  async session({ session, user, token }) {
    const dbUser = await User.findOne({email:session.user.email})
    session.user.name = dbUser.username
    return session
  },
},

callbacks: {
  async session({ session, user, token }) {
    await connectDb(); // Ensure the database is connected
    try {
      const dbUser = await User.findOne({ email: session.user.email });

      if (dbUser) {
        session.user.name = dbUser.username;
      } else {
        // Handle the case where the user was not found
        console.error(`User not found for email: ${session.user.email}`);
        session.user.name = session.user.email.split("@")[0]; // Fallback to email prefix
      }
    } catch (error) {
      console.error("Error in session callback:", error);
    }
    return session;
  },
}

  
})
export {authoptions as GET, authoptions as POST}