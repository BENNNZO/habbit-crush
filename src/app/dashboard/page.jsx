'use client'

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

import TaskLists from "@/components/dashboard/TaskLists"
import TaskModal from "@/components/dashboard/TaskModal"

export default function Dashboard() {
    const [modalState, setModalState] = useState(false)
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
                <TaskLists data={{ habbitData, todoData }} setModalState={(e) => setModalState(e)} />
                {modalState ? ( <TaskModal reload={() => loadData()} setModalState={(e) => setModalState(e)} /> ) : ""}
            </div>
        </main>
    )
}