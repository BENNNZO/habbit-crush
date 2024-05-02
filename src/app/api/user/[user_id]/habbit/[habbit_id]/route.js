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

export async function PATCH(req, { params }) {
    try {
        const { last_checked, streak } = await req.json()
        const { habbit_id } = params
        
        const res = await Habbit.findOneAndUpdate({ _id: habbit_id }, { last_check: new Date(last_checked), streak })

        return new Response(JSON.stringify(res), { status: 200 })
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