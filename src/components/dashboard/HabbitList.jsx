'use client'

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

import HabbitCheck from "@/components/dashboard/HabbitCheck"
import PlusIcon from "@/assets/svg/plus.svg"

export default function HabbitList(props) {
    const [habbitData, setHabbitData] = useState(null)

    const searchParams = useSearchParams()

    useEffect(() => {
        axios.get(`/api/user/${searchParams.get('id')}/habbit`)
        .then(res => {
            setHabbitData(res.data.habbits)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="flex flex-col gap-2 w-64">
            <div className="flex flex-row w-full items-center justify-between gap-2">
                <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Habbits</h2>
                <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                    <img src={PlusIcon.src} alt="" />
                </button>
            </div>
            {habbitData?.map((e, i) => <HabbitCheck title={e.title} last_check={e.last_check} streak={e.streak} index={i} key={i} setData={(e) => setHabbitData(e)} />)}
        </section>
    )
}