import WhyArt from '@/assets/vector art/why.svg'

export default function WhatWeProvide() {
    return (
        <section id="how-it-works" className="py-12 w-3/4 mx-auto">
            <h2 className="text-5xl font-bold text-center">WHY?</h2>
            <div className='flex flex-row gap-10 mt-12 items-end'>
                <img src={WhyArt.src} alt="vector art" className='w-64' />
                <p className="font-semibold">We try our best to provide a daily goal that distracts you from the constant negativity.  For example instead of thinking about not biting your nails you can instead think "If I can just make it through today I will reach the next level!"</p>
            </div>
        </section>
    )
}