'use client'

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import Loader from '@/assets/svg/loader2.svg'
import axios from "axios"

export default function HabbitAddModal(props) {
    const [creating, setCreating] = useState(false)
    
    const searchParams = useSearchParams()

    const habbitTitleRef = useRef()
    const habbitTypeRef = useRef()

    function submitHabbit(e) {
        e.preventDefault()
        setCreating(true)

        axios.post(`/api/user/${searchParams.get('id')}/habbit`, {
            title: habbitTitleRef.current.value,
            type: habbitTypeRef.current.checked
        })
        .then(res => {
            console.log(res)
            props.setToggle(false)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="z-50 fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 backdrop-blur-md overflow-hidden grid place-items-center">
            <div className="bg-accent shadow-md p-2 rounded-md">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold tracking-wide text-xl bg-secondary/50 px-2 rounded-md">CREATE NEW TASK</h3>
                    <button className="bg-secondary/50 p-3 rounded-md shadow-md aspect-square relative" onClick={() => props.setToggle(false)}>
                        <div className="absolute-center w-0.5 h-4 rotate-45 bg-white rounded-full"></div>
                        <div className="absolute-center w-0.5 h-4 -rotate-45 bg-white rounded-full"></div>
                    </button>
                </div>
                <form onSubmit={(e) => submitHabbit(e)} className="flex flex-col gap-2 p-2 bg-secondary/50 rounded-md mt-4">
                    <input className="rounded-md px-2 text-black" type="text" name="habbit" id="habbit-title" ref={habbitTitleRef} placeholder="Title..." required autoFocus/>
                    <fieldset className="mt-2">
                        <legend className="font-semibold">Good Or Bad Habbit</legend>
                        <div className="flex flex-row gap-1">
                            <input ref={habbitTypeRef} type="radio" name="habbit" id="habbit-good" required/>
                            <label htmlFor="habbit-good">Good</label>

                            <input className="ml-4" type="radio" name="habbit" id="habbit-bad" required/>
                            <label htmlFor="habbit-bad">Bad</label>
                        </div>
                    </fieldset>
                    <button type="submit" className="button relative h-8">{
                        creating ? (
                            <img className="absolute-center w-6" src={Loader.src} alt="loading" />
                        ) : (
                            <p className="absolute-center">CREATE</p>
                        )
                    }</button>
                </form>
            </div>
        </div>
    )
}

// background blur
// inputs and title 

// button attached to function
// api call function
// x button
// different habbit and todo sections