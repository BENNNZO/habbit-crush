export async function GET(req, { params }) {
    try {
        const {} = params
        
        console.log('F:/Code/Web/habbit-crush/src/app/api/user/[user_id]/[habbit_id]')
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function POST(req, { params }) { // new
    try {
        const {} = params
        
        console.log('F:/Code/Web/habbit-crush/src/app/api/user/[user_id]/[habbit_id]')
        return new Response(JSON.stringify(req), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function PUT(req, { params }) { // modify entire entry
    try {
        const {} = params
        
        console.log('F:/Code/Web/habbit-crush/src/app/api/user/[user_id]/[habbit_id]')
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function PATCH(req, { params }) { // update set of fields and not entire entry
    try {
        const {} = params
        
        console.log('F:/Code/Web/habbit-crush/src/app/api/user/[user_id]/[habbit_id]')
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}

export async function DELETE(req, { params }) {
    try {
        const {} = params
        
        console.log('F:/Code/Web/habbit-crush/src/app/api/user/[user_id]/[habbit_id]')
        return new Response(JSON.stringify(), { status: 200 })
    } catch (err) {
        return new Response(err, { status: 500 })
    }
}