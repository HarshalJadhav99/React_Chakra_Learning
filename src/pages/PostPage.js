import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Avatar,
	Box,
	Container,
	Heading,
	HStack,
	Icon,
	IconButton,
	Image,
	Stack,
	Text,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

import { IoMdArrowBack } from "react-icons/io";

const PostPage = () => {
	return (
		<Container maxW={"container.xl"}>
			<Stack spacing={4} mt="8">
				<HStack>
					<Heading fontSize="xl" textTransform="capitalize">
						Web Devloper
					</Heading>
					<IconButton
          as={Link} to="/"
						variant={"ghost"}
						_hover={{ bg: "main.400" }}
						fontSize="3xl">
						<IoMdArrowBack />
					</IconButton>
				</HStack>
				<Image src="/post.png" />
				<HStack>
					<Avatar name="Harshal Jadhav" size={"lg"} />
					<Text fontWeight="600">Harshal Jadhav</Text>
					<Text fontSize={"xs"}>1 min ago</Text>
				</HStack>
				<Text>
					Ea anim non ipsum nulla. Aliqua ipsum deserunt mollit nulla. Nulla
					aute deserunt mollit sit consectetur ad voluptate irure. Qui
					exercitation nisi ea veniam irure. Tempor nostrud exercitation qui
					laborum consectetur velit do sunt nulla tempor sint dolore.
				</Text>
				<Text>
					Ea anim non ipsum nulla. Aliqua ipsum deserunt mollit nulla. Nulla
					aute deserunt mollit sit consectetur ad voluptate irure. Qui
					exercitation nisi ea veniam irure. Tempor nostrud exercitation qui
					laborum consectetur velit do sunt nulla tempor sint dolore.
				</Text>
				<Accordion>
					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Section 1 title
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>

					<AccordionItem>
						<h2>
							<AccordionButton>
								<Box flex="1" textAlign="left">
									Section 2 title
								</Box>
								<AccordionIcon />
							</AccordionButton>
						</h2>
						<AccordionPanel pb={4}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat.
						</AccordionPanel>
					</AccordionItem>
				</Accordion>
			</Stack>
		</Container>
	);
};

export default PostPage;
