import PlusIcon from '@/assets/svg/plus.svg'
import CheckMark from '@/assets/svg/checkmark.svg'
import Coin from '@/assets/svg/o.svg'

export default function HowItWorks() {
    return (
        <section id="how-it-works">
            <h2 className="text-5xl font-bold text-center">HOW IT WORKS</h2>
            <div className='flex flex-row justify-between mt-12 font-semibold'>
                <div className='flex flex-col items-center justfy-center'>
                    <img className="w-24" src={PlusIcon.src} alt="plus icon" />
                    <p>Add a new daily goal</p>
                </div>
                <div className='flex flex-col items-center justfy-center'>
                    <img className="w-24" src={CheckMark.src} alt="checkmark icon" />
                    <p>Check it off every day</p>
                </div>
                <div className='flex flex-col items-center justfy-center'>
                    <img className="w-24" src={Coin.src} alt="coin icon" />
                    <p>Earn in-game rewards!</p>
                </div>
            </div>


        </section>
    )
}