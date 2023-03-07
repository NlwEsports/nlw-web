import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
	fontFamily: "Inter",
	fontWeight: "semibold",
});

export const buttonTheme = defineStyleConfig({ baseStyle });
