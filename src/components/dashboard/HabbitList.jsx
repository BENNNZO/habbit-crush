'use client'

import { useState, useEffect } from "react"
import HabbitCheck from "./HabbitCheck"
import moment from "moment"

export default function HabbitList() {
    const [habbitData, setHabbitData] = useState(null)

    const sampleData = [
        {
            "title": "nails",
            "last_check": Date.now() - (Math.random() * 100000000),
            "streak": Math.round(Math.random() * 100)
        },
        {
            "title": "smoKing",
            "last_check": Date.now() - (Math.random() * 100000000),
            "streak": Math.round(Math.random() * 100)
        },
        {
            "title": "ALCohol",
            "last_check": Date.now() - (Math.random() * 100000000),
            "streak": Math.round(Math.random() * 100)
        },
        {
            "title": "brush TeEth",
            "last_check": Date.now() - (Math.random() * 100000000),
            "streak": Math.round(Math.random() * 100)
        }
    ]

    useEffect(() => {
        setHabbitData(sampleData)
    }, [])

    return (
        <section className="flex flex-col gap-2">
            {habbitData?.map((e, i) => <HabbitCheck title={e.title} last_check={e.last_check} streak={e.streak} index={i} key={i} setData={(e) => setHabbitData(e)} />)}
        </section>
    )
}