'use client'

import { useState, useEffect, useRef } from "react"
import { useSearchParams } from "next/navigation"
import moment from "moment"
import axios from "axios"

import FlameIcon from '@/assets/svg/flame.svg'
import Checkmark from '@/assets/svg/checkmark.svg'
import confetti from "canvas-confetti"

// TODO: add delete button to habbits & todo

export default function HabbitCheck(props) {
    const searchParams = useSearchParams()
    
    // const [duration, setDuration] = useState(moment.duration(Date.now() - last_check).asDays())
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
            }
        } else if (props.type === "todo") {
            axios.delete(`/api/user/${searchParams.get('id')}/todo/${props.data._id}`)
            .then(res => {
                console.log(res)
                fireConfetti()
                setChecked(true)
            })
            .catch(err => console.log(err))
        }
    }

    return (
        <section className="flex flex-col gap-2 items-start bg-secondary p-3 rounded-md shadow-lg">
            <div className="flex flex-row justify-between w-full items-center gap-5">
                <p className="font-bold drop-shadow-md whitespace-nowrap overflow-hidden overflow-ellipsis">{props.data.title[0].toUpperCase() + props.data.title.substr(1).toLowerCase()}</p>
                <button ref={location} className={`p-3 rounded-md ${checked ? 'text-green-900 bg-green-500' : 'text-black bg-white'} font-bold relative shadow-md`} onClick={() => check()}>
                    {checked ? (
                        <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">✓</p>
                    ) : (
                        ''
                    )}
                </button>
            </div>
            {props.type === "habbit" ? (
                <div>habbit world!</div>
                // <div className="flex flex-row gap-5 items-center justify-between w-full">
                //     <div className={`px-2 py-1 ${duration < 1 ? 'bg-green-500 text-green-900' : 'bg-red-500 text-red-900'} font-semibold rounded-md shadow-md`}>{Math.round(duration * 100) / 100} Days</div>
                //     <div className="flex flex-row bg-orange-500 text-orange-900 px-2 py-1 rounded-md font-semibold items-center justify-center shadow-md">
                //         <img className="h-6" src={FlameIcon.src} alt="flame icon" />
                //         <p>{streak}</p>
                //     </div>
                // </div>
            ) : (
                <div>hello, world!</div>
            )}
        </section>
    )
}