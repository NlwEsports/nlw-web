import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
	createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
	control: {
		borderRadius: "12px",
		borderColor: "zinc.200",
		_checked: {
			bgColor: "violet.500",
		},
	},
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });
