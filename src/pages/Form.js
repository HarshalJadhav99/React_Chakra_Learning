import {
	Button,
	color,
	Divider,
	FormControl,
	FormHelperText,
	Icon,
	Input,
	InputGroup,
	InputLeftAddon,
	InputLeftElement,
	Stack,
} from "@chakra-ui/react";
import React from "react";
import {EmailIcon} from '@chakra-ui/icon'

const Form = () => {
	return (
		<>
			<form action="submit">
				<Stack spacing={3}>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement children={<Icon name="info" />} />
							<Input
								type="name"
								placeholder="First Name"
								aria-label="First Name"
							/>
						</InputGroup>
					</FormControl>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement children={<Icon name="info" />} />
							<Input
								type="name"
								placeholder="Last Name"
								aria-label="Last Name"
							/>
						</InputGroup>
					</FormControl>
					<Divider />
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement children={<Icon name="info" />}/>
							<Input type="email" placeholder="Email" aria-label="Email" />
						</InputGroup>
					</FormControl>
					<FormControl isRequired>
						<InputGroup>
							<InputLeftElement children={<Icon name="Lock"/>} />
							<Input
								type="password"
								placeholder="Password"
								aria-label="Password"
							/>
						</InputGroup>
					</FormControl>
					<Button
						type="submit"
						variant="solid"
						colorScheme={"red"}
						boxShadow="sm"
						_hover={{ boxShadow: "md", background: "transparent", color:'blue' ,border:'1px solid blue' }}
						_active={{ boxShadow: "lg" }}>
						Sign Up!
					</Button>
				</Stack>
			</form>
		</>
	);
};

export default Form;
