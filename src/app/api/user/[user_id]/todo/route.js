import dbConnect from "@/utils/connectDB"

import User from "@/models/User"
import Todo from "@/models/Todo"

export async function GET(req, { params }) {
    try {
        await dbConnect()

        const { user_id } = params

        const userRes = await User.findById(user_id).populate('todos').select('todos')

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
        const { title, desc } = await req.json()

        const todoRes = await Todo.create({ title, desc })

        const userRes = await User.findOneAndUpdate({ _id: user_id }, { $addToSet: { todos: todoRes._id } })

        return new Response(JSON.stringify({ todoRes, userRes }), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}