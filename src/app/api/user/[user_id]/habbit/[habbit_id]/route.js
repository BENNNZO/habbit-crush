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
        const { last_checked, streak, coins, title } = await req.json()
        const { habbit_id } = params
        
        if (title) {
            const res = await Habbit.findOneAndUpdate({ _id: habbit_id }, { title })
            return new Response(JSON.stringify(res), { status: 200 })
        } else {
            const res = await Habbit.findOneAndUpdate({ _id: habbit_id }, { last_check: new Date(last_checked), streak, coins })
            return new Response(JSON.stringify(res), { status: 200 })
        }

    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        const { user_id, habbit_id } = params
        
        const habbitRes = await Habbit.findOneAndDelete({ _id: habbit_id })
        const userRes = await User.findOneAndUpdate({ _id: user_id }, { $pull: { habbits: habbit_id }})

        return new Response(JSON.stringify({ userRes, habbitRes }), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}