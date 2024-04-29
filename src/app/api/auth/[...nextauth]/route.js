import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

import connectDB from "@/utils/connectDB"
import User from "@/models/User"

const handler = NextAuth({
    secret: process.env.NEXTAUTH_SECRET,
    providers: [
        GoogleProvider({
            clientId: process.env.GOOGLE_ID,
            clientSecret: process.env.GOOGLE_SK,
        }),
    ],
    pages: {
        signIn: '/auth/sign-in'
    },
    callbacks: {
        async session({ session }) {
            try {
                await connectDB()

                const sessionUser = await User.findOne({ email: session.user.email })

                session.user.id = sessionUser._id

                return session
            } catch (err) {
                console.log(err)
                return session
            }
        },
        async signIn({ profile }) {
            console.log(profile)
            try {
                await connectDB()

                const userExists = await User.findOne({ email: profile.email })

                if (!userExists) await User.create({ username: profile.name, email: profile.email, picture: profile.picture })

                return true
            } catch (err) {
                console.log(err)
                return false
            }
        }
    }
})

export { handler as GET, handler as POST }