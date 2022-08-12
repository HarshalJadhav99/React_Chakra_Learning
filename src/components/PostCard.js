import {
	Avatar,
	Button,
	Flex,
	Heading,
	HStack,
	Image,
	
	Stack,
	Text,
	VStack,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
const PostCard = () => {
	return (
		<>
			<Flex justify={"center"} align="center">
				<Stack w={"320px"} h={"450px"} boxShadow="md" borderRadius={"xl"}>
					<Image src="/post.png" alt="image" />
					<Stack p={2}>
						<HStack>
							<Avatar size={"sm"} />
							<Text fontWeight="600">Harshal Jadhav</Text>
							<Text fontSize={"xs"}>1 min ago</Text>
						</HStack>
						<VStack align={"flex-start"}>
							<Heading fontSize={"lg"}>FrontEnd Devloper</Heading>
							<Text fontSize={"sm"}>
								Sit ad dolor et fugiat mollit mollit officia.Sit ad dolor et
								fugiat mollit mollit officia.
							</Text>
							<Text fontSize={"sm"}>
								Sit ad dolor et fugiat mollit mollit officia.Sit ad dolor et
								fugiat mollit mollit officia.
							</Text>
							<Button size={"sm"} alignSelf={"flex-end"} as={Link} to="/post">
								View Post
							</Button>
						</VStack>
					</Stack>
				</Stack>
			</Flex>
		</>
	);
};

export default PostCard;
