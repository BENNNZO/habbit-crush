import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeProvide from "@/components/WhatWeProvide";
import OurGoals from "@/components/OurGoals";
import Showcase from "@/components/Showcase";

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
