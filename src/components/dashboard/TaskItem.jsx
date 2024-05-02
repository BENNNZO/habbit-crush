"use client"

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import moment from "moment"
import axios, { spread } from "axios"

import FlameIcon from "@/assets/svg/flame.svg"
import Checkmark from "@/assets/svg/checkmark.svg"
import DiamondIcon from "@/assets/svg/diamond-outline.svg"
import PencilIcon from "@/assets/svg/pencil.svg"

// TODO: add delete / edit button to habbits & todo

export default function TaskItem(props) {
    const searchParams = useSearchParams()
    
    let last_checked_diff = moment(Date.now()).diff(new Date(props.data.last_check), "days")
    const [checked, setChecked] = useState(last_checked_diff === 0 ? true : false)
    const [todoCheck, setTodoCheck] = useState(false)
    const [editDropdownState, setEditDropdownState] = useState(false)
    const [deleteLoading, setDeleteLoading] = useState(false)
    
    const location = useRef(null)

    function fireConfetti() {        
        var count = 200
        var defaults = {
            origin: { 
                x: (location.current.offsetLeft + (location.current.offsetWidth / 2)) / window.screen.width, 
                y: (location.current.offsetTop + (location.current.offsetHeight / 2)) / window.screen.height 
            }
        }

        function fire(particleRatio, opts) {
            confetti({
                ...defaults,
                ...opts,
                particleCount: Math.floor(count * particleRatio)
            })
        }

        fire(0.25, {
            spread: 26,
            startVelocity: 55,
        })
        fire(0.2, {
            spread: 60,
        })
        fire(0.35, {
            spread: 100,
            decay: 0.91,
            scalar: 0.8
        })
        fire(0.1, {
            spread: 120,
            startVelocity: 25,
            decay: 0.92,
            scalar: 1.2
        })
        fire(0.1, {
            spread: 120,
            startVelocity: 45,
        })
    }

    function check() {
        if (props.type === "habbit") {
            if (!checked) {
                fireConfetti()
                setChecked(true)

                axios.patch(`/api/user/${searchParams.get("id")}/habbit/${props.data._id}`, {
                    last_checked: Date.now(),
                    streak: props.data.streak + 1,
                    coins: props.data.streak + 1 > props.data.coins ? props.data.streak + 1 : props.data.coins
                })
                .catch(err => console.log(err))
                .finally(() => {
                    props.reload()
                })
            }
        } else if (props.type === "todo") {
            fireConfetti()
            setTodoCheck(true)
            axios.delete(`/api/user/${searchParams.get("id")}/todo/${props.data._id}`)
            .catch(err => console.log(err))
            .finally(() => {
                props.reload()
            })
        }
    }

    function deleteTask() {
        setDeleteLoading(true)
        axios.delete(`/api/user/${searchParams.get("id")}/${props.type}/${props.data._id}`)
        .catch(err => console.log(err))
        .finally(() => {
            setDeleteLoading(false)
            props.reload()
        })
    }

    useEffect(() => {
        // this is stupid but it fixes many state caryover issues
        setTodoCheck(false)
    }, [props])

    useEffect(() => {
        console.log(last_checked_diff)
        if (last_checked_diff > 1 && props.type === "habbit") {
            axios.patch(`/api/user/${searchParams.get("id")}/habbit/${props.data._id}`, {
                last_checked: props.data.last_check,
                streak: 0
            })
            .catch(err => console.log(err))
            .finally(() => {
                props.reload()
            })
        }
    }, [])

    useEffect(() => {
        setEditDropdownState(false)
    }, [props.data.title])

    return (
        // <div className={`${props.type === "todo" && todoCheck === true ? "hidden" : "flex"} flex-col ${props.data.desc === "" ? "" : "gap-2"} bg-secondary p-3 rounded-md shadow-lg fade-in`}>
        <div className={`flex flex-col ${props.data.desc === "" ? "" : "gap-2"} bg-secondary p-3 rounded-md shadow-lg fade-in`}>
            <div className="flex flex-row justify-between w-full items-center gap-5">
                <div className="flex flex-row gap-2 items-center w-4/5 relative">
                    <img className="h-6 invert p-1 bg-black/20 rounded-md cursor-pointer hover:bg-black/30 duration-100" src={PencilIcon.src} alt="flame icon" onClick={() => setEditDropdownState(e => !e)} />
                    <p className="font-bold drop-shadow-md whitespace-nowrap overflow-hidden overflow-ellipsis">{props.data.title[0].toUpperCase() + props.data.title.substr(1).toLowerCase()}</p>
                    {editDropdownState ? (
                        <ul className="bg-white rounded-md shadow-md overflow-hidden absolute top-full mt-2 left-0 z-20 text-secondary pop-in">
                            <li className="px-3 py-1 hover:bg-zinc-100 bg-zinc-200 duration-100 font-semibold cursor-pointer" onClick={() => props.setModalEditState({ id: props.data._id, type: props.type })}>
                                <button>Edit Title</button>
                            </li>
                            <li className={`px-3 py-1 bg-red-500 text-red-900 font-bold hover:bg-red-400 duration-100 ${deleteLoading ? 'cursor-not-allowed pointer-events-none' : 'cursor-pointer pointer-events-auto'}`} onClick={() => deleteTask()}>
                                <button>{deleteLoading ? "LOADING..." : "Delete Task"}</button>
                            </li>
                        </ul>
                    ) : ""}
                </div>
                <button ref={location} className={`h-6 p-1 aspect-square rounded-md ${(todoCheck && props.type === "todo") || (checked && props.type === "habbit") ? "text-green-900 bg-green-500 cursor-not-allowed" : "text-black bg-white"} font-bold shadow-md`} onClick={() => check()}>
                    {(todoCheck && props.type === "todo") || (checked && props.type === "habbit") ? (
                        <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fade-in">✓</p>
                    ) : (
                        ""
                    )}
                </button>
            </div>
            {props.data.desc === "" ? "" : <div className="w-full h-px bg-white/20 my-1"></div>}
            {props.type === "habbit" ? (
                <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <div className={`flex flex-row ${props.data.coins === 0 ? "bg-zinc-500 text-zinc-900" : "bg-sky-500 text-sky-900"} px-2 py-1 rounded-md font-semibold items-center justify-center shadow-md duration-300`}>
                        <img className={`h-6 mr-2 ${props.data.coins === 0 ? "grayscale" : ""}`} src={DiamondIcon.src} alt="flame icon" />
                        <p>{props.data.coins}</p>
                    </div>
                    <div className={`flex flex-row ${props.data.streak === 0 ? "bg-zinc-500 text-zinc-900" : "bg-orange-500 text-orange-900"} px-2 py-1 rounded-md font-semibold items-center justify-center shadow-md duration-300`}>
                        <img className={`h-6 duration-300 ${props.data.streak === 0 ? "grayscale" : ""}`} src={FlameIcon.src} alt="flame icon" />
                        <p>{props.data.streak}</p>
                    </div>
                </div>
            ) : (
                <p>{props.data.desc}</p>
            )}
        </div>
    )
}