export async function GET(req, { params }) {
    try {
        const {  } = params
    
        return new Response("hello, world!", { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function POST() {
    try {
        
        
        return new Response("hello, world!", { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function PUT() {
    try {
        
        
        return new Response("hello, world!", { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function PATCH() {
    try {
        
        
        return new Response("hello, world!", { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function DELETE() {
    try {
        
        
        return new Response("hello, world!", { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}