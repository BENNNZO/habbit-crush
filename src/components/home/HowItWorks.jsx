// import PlusIcon from '@/assets/svg/plus.svg'
// import CheckMark from '@/assets/svg/checkmark.svg'
// import Coin from '@/assets/svg/o.svg'

import AddArt from '@/assets/vector art/add.svg'
import CheckArt from '@/assets/vector art/check.svg'
import GiftArt from '@/assets/vector art/gift.svg'

export default function HowItWorks() {
    return (
        <section id="how-it-works" className='py-12'>
            <h2 className="text-4xl sm:text-5xl font-bold text-center">HOW IT WORKS</h2>
            <div className='flex flex-col gap-12 md:gap-0 md:flex-row justify-between mt-12 font-semibold'>
                <div className='flex flex-col items-center justfy-center relative -left-8 md:left-0'>
                    <img className="h-32 md:h-24 mb-4" src={AddArt.src} alt="plus icon" />
                    <p>Add daily goals</p>
                </div>
                {/* <div className='h-4 w-0 border-l border-white/20 mx-auto border-dashed'></div> */}
                <div className='flex flex-col items-center justfy-center relative left-8 md:left-0'>
                    <img className="h-32 md:h-24 mb-4" src={CheckArt.src} alt="checkmark icon" />
                    <p>Check it off</p>
                </div>
                {/* <div className='h-4 w-0 border-l border-white/20 mx-auto border-dashed'></div> */}
                <div className='flex flex-col items-center justfy-center relative -left-8 md:left-0'>
                    <img className="h-32 md:h-24 mb-4" src={GiftArt.src} alt="coin icon" />
                    <p>Earn in-game rewards!</p>
                </div>
                {/* <div className='flex flex-col items-center justfy-center'>
                    <img className="w-24" src={PlusIcon.src} alt="plus icon" />
                    <p>Add custom daily goals</p>
                </div>
                <div className='flex flex-col items-center justfy-center'>
                    <img className="w-24" src={CheckMark.src} alt="checkmark icon" />
                    <p>Check it off</p>
                </div>
                <div className='flex flex-col items-center justfy-center'>
                    <img className="w-24" src={Coin.src} alt="coin icon" />
                    <p>Earn in-game rewards!</p>
                </div> */}
            </div>


        </section>
    )
}