import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
	thumb: {
		bg: "violet.500",
	},
	track: {
		border: "1px solid",
		borderColor: "zinc.200",
		bg: "zinc.400",
		_checked: {
			bg: "zinc.200",
		},
	},
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
