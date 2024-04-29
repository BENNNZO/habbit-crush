export default function Hero() {
    return (
        <section className="grid place-items-center min-h-screen">
            <div>
                <h1 className="text-5xl font-bold">TURN <span className="text-red-300">BAD</span> HABBITS<br/>INTO <span className="text-green-300">GOOD</span> ONES.</h1>
                <button className="bg-secondary px-4 py-2 rounded-md shadow-md mt-3 font-semibold hover:bg-accent duration-100">Get Started!</button>
            </div>
        </section>
    )
}

// auto change good to other words for some anitmation
// add intro animations