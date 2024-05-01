import dbConnect from "@/utils/connectDB"

import User from "@/models/User"
import Habbit from "@/models/Habbit"

export async function GET(req, { params }) {
    try {
        const {} = params

        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function POST(req, { params }) { // new
    try {
        await dbConnect()

        const { user_id } = params
        const { title, type } = await req.json()

        // create habbit
        const habbitRes = await Habbit.create({ title, type })
        // push habbit id to user

        return new Response(JSON.stringify(habbitRes), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}

export async function PUT(req, { params }) { // modify entire entry
    try {
        const {} = params
        
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function PATCH(req, { params }) { // update set of fields and not entire entry
    try {
        const {} = params
        
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        const {} = params
        
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}