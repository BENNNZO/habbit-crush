'use client'

import { useState, useEffect } from "react"
import HabbitCheck from "./HabbitCheck"
import PlusIcon from "@/assets/svg/plus.svg"

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
            <div className="flex flex-row w-full items-center justify-between gap-2">
                <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Habbits</h2>
                <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100">
                    <img src={PlusIcon.src} alt="" />
                </button>
            </div>
            {habbitData?.map((e, i) => <HabbitCheck title={e.title} last_check={e.last_check} streak={e.streak} index={i} key={i} setData={(e) => setHabbitData(e)} />)}
        </section>
    )
}