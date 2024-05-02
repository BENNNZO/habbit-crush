import dbConnect from "@/utils/connectDB"

import User from "@/models/User"
import Todo from "@/models/Todo"

export async function PUT(req, { params }) {
    try {
        await dbConnect()

        const {} = params
        
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}

export async function PATCH(req, { params }) {
    try {
        await dbConnect()

        const {} = params
        
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        await dbConnect()

        const { user_id, todo_id } = params
        
        // pull from user array
        // delete todo
        const todoRes = await Todo.findOneAndDelete({ _id: todo_id })
        const userRes = await User.findOneAndUpdate({ _id: user_id }, { $pull: { todos: todo_id }})

        return new Response(JSON.stringify({todoRes, userRes}), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}