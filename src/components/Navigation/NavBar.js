import {
	Avatar,
	Flex,
	IconButton,
	useDisclosure,
	Drawer,
	DrawerBody,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	DrawerContent,
	DrawerCloseButton,
	Input,
	Button,
	Popover,
	PopoverTrigger,
	PopoverContent,
	PopoverArrow,
	PopoverCloseButton,
	PopoverHeader,
	PopoverBody,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
} from "@chakra-ui/react";
import React from "react";
import { FaBars } from "react-icons/fa";
const NavBar = () => {
	const { isOpen, onOpen, onClose } = useDisclosure();
	const btnRef = React.useRef();
	return (
		<>
			<Drawer
				isOpen={isOpen}
				placement="right"
				onClose={onClose}
				finalFocusRef={btnRef}>
				<DrawerOverlay />
				<DrawerContent>
					<DrawerCloseButton />
					<DrawerHeader>Create your account</DrawerHeader>

					<DrawerBody>
						<Input placeholder="Type here..." />
					</DrawerBody>

					<DrawerFooter>
						<Button variant="outline" mr={3} onClick={onClose}>
							Cancel
						</Button>
						<Button colorScheme="blue">Save</Button>
					</DrawerFooter>
				</DrawerContent>
			</Drawer>
			<Flex
				h="75px"
				bg="brand.800"
				justify={"space-between"}
				align="center"
				px={4}>
				<IconButton
					onClick={onOpen}
					ref={btnRef}
					variant={"ghost"}
					color="white"
					_hover={{ bg: "main.400" }}
					fontSize="3xl">
					<FaBars />
				</IconButton>
				{/* <Popover>
					<PopoverTrigger>
                    <Avatar />
					</PopoverTrigger>
					<PopoverContent>
						<PopoverArrow />
						<PopoverCloseButton />
						<PopoverHeader>Confirmation!</PopoverHeader>
						<PopoverBody>
							Are you sure you want to have that milkshake?
						</PopoverBody>
					</PopoverContent>
				</Popover> */}
				<Menu>
					<MenuButton>
						<Avatar name="Harshal Jadhav" colorScheme={"red"} backgroundColor="transparent" border={"1px"}/>
					</MenuButton>
					<MenuList>
						<MenuItem>Profile</MenuItem>
						<MenuItem>Setting</MenuItem>
						
					</MenuList>
				</Menu>
			</Flex>
		</>
	);
};

export default NavBar;
