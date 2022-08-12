import { extendTheme, withDefaultVariant } from "@chakra-ui/react";
import { ButtonStyles as Button } from "../components/buttonStyles";
import { inputStyles as Input } from "../components/inputStyles";
export const myNewTheme = extendTheme({
	colors: {
		primary: "#845EC2",
		secondary: "#FF6F91",
		highlight: "#00C9A7",
		warning: "#FFC75F",
		danger: "#C34A36",
		brand: {
			100: "#f7fafc",

			900: "#1a202c",
		},
	},
	components: {
		Button,
		Input: {
            ...Input,
        },
	},

},
withDefaultVariant({
    variant: "filled",
    components: ["Input", "Select", "Textarea"],
}));
