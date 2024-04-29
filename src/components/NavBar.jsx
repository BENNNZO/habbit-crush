"use client"

import { useSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Logo from '@/assets/svg/logo.svg'

export default function NavBar() {
    const { push } = useRouter()
    const { data: session } = useSession()

    const [account, setAccount] = useState(false)

    // useEffect(() => {
    //     console.log(session)
    // }, [session])

    return (
        <nav className="fixed w-screen h-16 p-2 flex flex-row justify-between items-center">
            <img src={Logo.src} alt="logo click to go home" className="h-10 cursor-pointer" onClick={() => push('/')} />
            <ul className="flex flex-row gap-2 items-center mx-1">
                {
                    session ? (
                        <>
                            <li className="button">
                                <button onClick={() => push('/dashboard')}>DASHBOARD</button>
                            </li>
                            <li className="relative" onClick={() => setAccount(e => !e)}>
                                <img className="h-10 cursor-pointer rounded-md" src={session?.user.image} />
                                {
                                    account ? (
                                        <>
                                            <div className="fixed w-full h-full top-0 left-0"></div>
                                            <ul className="rounded-md absolute top-full right-0 mt-2 bg-secondary flex flex-col overflow-hidden font-semibold">
                                                <li className="px-4 py-2 hover:bg-accent duration-100 whitespace-nowrap">
                                                    <button onClick={() => push('/profile')}>Profile</button>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-accent duration-100 whitespace-nowrap">
                                                    <button onClick={() => signOut()}>Sign Out</button>
                                                </li>
                                            </ul>
                                        </>
                                    ) : ("")
                                }
                            </li>
                        </>
                    ) : session === null ? (
                        <>
                            <li className="button">
                                <a href="/auth/sign-in">SIGN IN</a>
                            </li>
                            <li className="button">
                                <a href="/pricing">PRICING</a>
                            </li>
                        </>
                    ) : (
                        ""
                    )
                }
            </ul>

        </nav>
    )
}