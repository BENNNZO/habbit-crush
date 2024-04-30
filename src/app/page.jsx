import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import WhatWeProvide from "@/components/home/WhatWeProvide";
import OurGoals from "@/components/home/OurGoals";
import Showcase from "@/components/home/Showcase";

export default function Home() {
	const line = <div className="h-px w-full bg-gradient-to-r from-transparent via-secondary/35 to-transparent"></div>

	return (
		<main className="max-w-screen-md mx-auto text-text">
			<Hero />
			{line}
			<HowItWorks />
			{line}
			<WhatWeProvide />
			{line}
			<Showcase />
			{line}
			<OurGoals />
		</main>
	);
}
