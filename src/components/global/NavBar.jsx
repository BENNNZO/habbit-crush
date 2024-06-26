"use client"

import { useSession, signOut } from "next-auth/react"
import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

import Logo from '@/assets/svg/logo.svg'

export default function NavBar() {
    const { push } = useRouter()
    const { data: session } = useSession()

    const [account, setAccount] = useState(false)
    const [rotation, setRotation] = useState(0)

    return (
        <nav className="fixed w-screen h-16 p-2 flex flex-row justify-between items-center">
            <img src={Logo.src} alt="logo click to go home" className="h-10 cursor-pointer duration-300" style={{ rotate: `${rotation}deg` }} onClick={() => {push('/'); setRotation(e => e + 360)}} />
            <ul className="flex flex-row gap-2 items-center mx-1">
                {
                    session ? (
                        <>
                            <li className="button fade-in">
                                <button onClick={() => push('/add-habbit')}>ADD HABBIT</button>
                            </li>
                            <li className="button-secondary fade-in">
                                <button onClick={() => push(`/dashboard?id=${session?.user.id}`)}>DASHBOARD</button>
                            </li>
                            <li className="relative fade-in" onClick={() => setAccount(e => !e)}>
                                <img className="h-10 aspect-square cursor-pointer rounded-md leading-4" src={session?.user.image} alt="prof pic" />
                                {
                                    account ? (
                                        <>
                                            <div className="fixed w-full h-full top-0 left-0"></div>
                                            <ul className="pop-in rounded-md absolute top-full right-0 mt-2 bg-secondary flex flex-col overflow-hidden font-semibold">
                                                <li className="px-4 py-2 hover:bg-accent duration-100 whitespace-nowrap cursor-pointer" onClick={() => push(`/profile`)}>
                                                    <button>Profile</button>
                                                </li>
                                                <li className="px-4 py-2 hover:bg-accent duration-100 whitespace-nowrap cursor-pointer" onClick={() => signOut()}>
                                                    <button>Sign Out</button>
                                                </li>
                                            </ul>
                                        </>
                                    ) : ("")
                                }
                            </li>
                        </>
                    ) : session === null ? (
                        <>
                            <li className="button fade-in">
                                <a href="/auth/sign-in">SIGN IN</a>
                            </li>
                            <li className="button fade-in">
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