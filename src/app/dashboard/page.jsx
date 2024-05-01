'use client'

import HabbitList from "@/components/dashboard/HabbitList"
import HabbitAddModal from "@/components/dashboard/HabbitAddModal"

export default function Dashboard() {
    return (
        <main className="pt-32 flex flex-col items-center gap-12 min-h-screen w-screen">
            <h1 className="font-bold text-6xl">DAHSBOARD</h1>
            <div className="flex flex-row gap-8">
                <HabbitList />
                <HabbitAddModal />
                {/* <HabbitList />
                <HabbitList /> */}
            </div>
        </main>
    )
}