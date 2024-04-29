"use client"

import { useSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import Link from "next/link"

export default function NavBar() {
    const { data: session } = useSession()

    const [account, setAccount] = useState(false)

    return (
        <nav className="fixed w-screen h-16 p-2 flex flex-row justify-between">
            <ul className="flex flex-row gap-2 items-center ml-1">
                <li className="button">
                    <a href="/auth/sign-in">SIGN IN</a>
                </li>
                <li className="button">
                    <a href="/pricing">PRICING</a>
                </li>
                <li className="button">
                    <a href="/dashboard">DASHBOARD</a>
                </li>
            </ul>
            <div className="relative" onClick={() => setAccount(e => !e)}>
                <p>{account}</p>
                <img className="h-12 cursor-pointer rounded-full" src={session?.user.image} />
                <ul className="rounded-md absolute top-full right-0 mt-2 bg-secondary flex flex-col overflow-hidden font-semibold">
                    <li className="px-4 py-2 hover:bg-accent duration-100 whitespace-nowrap">
                        <Link href="/profile">Profile</Link>
                    </li>
                    <li className="px-4 py-2 hover:bg-accent duration-100 whitespace-nowrap">
                        <button onClick={() => signOut()}>Sign Out</button>
                    </li>
                </ul>
            </div>
        </nav>
    )
}