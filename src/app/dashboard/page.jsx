'use client'

import { useState, useEffect } from "react"

import HabbitList from "@/components/dashboard/TaskLists"
import TaskModal from "@/components/dashboard/TaskModal"

export default function Dashboard() {
    const [toggleHabbitModal, setToggleHabbitModal] = useState(false)

    return (
        <main className="pt-32 flex flex-col items-center gap-12 min-h-screen w-screen">
            <h1 className="font-bold text-6xl">DAHSBOARD</h1>
            <div className="flex flex-row gap-8">
                <HabbitList setToggle={(e) => setToggleHabbitModal(e)} />
                {toggleHabbitModal ? ( <TaskModal setToggle={(e) => setToggleHabbitModal(e)} /> ) : ""}
            </div>
        </main>
    )
}