import { selectAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(selectAnatomy.keys);

const baseStyle = definePartsStyle({
	field: {
		fontFamily: "Inter",
		fontWeight: "regular",
		color: "zinc.500",
		bgColor: "zinc.900",
		_hover: {
			bgColor: "zinc.800",
		},
		_focus: {
			bgColor: "zinc.800",
		},
	},
	icon: {
		color: "zinc.500",
	},
});

export const selectTheme = defineMultiStyleConfig({ baseStyle });
