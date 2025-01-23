// import { useMenu } from "@/lib/context/menu-context";
// import { cn } from "@/lib/utils";
// import { useEffect } from "react";

// const Overlay = () => {
// 	const { isMenuOpen, toggleMenu } = useMenu();

// 	// prevents scrolling when menu is opened
// 	useEffect(() => {
// 		if (isMenuOpen) {
// 			document.body.classList.add("overflow-hidden");
// 		} else {
// 			document.body.classList.remove("overflow-hidden");
// 		}
// 		// Cleanup function to remove the class when the component unmounts
// 		return () => {
// 			document.body.classList.remove("overflow-hidden");
// 		};
// 	}, [isMenuOpen]);

// 	return (
// 		<>
// 			{isMenuOpen && (
// 				<div
// 					style={{
// 						width: "120px",
// 						left: 0,
// 					}}
// 					className={cn(
// 						"fixed inset-0 z-40 overflow-hidden bg-black bg-opacity-50 sm:hidden"
// 					)}
// 					onClick={toggleMenu}
// 				></div>
// 			)}
// 		</>
// 	);
// };

// export default Overlay;
