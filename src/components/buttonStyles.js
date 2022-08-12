import { whiten } from "@chakra-ui/theme-tools";

export const ButtonStyles = {
	// Styles for the base style
	baseStyle: {
		fontWeight: "bold",
		textTransform: "uppercase",
		borderRadius: "base",
	},
	// Styles for the size variations
	sizes: {
        sm: {
            fontSize: 'sm',
            px: 4, 
            py: 3, 
          },
          md: {
            fontSize: 'md',
            px: 6, 
            py: 4, 
          },
    },
	// Styles for the visual style variations
	variants: {
		// primary: {
		// 	bg: "primary",
		// 	color: "white",
		// 	_hover: {
		// 		bg: whiten("primary", 20),
		//         boxShadow:"md"
		// 	},
		// },
		primary: (props) => ({
			bg: "primary",
			color: "white",
			_hover: {
				bg: whiten("primary", 20),
				boxShadow: "md",
			},
		}),
		secondary: (props) => ({
			bg: "secondary",
			color: "white",
			_hover: {
				bg: whiten("secondary", 20),
				boxShadow: "md",
			},
		}),
		secondaryOutline: (props) => ({
			bg: "transparent",
			color: "secondary",
			border: "1px solid",
			borderColor: "secondary",
			_hover: {
				transform: "scale(1.02)",
				boxShadow: "md",
			},
		}),
	},
	// The default `size` or `variant` values
	defaultProps: {
        size: 'md',
        variant: 'primary',
    },
};
