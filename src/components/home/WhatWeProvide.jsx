import WhyArt from '@/assets/vector art/why.svg'

export default function WhatWeProvide() {
    return (
        <section id="how-it-works" className="py-12 w-3/4 mx-auto">
            <h2 className="text-4xl sm:text-5xl font-bold text-center">WHY US?</h2>
            <div className='flex flex-col sm:flex-row gap-4 sm:gap-10 mt-12 items-center sm:items-start'>
                <img src={WhyArt.src} alt="vector art" className='w-64' />
                <ol className='flex flex-col gap-4'>
                    <li className="font-semibold list-decimal">This is an easy and fun alternative to quitting a habbit cold turkey</li>
                    <li className="font-semibold list-decimal">We also provide many tools to help you stop all habbits</li>
                    <li className="font-semibold list-decimal">Lorem ipsum dolor sit amet consectetur adipisicing.</li>
                </ol>
            </div>
        </section>
    )
}