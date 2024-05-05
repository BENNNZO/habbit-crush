'use client'

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { useSession } from "next-auth/react"
import axios from "axios"

import TaskLists from "@/components/dashboard/Tasks/TaskLists"
import TaskModalNew from "@/components/dashboard/Tasks/TaskModalNew"
import TaskModalEdit from "@/components/dashboard/Tasks/TaskModalEdit"

export default function Dashboard() {
    const [modalNewState, setModalNewState] = useState(false)
    const [modalEditState, setModalEditState] = useState(false)
    const [habbitData, setHabbitData] = useState(null)
    const [todoData, setTodoData] = useState(null)

    const searchParams = useSearchParams()
    const { data: session } = useSession()
    const { push } = useRouter()

    useEffect(() => {
        if (session === null) push('/')
        else if (session) loadData()
    }, [session])

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
                
                {/* this whole system of todos and habbits has been a pain and is some of my worst code but it works and thats all that matters :) */}
                {modalNewState ? ( <TaskModalNew reload={() => loadData()} setModalNewState={(e) => setModalNewState(e)} /> ) : ""}
                {modalEditState ? ( <TaskModalEdit reload={() => loadData()} setModalEditState={(e) => setModalEditState(e)} editState={modalEditState} /> ) : ""}
                <TaskLists reload={() => loadData()} data={{ habbitData, todoData }} setModalNewState={(e) => setModalNewState(e)} setModalEditState={(e) => setModalEditState(e)} />
            </div>
        </main>
    )
}