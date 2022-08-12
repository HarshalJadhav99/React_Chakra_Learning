import { Box, Button, Center, Input, Stack, Wrap, WrapItem } from "@chakra-ui/react";
import React from "react";

const Reusable = () => {
	return (
		<>
			<Center h="100vh" maxW="1200px" mx="auto">
				<Stack p="5">
					<Wrap spacing="5">
						<WrapItem>
							<Button
								className="primary1"
								bg={"primary.500"}
								variant={"primary"}>
								Reusable 1
							</Button>
						</WrapItem>
						<WrapItem>
							{/* <Button variant={"solid"} bg={"primary"} >Reusable 2</Button> */}
							<Button variant={"primary"}>Primary</Button>
						</WrapItem>
						<WrapItem>
							<Button variant={"secondary"}>Secondary</Button>
						</WrapItem>
						<WrapItem>
							<Button variant={"secondaryOutline"}>SecondaryOutline</Button>
							<Button colorScheme="brand">Click me</Button>
						</WrapItem>
					</Wrap>
                    <Wrap>
                        <WrapItem>
                            <Input placeholder='Primary' />
                        </WrapItem>
                    </Wrap>
				</Stack>
			</Center>
		</>
	);
};

export default Reusable;
