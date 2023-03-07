import { inputAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(inputAnatomy.keys);

const baseStyle = definePartsStyle({
	field: {
		fontFamily: "Inter",
		fontWeight: "regular",
		color: "zinc.500",
		background: "zinc.900",
		bgColor: "zinc.900",
		_hover: {
			bgColor: "zinc.800",
		},
		_focus: {
			bgColor: "zinc.800",
		},
	},
});

export const inputTheme = defineMultiStyleConfig({
	baseStyle,
});
