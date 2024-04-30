import User from "@/models/User";

export async function GET(req, { params }) {
    try {
        const { userid } = await params
    
        const res = await User.findById(userid)
    
        return new Response(JSON.stringify({ res }), { status: 200 })
    } catch (err) {
        console.log(err)
        return new Response(err, { status: 500 })
    }
}