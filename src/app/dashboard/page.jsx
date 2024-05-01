'use client'

import { useState, useEffect } from "react"

import HabbitList from "@/components/dashboard/HabbitList"
import HabbitAddModal from "@/components/dashboard/HabbitAddModal"

export default function Dashboard() {
    const [toggleHabbitModal, setToggleHabbitModal] = useState(false)

    return (
        <main className="pt-32 flex flex-col items-center gap-12 min-h-screen w-screen">
            <h1 className="font-bold text-6xl">DAHSBOARD</h1>
            <div className="flex flex-row gap-8">
                <HabbitList setToggle={(e) => setToggleHabbitModal(e)} />
                {toggleHabbitModal ? (
                    <HabbitAddModal setToggle={(e) => setToggleHabbitModal(e)} />
                ) : ""}
                {/* <HabbitList />
                <HabbitList /> */}
            </div>
        </main>
    )
}