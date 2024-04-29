import Hero from "@/components/Hero";
import HowItWorks from "@/components/HowItWorks";
import WhatWeProvide from "@/components/WhatWeProvide";
import OurGoals from "@/components/OurGoals";

export default function Home() {
	return (
		<main className="max-w-screen-md mx-auto">
			<Hero />
			<HowItWorks />
			<WhatWeProvide />
			<OurGoals />
		</main>
	);
}
