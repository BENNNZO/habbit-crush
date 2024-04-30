'use client'

import { useState, useEffect } from "react"
import moment from "moment"

import FlameIcon from '@/assets/svg/flame.svg'
import Checkmark from '@/assets/svg/checkmark.svg'

export default function HabbitCheck(props) {
    const { title, last_check, streak } = props

    const [duration, setDuration] = useState(moment.duration(Date.now() - last_check).asDays())
    const [checked, setChecked] = useState(duration < 1)

    useEffect(() => {
        setInterval(() => {
            setDuration(moment.duration(Date.now() - last_check).asDays())
        }, 1000);
    }, [])

    return (
        <section className="flex flex-col gap-2 items-start bg-secondary p-3 rounded-md shadow-md">
            <p className="font-bold leading-3">{title[0].toUpperCase() + title.substr(1).toLowerCase()}</p>
            <div className="flex flex-row bg-orange-500 text-orange-900 px-2 py-1 rounded-md shadow-md font-semibold items-center justify-center">
                <img className="h-6" src={FlameIcon.src} alt="flame icon" />
                <p>{streak}</p>
            </div>
            <div className={`px-2 py-1 ${duration < 1 ? 'bg-green-500 text-green-900' : 'bg-red-500 text-red-900'} font-semibold rounded-md shadow-md`}>{Math.round(duration * 100) / 100} Days</div>
            <button className={`p-2.5 rounded-md border-2 ${checked ? 'border-green-700 text-green-900 bg-green-500' : 'border-zinc-500 text-black bg-white'} font-bold relative`} onClick={() => null}>
                {checked ? (
                    <p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">✓</p>
                ) : (
                    ''
                )}
            </button>
        </section>
    )
}