export default function Hero() {
    return (
        <section className="grid place-items-center min-h-screen">
            <div>
                <h1 className="text-3xl sm:text-5xl font-bold">TURN <span className="text-red-400">BAD</span> HABBITS<br/>INTO <span className="text-green-400">GOOD</span> ONES.</h1>
                <button className="button mt-3">
                    <a href="#how-it-works">Get Started!</a>
                </button>
            </div>
        </section>
    )
}

// auto change good to other words for some anitmation
// add intro animations