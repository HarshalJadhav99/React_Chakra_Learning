export const inputStyles = {
	// Styles for the base style
	baseStyle: {},
	// Styles for the size variations
	sizes: {},
	// Styles for the visual style variations
	variants: {
		primary: (props) => ({
			variants: {
				filled: {
					field: {
						_focus: {
							borderColor: "primary",
						},
					},
				},
			},
			sizes: {
				md: {
					field: {
						borderRadius: "none",
					},
				},
			},
		}),
	},
	// The default `size` or `variant` values
	defaultProps: {},
};
