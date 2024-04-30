import NavBar from "@/components/global/NavBar";
import Footer from "@/components/global/Footer";
import SessionContext from "@/utils/SessionContext";

import { Poppins } from "next/font/google";
import "./globals.css";

const poppins = Poppins({ subsets: ["latin"], weight:['100', '200', '300', '400', '500', '600', '700', '800', '900'] });

export const metadata = {
	title: "Create Next App",
	description: "Generated by create next app",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth overflow-x-hidden">
			<body className={`bg-background text-text min-h-screen ${poppins.className}`}>
				<SessionContext>
					<NavBar />
					{children}
					<Footer />
				</SessionContext>
			</body>
		</html>
	);
}
