import { useEffect, useState } from "react";

const useBreakpointValue = () => {
	const [isDesktop, setIsDesktop] = useState(false);

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 768) {
				setIsDesktop(true);
			} else {
				setIsDesktop(false);
			}
		};

		window.addEventListener("resize", handleResize);

		handleResize();

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return isDesktop;
};

export default useBreakpointValue;
