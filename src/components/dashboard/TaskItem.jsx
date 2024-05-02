'use client'

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import confetti from "canvas-confetti"
import moment from "moment"
import axios, { spread } from "axios"

import FlameIcon from '@/assets/svg/flame.svg'
import Checkmark from '@/assets/svg/checkmark.svg'
import DiamondIcon from '@/assets/svg/diamond-outline.svg'
import PencilIcon from '@/assets/svg/pencil.svg'

// TODO: add delete / edit button to habbits & todo

export default function TaskItem(props) {
    const searchParams = useSearchParams()
    
    const [checked, setChecked] = useState(false)
    
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
                
                axios.patch(`/api/user/${searchParams.get('id')}/habbit/${props.data._id}`, {
                    last_checked: Date.now(),
                    streak: props.data.streak + 1
                })
                .then(res => {
                    console.log(res)
                })
                .catch(err => console.log(err))
                .finally(() => {
                    props.reload()
                })
            }
        } else if (props.type === "todo") {
            fireConfetti()
            setChecked(true)
            axios.delete(`/api/user/${searchParams.get('id')}/todo/${props.data._id}`)
            .catch(err => console.log(err))
            .finally(() => {
                props.reload()
            })
        }
    }

    useEffect(() => {
        // this is stupid but it fixes many state caryover issues
    }, [props])

    return (
        <div className={`${props.type === "todo" && checked === true ? "hidden" : "flex"} flex-col ${props.data.desc === "" ? "" : "gap-2"} bg-secondary p-3 rounded-md shadow-lg fade-in`}>
            <div className="flex flex-row justify-between w-full items-center gap-5">
                <div className="flex flex-row gap-2 items-center w-4/5">
                    <img className="h-6 invert p-1 bg-black/20 rounded-md cursor-pointer hover:bg-black/30 duration-100" src={PencilIcon.src} alt="flame icon" />
                    <p className="font-bold drop-shadow-md whitespace-nowrap overflow-hidden overflow-ellipsis">{props.data.title[0].toUpperCase() + props.data.title.substr(1).toLowerCase()}</p>
                </div>
                <button ref={location} className={`h-6 p-1 aspect-square rounded-md ${checked ? 'text-green-900 bg-green-500' : 'text-black bg-white'} font-bold shadow-md`} onClick={() => check()}>
                    {checked ? (
                        <p className="relative top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fade-in">✓</p>
                    ) : (
                        ''
                    )}
                </button>
            </div>
            {props.data.desc === "" ? "" : <div className="w-full h-px bg-white/20 my-1"></div>}
            {props.type === "habbit" ? (
                <div className="flex flex-row gap-5 items-center justify-between w-full">
                    <div className={`px-2 py-1 bg-green-500 text-green-900 font-semibold rounded-md shadow-md`}>100 Days</div>
                        <img className="h-6" src={DiamondIcon.src} alt="flame icon" />
                    <div className="flex flex-row bg-orange-500 text-orange-900 px-2 py-1 rounded-md font-semibold items-center justify-center shadow-md">
                        <img className="h-6" src={FlameIcon.src} alt="flame icon" />
                        <p>{props.data.streak}</p>
                    </div>
                </div>
            ) : (
                <p>{props.data.desc}</p>
            )}
        </div>
    )
}