import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { IMAGES } from "../assets/images";
import { Link } from "react-router-dom";
import { PhoneCall } from "lucide-react";

export default function Header() {
	const [menuOpen, setMenuOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full bg-white">
			{/* Top Bar */}
			<div className="bg-[#024F2D] px-4 min-[1400px]:px-18 py-2.5 flex justify-center items-center gap-2 text-sm">
				<PhoneCall
					className="w-4 h-4 text-yellow-400"
					fill="currentColor"
					strokeWidth={0}
				/>

				<span className=" text-white">
					Call Us: <b>0333 015 38 83</b>
					<span className="hidden sm:inline">
						{" "}
						to Discuss Your Requirements
					</span>
				</span>
			</div>

			{/* Main Header */}
			<div className="border-b border-gray-200">
				<div className="mx-auto px-4 min-[1400px]:px-18 h-22.5 flex items-center justify-between">
					{/* Logo + Menu */}
					<div className="flex items-center gap-6">
						<Link to="/" className="flex-shrink-0">
							<img
								src={IMAGES.logo}
								alt="AVG Windscreens"
								className="h-[70px] w-auto"
							/>
						</Link>

						{/* Desktop Navigation ≥1600px */}
						<nav className="hidden min-[1600px]:flex items-center gap-6 text-base font-medium text-black">
							<button className="flex items-center justify-center gap-2 hover:text-green-900">
								Repair & Replacement <ChevronDown className="h-4 w-4" />
							</button>
							<button className="flex items-center  justify-center gap-2 hover:text-green-900">
								Bodyglass Replacement <ChevronDown className="h-4 w-4" />
							</button>
							<a href="#" className="hover:text-green-900">
								Wing Mirror Replacement
							</a>
							<a href="#" className="hover:text-green-900">
								Insurance
							</a>
							<a href="#" className="hover:text-green-900">
								FAQs
							</a>
						</nav>
					</div>

					{/* Desktop Action Buttons ≥1600px */}
					<div className="hidden min-[1600px]:flex items-center gap-3">
						<button className="bg-yellow-500 px-6 py-4 text-lg font-medium text-white">
							Get a Quote
						</button>
						<button className="bg-green-900 px-6 py-4 text-lg font-medium text-white">
							Trade Account
						</button>
						<button className="border border-green-900 px-6 py-4 text-lg font-medium text-green-900">
							Login
						</button>
					</div>

					{/* Mobile / <1600px Menu Toggle */}
					<button
						onClick={() => setMenuOpen(!menuOpen)}
						className="min-[1600px]:hidden text-green-900"
					>
						{menuOpen ? (
							<X className="h-7 w-7" />
						) : (
							<Menu className="h-7 w-7" />
						)}
					</button>
				</div>

				{/* Collapsed Menu <1600px */}
				{menuOpen && (
					<div className="min-[1600px]:hidden border-t border-gray-200 py-6 px-6 min-[1400px]:px-[72px] space-y-6">
						<nav className="space-y-6 text-base font-medium text-gray-900">
							<details className="pb-2">
								<summary className="flex justify-between cursor-pointer items-center">
									Repair & Replacement <ChevronDown className="h-4 w-4" />
								</summary>
							</details>

							<details className="pb-2">
								<summary className="flex justify-between cursor-pointer items-center">
									Bodyglass Replacement <ChevronDown className="h-4 w-4" />
								</summary>
							</details>

							<a href="#" className="block py-2">
								Wing Mirror Replacement
							</a>
							<a href="#" className="block py-2">
								Insurance
							</a>
							<a href="#" className="block py-2">
								FAQs
							</a>
						</nav>

						{/* Action Buttons inside collapsed menu */}
						<div className="space-y-3 pt-4">
							<button className="w-full bg-yellow-500 px-6 py-4 text-lg font-medium text-white">
								Get a Quote
							</button>
							<button className="w-full bg-green-900 px-6 py-4 text-lg font-medium text-white">
								Trade Account
							</button>
							<button className="w-full border border-green-900 px-6 py-4 text-lg font-medium text-green-900">
								Login
							</button>
						</div>
					</div>
				)}
			</div>
		</header>
	);
}
