import dbConnect from "@/utils/connectDB"

import User from "@/models/User"
import Habbit from "@/models/Habbit"

export async function GET(req, { params }) {
    try {
        await dbConnect()

        const { user_id } = params

        const userRes = await User.findById(user_id).populate('habbits').select('habbits')

        return new Response(JSON.stringify(userRes), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}

export async function POST(req, { params }) {
    try {
        await dbConnect()

        const { user_id } = params
        const { title, type } = await req.json()

        const habbitRes = await Habbit.create({ title, type })

        const userRes = await User.findOneAndUpdate({ _id: user_id }, { $addToSet: { habbits: habbitRes._id } })

        return new Response(JSON.stringify({ habbitRes, userRes }), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}