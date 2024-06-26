'use client'

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

import Loader from '@/assets/svg/loader2.svg'

export default function TaskModalNew(props) {
    const [loading, setLoading] = useState(false)
    const [type, setType] = useState(true)
    
    const searchParams = useSearchParams()

    const habbitTitleRef = useRef()
    const habbitTypeRef = useRef()
    const todoTitleRef = useRef()
    const todoDescRef = useRef()

    function submitHabbit(e) {
        e.preventDefault()
        setLoading(true)

        axios.post(`/api/user/${searchParams.get('id')}/habbit`, {
            title: habbitTitleRef.current.value,
            type: habbitTypeRef.current.checked
        })
        .then(res => {
            console.log(res)
            props.setModalNewState(false)
        })
        .catch(err => console.log(err))
        .finally(() => {
            props.reload()
        })
    }

    function submitTodo(e) {
        e.preventDefault()
        setLoading(true)

        axios.post(`/api/user/${searchParams.get('id')}/todo`, {
            title: todoTitleRef.current.value,
            desc: todoDescRef.current.value
        })
        .then(res => {
            console.log(res)
            props.setModalNewState(false)
        })
        .catch(err => console.log(err))
        .finally(() => {
            props.reload()
        })
    }

    return (
        <div className="z-50 fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 backdrop-blur-md overflow-hidden grid place-items-center fade-in">
            <div className="bg-accent shadow-md p-2 rounded-md overflow-hidden pop-in">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold tracking-wide text-xl bg-secondary/50 px-2 rounded-md">CREATE NEW TASK</h3>
                    <button className="bg-secondary/50 p-3 rounded-md shadow-md aspect-square relative" onClick={() => props.setModalNewState(false)}>
                        <div className="absolute-center w-0.5 h-4 rotate-45 bg-white rounded-full"></div>
                        <div className="absolute-center w-0.5 h-4 -rotate-45 bg-white rounded-full"></div>
                    </button>
                </div>
                <div className="flex flex-row justify-around w-full relative rounded-md overflow-hidden my-2">
                    <button className={`w-full  ${type ? "bg-primary/50" : ""} duration-150 py-1`} onClick={() => setType(true)}>Habbit</button>
                    <button className={`w-full ${!type ? "bg-primary/50" : ""} duration-150 py-1`} onClick={() => setType(false)}>Todo</button>
                    <div className={`bg-secondary absolute bottom-0 h-0.5 w-1/2 ${type ? "left-0" : "left-1/2"} duration-150`}></div>
                </div>
                <div className="relative">
                    <form onSubmit={(e) => submitHabbit(e)} className={`flex flex-col gap-2 p-2 bg-secondary/50 rounded-md relative ${type ? "right-0" : "right-[110%]"} duration-150`}>
                        <input className="rounded-md px-2 text-black py-1" type="text" name="habbit" id="habbit-title" ref={habbitTitleRef} placeholder="Title..." required autoFocus/>
                        <fieldset>
                            <legend className="font-semibold">Good Or Bad Habbit</legend>
                            <div className="flex flex-row gap-1">
                                <input ref={habbitTypeRef} type="radio" name="habbit" id="habbit-good" required/>
                                <label htmlFor="habbit-good">Good</label>

                                <input className="ml-4" type="radio" name="habbit" id="habbit-bad" required/>
                                <label htmlFor="habbit-bad">Bad</label>
                            </div>
                        </fieldset>
                        <button type="submit" className="button relative h-8">{
                            loading ? (
                                <img className="absolute-center w-6" src={Loader.src} alt="loading" />
                            ) : (
                                <p className="absolute-center">CREATE</p>
                            )
                        }</button>
                    </form>
                    <form onSubmit={(e) => submitTodo(e)} className={`flex flex-col justify-between p-2 bg-secondary/50 rounded-md absolute h-full top-0 ${type ? "-right-[110%]" : "right-0"} duration-150`}>
                        <input className="rounded-md px-2 text-black py-1" type="text" name="habbit" id="habbit-title" ref={todoTitleRef} placeholder="Title..." required/>
                        <textarea name="todo" id="todo-desc" rows="2" ref={todoDescRef} placeholder="Description... (optional)" className="px-2 rounded-md resize-none text-black"></textarea>
                        <button type="submit" className="button relative h-8">{
                            loading ? (
                                <img className="absolute-center w-6" src={Loader.src} alt="loading" />
                            ) : (
                                <p className="absolute-center">CREATE</p>
                            )
                        }</button>
                    </form>
                </div>
            </div>
        </div>
    )
}