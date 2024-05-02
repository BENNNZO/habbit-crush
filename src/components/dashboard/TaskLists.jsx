'use client'

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

import TaskItem from "@/components/dashboard/TaskItem"
import PlusIcon from "@/assets/svg/plus.svg"

export default function HabbitList(props) {
    const [habbitData, setHabbitData] = useState(null)
    const [todoData, setTodoData] = useState(null)

    const searchParams = useSearchParams()

    useEffect(() => {
        // get habbits
        axios.get(`/api/user/${searchParams.get('id')}/habbit`)
        .then(res => {
            setHabbitData(res.data.habbits)
        })
        .catch(err => console.log(err))

        // get todos
        axios.get(`/api/user/${searchParams.get('id')}/todo`)
        .then(res => {
            setTodoData(res.data.todos)
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <section className="flex flex-row gap-10">
            <div className="flex flex-col gap-2 w-64">
                <div className="flex flex-row w-full items-center justify-between gap-2">
                    <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Good Habbits</h2>
                    <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                        <img src={PlusIcon.src} alt="" />
                    </button>
                </div>
                {habbitData?.map((e, i) => {
                    if (e.type) {
                        return <TaskItem data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
            <div className="flex flex-col gap-2 w-64">
                <div className="flex flex-row w-full items-center justify-between gap-2">
                    <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Bad Habbits</h2>
                    <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                        <img src={PlusIcon.src} alt="" />
                    </button>
                </div>
                {habbitData?.map((e, i) => {
                    if (!e.type) {
                        return <TaskItem data={e} type={"habbit"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
            <div className="flex flex-col gap-2 w-64">
                <div className="flex flex-row w-full items-center justify-between gap-2">
                    <h2 className="font-bold bg-accent h-8 py-1 px-2 rounded-md w-full">Todos</h2>
                    <button className="h-8 aspect-square bg-accent rounded-md p-2 hover:bg-primary duration-100" onClick={() => props.setToggle(true)}>
                        <img src={PlusIcon.src} alt="" />
                    </button>
                </div>
                {todoData?.map((e, i) => {
                    if (!e.type) {
                        return <TaskItem data={e} type={"todo"} index={i} key={i} setData={(e) => setHabbitData(e)} />
                    }
                })}
            </div>
        </section>
    )
}