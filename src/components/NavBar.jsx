export default function NavBar() {
    return (
        <nav className="fixed w-screen h-16 p-2 flex flex-row justify-between">
            <ul className="flex flex-row gap-2 items-center ml-1">
                <li className="button">
                    <a href="/sign-in">SIGN IN</a>
                </li>
                <li className="button">
                    <a href="/pricing">PRICING</a>
                </li>
                <li className="button">
                    <a href="/dashboard">DASHBOARD</a>
                </li>
            </ul>
            <img className="h-full cursor-pointer" src='https://source.boringavatars.com/marble/120/asdasd?colors=E9D7A9,D2D09F,D5A57F,B56A65,4B3132' />
        </nav>
    )
}

// https://source.boringavatars.com/marble/120/{name}?colors=bd2a33,d6aa26,93a31c,408156,30374f
// bd2a33-d6aa26-93a31c-408156-30374f
// oneOf: marble (default), beam, pixel,sunset, ring, bauhaus