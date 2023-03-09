import HeaderClient from "../components/client/Header.client";
import HeaderMobile from "../components/mobile/Header.mobile";
import useBreakpointValue from "../hooks/useBreakpointValue";
import { PageType } from "../types/page.type";

const Page = ({ client, mobile }: PageType) => {
	const [header, screen] = useBreakpointValue()
		? [<HeaderClient />, client]
		: [<HeaderMobile />, mobile];

	return (
		<>
			{header}
			{screen}
		</>
	);
};

export default Page;
