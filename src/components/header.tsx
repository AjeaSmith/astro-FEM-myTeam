
import { useState } from "react";
import PrimaryButton from "./ui/buttons/primary-button";

// TODO: hook up js for navbar
// TODO: set up styles
// TODO: coding in public for creating reusable button components

const Header = () => {
	const [menuOpen, setMenuOpen] = useState(false);

	function toggleMenu() {
		setMenuOpen(!menuOpen);
		if (!menuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
	}
	return (
		<header>

			{/* overlay that happens when menu is opened */}
			{menuOpen && (
				<div
					style={{
						width: "30%",
						left: 0,
					}}
					className="fixed inset-0 z-40 overflow-hidden bg-black bg-opacity-50 sm:hidden"
					onClick={toggleMenu}
				></div>
			)}

			<div className="container flex items-center justify-between px-6 pt-12 sm:justify-start sm:space-x-[48px] sm:px-[40px] xl:px-0">

				<img src="/assets/logo.svg" alt="logo" width={128} height={48} />

				{/* Regular Menu for Tablet and Larger Screens */}
				<nav className="hidden items-center sm:flex sm:w-full sm:justify-between">
					<div className="space-x-10">
						<a href="/" className="text-white hover:text-primary-coral">
							home
						</a>
						<a href="/about" className="text-white hover:text-primary-coral">
							about
						</a>
					</div>
					<a href="/contact">
						<PrimaryButton mode="light" title="Contact Us" state="hover" />
					</a>
				</nav>

				{/* Hamburger Menu for Mobile Screens */}
				{!menuOpen && (
					<button onClick={toggleMenu} className="focus:outline-none sm:hidden">
						<img
							src="/assets/icon-hamburger.svg"
							alt="hamburger menu"
							width={20}
							height={17}
						/>
					</button>
				)}
			</div>

			{/* Slide-In Menu for Mobile Screens */}
			<div
				className={`fixed right-0 top-0 z-10 h-full w-[70%] transform bg-secondary-green-500 text-white transition-transform duration-300 ease-in-out ${
					menuOpen ? "translate-x-0" : "translate-x-full"
				} sm:hidden`}
			>

				{menuOpen && (
					<button
						onClick={toggleMenu}
						className="absolute right-6 top-14 focus:outline-none"
					>
						<img
							src="/assets/icon-close.svg"
							alt="close"
							width={20}
							height={17}
						/>
					</button>
				)}

				<nav className="flex flex-col items-start space-y-6 px-10 pt-32">
					<a href="/" className="text-white">
						home
					</a>
					<a href="/about" className="mb-8 text-white">
						about
					</a>
					<a href="/contact">
						<PrimaryButton mode="light" title="Contact Us" />
					</a>
				</nav>

				<img
					src="/assets/bg-pattern-about-1-mobile-nav-1.svg"
					alt="hero image"
					width={255}
					height={255}
					className="absolute bottom-0 left-[57%]"
				/>
			</div>
		</header>
	);
};

export default Header;
