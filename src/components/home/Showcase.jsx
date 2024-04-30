'use client'

import { useState, useEffect } from "react"
import { useSession } from "next-auth/react"
import axios from "axios"

export default function Showcase() {
    const { data: session } = useSession()
    const [data, setData] = useState("")

    async function getData(e) {
        e.preventDefault()

        axios.get(`/api/user/${session.user.id}/test`)
        .then(res => {
            setData(res.data.res)
            console.log(res)
        })
        .catch(err => console.log(err))
    }

    async function getSession(e) {
        e.preventDefault()

        setData(session.user)
    }

    return (
        <section className="py-12 bg-red-900 rounded-md p-4">
            <h2 className="text-4xl sm:text-5xl font-bold text-center">TESTING!</h2>
            <button className="button" onClick={e => getData(e)}>GET USER MODEL</button>
            <button className="button" onClick={e => getSession(e)}>GET SESSION</button>
            <pre>{JSON.stringify(data, null, 4)}</pre>
        </section>
    )
}