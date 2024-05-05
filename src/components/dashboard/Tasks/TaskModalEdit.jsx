'use client'

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import axios from "axios"

import Loader from '@/assets/svg/loader2.svg'

export default function TaskModalEdit(props) {
    const [loading, setLoading] = useState(false)

    const searchParams = useSearchParams()

    const updateTitleRef = useRef()
    
    function submitTodo(e) {
        e.preventDefault()
        setLoading(true)

        axios.patch(`/api/user/${searchParams.get('id')}/${props.editState.type}/${props.editState.id}`, {
            title: updateTitleRef.current.value
        })
        .then(res => {
            console.log(res)
            props.setModalEditState(false)
        })
        .catch(err => console.log(err))
        .finally(() => {
            props.reload()
        })
    }

    return (
        <div className="z-50 fixed top-0 left-0 w-screen h-screen backdrop-brightness-50 backdrop-blur-md overflow-hidden grid place-items-center fade-in">
            <div className="bg-accent shadow-md p-2 rounded-md overflow-hidden pop-in flex flex-col gap-2">
                <div className="flex flex-row items-center justify-between">
                    <h3 className="font-bold tracking-wide text-xl bg-secondary/50 px-2 rounded-md">EDIT {props.editState.type.toUpperCase()}</h3>
                    <button className="bg-secondary/50 p-3 rounded-md shadow-md aspect-square relative" onClick={() => props.setModalEditState(false)}>
                        <div className="absolute-center w-0.5 h-4 rotate-45 bg-white rounded-full"></div>
                        <div className="absolute-center w-0.5 h-4 -rotate-45 bg-white rounded-full"></div>
                    </button>
                </div>
                <form onSubmit={(e) => submitTodo(e)} className={`flex flex-col justify-between p-2 bg-secondary/50 rounded-md gap-2`}>
                    <input className="rounded-md px-2 text-black py-1" type="text" name="habbit" id="habbit-title" ref={updateTitleRef} placeholder="New Title..." required/>
                    <button type="submit" className="button relative h-8">{
                        loading ? (
                            <img className="absolute-center w-6" src={Loader.src} alt="loading" />
                        ) : (
                            <p className="absolute-center">UPDATE</p>
                        )
                    }</button>
                </form>
            </div>
        </div>
    )
}