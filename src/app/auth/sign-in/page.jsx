"use client"

import { getProviders, signIn } from 'next-auth/react';
import Image from 'next/image';

import Google from "@/assets/svg/logo-google.svg"

export default async function SignIn() {
    const providers = await getProviders()

    return (
        <main className='grid place-items-center min-h-screen'>
            {providers && Object.values(providers).map((provider) => (
                <div key={provider.name}>
                    <button onClick={() => signIn(provider.id, { callbackUrl: "https://www.snippity.dev" })}>
                        <Image 
                            src={provider.name === "Google" ? Google : undefined}
                            width={30}
                            height={30}
                            alt={`${provider.name} logo`}
                        />
                    </button>
                </div>
            ))}
        </main>
    )
}