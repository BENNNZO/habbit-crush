'use client'

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

import HabbitList from "@/components/dashboard/TaskLists"
import TaskModal from "@/components/dashboard/TaskModal"

export default function Dashboard() {
    const [toggleHabbitModal, setToggleHabbitModal] = useState(false)
    const [habbitData, setHabbitData] = useState(null)
    const [todoData, setTodoData] = useState(null)

    const searchParams = useSearchParams()

    useEffect(() => {
        loadData()
    }, [])

    function loadData() {
        axios.get(`/api/user/${searchParams.get('id')}/habbit`)
        .then(res => {
            setHabbitData(res.data.habbits)
        })
        .catch(err => console.log(err))

        axios.get(`/api/user/${searchParams.get('id')}/todo`)
        .then(res => {
            setTodoData(res.data.todos)
        })
        .catch(err => console.log(err))
    }

    return (
        <main className="pt-32 flex flex-col items-center gap-12 min-h-screen w-screen">
            <h1 className="font-bold text-6xl">DAHSBOARD</h1>
            <div className="flex flex-row gap-8">
                <HabbitList data={{ habbitData, todoData }} setToggle={(e) => setToggleHabbitModal(e)} />
                {toggleHabbitModal ? ( <TaskModal setToggle={(e) => setToggleHabbitModal(e)} /> ) : ""}
            </div>
        </main>
    )
}