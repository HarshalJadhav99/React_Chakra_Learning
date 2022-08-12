import {
	AddIcon,
	CheckIcon,
	ChevronDownIcon,
	ChevronRightIcon,
	ExternalLinkIcon,
	HamburgerIcon,
	Icon,
	PhoneIcon,
	WarningIcon,
} from "@chakra-ui/icons";
import {
	Accordion,
	AccordionButton,
	AccordionIcon,
	AccordionItem,
	AccordionPanel,
	Alert,
	AlertDescription,
	AlertDialog,
	AlertDialogBody,
	AlertDialogContent,
	AlertDialogFooter,
	AlertDialogHeader,
	AlertDialogOverlay,
	AlertIcon,
	AlertTitle,
	AspectRatio,
	Avatar,
	AvatarBadge,
	AvatarGroup,
	Badge,
	Box,
	Breadcrumb,
	BreadcrumbItem,
	BreadcrumbLink,
	BreadcrumbSeparator,
	Button,
	ButtonGroup,
	Center,
	Circle,
	CircularProgress,
	CircularProgressLabel,
	CloseButton,
	color,
	Container,
	Divider,
	Drawer,
	DrawerBody,
	DrawerCloseButton,
	DrawerContent,
	DrawerFooter,
	DrawerHeader,
	DrawerOverlay,
	Editable,
	EditableInput,
	EditablePreview,
	Flex,
	FormControl,
	FormErrorIcon,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Hide,
	Highlight,
	HStack,
	IconButton,
	Image,
	Img,
	Input,
	InputGroup,
	InputLeftAddon,
	InputLeftElement,
	InputRightAddon,
	InputRightElement,
	Kbd,
	Link,
	LinkBox,
	LinkOverlay,
	List,
	ListIcon,
	ListItem,
	Menu,
	MenuButton,
	MenuItem,
	MenuList,
	OrderedList,
	Popover,
	PopoverArrow,
	PopoverBody,
	PopoverCloseButton,
	PopoverContent,
	PopoverFooter,
	PopoverHeader,
	PopoverTrigger,
	Portal,
	Progress,
	Radio,
	RadioGroup,
	Show,
	SimpleGrid,
	Skeleton,
	SkeletonCircle,
	SkeletonText,
	Slider,
	SliderFilledTrack,
	SliderThumb,
	SliderTrack,
	Spinner,
	Square,
	Stack,
	Stat,
	StatArrow,
	StatGroup,
	StatHelpText,
	StatLabel,
	StatNumber,
	Switch,
	Tab,
	Table,
	TableCaption,
	TableContainer,
	TabList,
	TabPanel,
	TabPanels,
	Tabs,
	Tag,
	TagLabel,
	TagLeftIcon,
	Tbody,
	Td,
	Text,
	Textarea,
	Tfoot,
	Th,
	Thead,
	Tooltip,
	Tr,
	UnorderedList,
	useDisclosure,
	useToast,
	VStack,
	Wrap,
	WrapItem,
} from "@chakra-ui/react";
import { MdSettings, MdReceipt, MdGroupWork } from "react-icons/md";
import React, { useRef, useState } from "react";

const Demo1 = () => {
	const colors = ["gray", "teal", "purple", "pink", "red", "orange"];
	const [index, setIndex] = useState(0);
	const changeColor = () => {
		index >= colors.length - 1 ? setIndex(0) : setIndex(index + 1);
	};
	const [resize, setResize] = React.useState("horizontal");

	const returnBox = (as, color) => {
		return (
			<Box as={as} color={color} fontSize="50px">
				this is h1 text
			</Box>
		);
	};
	const [value, setValue] = useState("1");
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();
	const cancelRef = useRef();

	const btnRef = React.useRef();
	const initialFocusRef = React.useRef();
	const ref = React.useRef();
	return (
		<>
			<Box
				w={"100%"}
				h="200px"
				bgGradient={"linear(to-r, green.200, pink.500)"}
			/>
			<Box
				w={"100%"}
				h="200px"
				bgGradient={"linear(to-l, green.200, pink.500)"}
			/>
			<Box
				w={"100%"}
				h="200px"
				bgGradient={"linear(to-l, gray.300, yellow.400, pink.200)"}
			/>
			<Box
				w={"100%"}
				h="200px"
				bgGradient={"linear(to-r, red,blue,yellow,white)"}
			/>
			<Text
				bgGradient="linear(to-l, #7928CA, #FF0080)"
				bgClip="text"
				fontSize="6xl"
				fontWeight="extrabold">
				Welcome to Chakra UI
			</Text>
			<Box
				as="button"
				p="4"
				color={"white"}
				fontWeight={"bold"}
				borderRadius="md"
				bgGradient={"linear(to-r,teal.700,green.800)"}
				_hover={{ bgGradient: "linear(to-r, red.500, yellow.500)" }}>
				click here
			</Box>

			<AspectRatio ratio={4 / 3}>
				<iframe
					width={560}
					height="315"
					title="hjvideo"
					src="https://www.youtube.com/embed/QhBnZ6NPOY0"
					allowFullScreen
				/>
			</AspectRatio>
			<AspectRatio ratio={4 / 3}>
				<Image
					src="https://bit.ly/naruto-sage"
					alt="naruto"
					objectFit="cover"
				/>
			</AspectRatio>

			<Box maxW={400} h={400} bg={"blue.400"} border="2px solid black" />
			<Box as="h1" color={"whiteAlpha.900"} fontSize="50px">
				this is h1 text
			</Box>
			<Box as="button" color={"whiteAlpha.900"} fontSize="50px">
				this is h1 text
			</Box>
			{returnBox("button", "red.500")}
			<Box
				width="100%"
				height={"400px"}
				bgColor="#d10056"
				padding={2}
				d="flex"
				justifyContent="space-evenly">
				<AspectRatio flexGrow={5} ratio={1.85 / 1} maxW="350px">
					<Box
						maxW={"350px"}
						bgColor="pink"
						p={2}
						borderTopRadius="4"
						border={"solid 2px black"}
						display="flex"
						flexDirection="column">
						<Box as="h2" fontSize={"40px"}>
							web developer
						</Box>
						<Img src="/image 6.svg" w={"100%"} h={"100%"} />
					</Box>
				</AspectRatio>
			</Box>

			<Center h={100} bg="tomato" color={"whiteAlpha.900"} fontSize="40px">
				This is the center element
			</Center>

			<Circle bgColor={"green.100"} maxW="500px" height="500px" ml={20}>
				<Circle bgColor={"green.300"} width="450px" height="450px">
					<PhoneIcon color={"whiteAlpha.900"} fontSize="30px" />
				</Circle>
			</Circle>
			<Container>
				There are many benefits to a joint design and development system. Not
				only does it bring benefits to the design team, but it also brings
				benefits to engineering teams. It makes sure that our experiences have a
				consistent look and feel, not just in our design specs, but in
				production
			</Container>
			<Container width={"md"} bgColor="blue.100">
				size md
			</Container>
			<Container maxW={"550px"} bgColor="pink.400">
				size 550px
			</Container>
			<Container maxW={"container.sm"} bgColor="purple.400">
				{" "}
				container sm
			</Container>
			<Container maxW={"container.lg"} bgColor="green.300" centerContent>
				{" "}
				container lg
			</Container>
			<Container maxW={"container.xl"} bgColor="blackAlpha.500">
				<Box
					display="flex"
					flexDirection="row"
					alignContent="space-evenly"
					w={"100%"}>
					<Square
						bgColor={"green.900"}
						flexGrow="2"
						maxW={"50%"}
						height="400px">
						<Circle bgColor={"green.300"} width="200px" height="200px">
							<PhoneIcon color={"whiteAlpha.900"} fontSize="30px" />
						</Circle>
					</Square>
					<Square bgColor={"blue.900"} flexGrow="2" maxW={"50%"}>
						<Circle bgColor={"blue.400"} width="200px" height="200px">
							<PhoneIcon color={"whiteAlpha.900"} fontSize="30px" />
						</Circle>
					</Square>
				</Box>
			</Container>

			<Flex color={"white"}>
				<Center w={"100px"} bgColor={"green.600"}>
					<Text>Box 1</Text>
				</Center>
				<Square bg="blue.400" size={"150px"}>
					<Text>Box2</Text>
				</Square>
				<Box flex={1} bg="tomato">
					<Text>Box 3</Text>
				</Box>
			</Flex>

			<Flex
				bgColor={"teal.100"}
				h="400px"
				justify={"space-around"}
				align="center">
				<Center w="100px" h="100px" bgColor={"green.500"}>
					<Text>Box 1</Text>
				</Center>
				<Center w="100px" h="150px" bgColor={"green.500"}>
					<Text>Box 2</Text>
				</Center>
				<Center w="100px" h="100px" bgColor={"purple.500"}>
					<Image src="/image 6.svg" borderRadius={"full"} boxSize="100px" />
				</Center>
				<Center w="100px" h="150px" bgColor={"green.500"}>
					<Text>Box 3</Text>
				</Center>
			</Flex>

			<Grid templateColumns={"repeat(5,1fr)"} gap="6">
				<GridItem w={"100%"} h={10} bg="blue.500" />
				<GridItem w={"100%"} h={10} bg="blue.500" />
				<GridItem w={"100%"} h={10} bg="blue.500" />
				<GridItem w={"100%"} h={10} bg="blue.500" />
				<GridItem w={"100%"} h={10} bg="blue.500" />
			</Grid>

			<Grid
				height={200}
				templateRows="repeat(3, 1fr)"
				templateColumns="repeat(6, 1fr)"
				gap={4}>
				<GridItem rowSpan={3} colSpan={1} bg="tomato" />
				<GridItem colSpan={3} bg="papayawhip" />
				<GridItem colSpan={2} bg="papayawhip" />
				<GridItem colSpan={5} bg="tomato" />
				<GridItem colSpan={5} bg="tomato" />
				<GridItem colSpan={5} bg="tomato" />
			</Grid>

			<Grid templateColumns={"repeat(6,1fr)"} gap={6} py={10}>
				<GridItem colSpan={5} h="10" bg="pink.500">
					<Grid templateColumns="repeat(6,1fr)" gap={0}>
						<GridItem colSpan={1} h={10} bg={colors[index] + ".100"} />
						<GridItem colSpan={1} h={10} bg={colors[index] + ".200"} />
						<GridItem colSpan={1} h={10} bg={colors[index] + ".300"} />
						<GridItem colSpan={1} h={10} bg={colors[index] + ".400"} />
						<GridItem colSpan={1} h={10} bg={colors[index] + ".500"} />
						<GridItem colSpan={1} h={10} bg={colors[index] + ".600"} />
					</Grid>
				</GridItem>
				<GridItem
					as={Button}
					colSpan={1}
					h="10"
					bg="turquoise"
					onClick={() => changeColor()}>
					colorize!
				</GridItem>
			</Grid>

			<SimpleGrid columns={[1, null, 3, 2]} spacing="10">
				<Box height={50} bgColor="tomato" />
				<Box height={50} bgColor="tomato" />
				<Box height={50} bgColor="tomato" />
				<Box height={50} bgColor="tomato" />
				<Box height={50} bgColor="tomato" />
				<Box height={50} bgColor="tomato" />
			</SimpleGrid>
			<Stack spacing={4} direction="column" align={"center"}>
				<Button colorScheme={"facebook"} size={"xs"} variant="solid">
					btn 1
				</Button>
				<Button colorScheme={"whatsapp"} size={"sm"} variant="outline">
					btn 2
				</Button>
				<Button colorScheme={"twitter"} size={"md"} variant="ghost">
					btn 3
				</Button>
				<Button colorScheme={"linkedin"} size={"lg"} variant="link">
					btn 4
				</Button>
				<Button
					colorScheme={"red"}
					w={"400px"}
					size={"sm"}
					variant="unstyled"
					color={"red"}>
					btn 5
				</Button>
				<Button
					isLoading
					loadingText="Loading Content"
					variant={"outline"}
					spinnerPlacement="start">
					Loading
				</Button>
				<Button
					isLoading
					loadingText="Left spinner"
					variant={"solid"}
					spinnerPlacement="end">
					Left spinner
				</Button>
				<Button
					rightIcon={<Spinner />}
					variant="outline"
					colorScheme={"linkedin"}>
					Spinner Icon
				</Button>
				<Button
					leftIcon={<WarningIcon />}
					rightIcon={<PhoneIcon />}
					variant="solid"
					colorScheme={"red"}>
					Both Side Icon
				</Button>
			</Stack>

			<Editable defaultValue="Take some chakra">
				<EditablePreview />
				<EditableInput />
			</Editable>
			<InputGroup>
				<InputLeftElement
					pointerEvents="none"
					color="gray.300"
					fontSize="1.2em"
					children="$"
				/>
				<Input placeholder="Enter amount" />
				<InputRightElement children={<CheckIcon color="green.500" />} />
			</InputGroup>
			<Stack spacing={4}>
				<InputGroup>
					<InputLeftAddon children="+234" />
					<Input type="tel" placeholder="phone number" />
				</InputGroup>

				{/* If you add the size prop to `InputGroup`, it'll pass it to all its children. */}
				<InputGroup size="sm">
					<InputLeftAddon children="https://" />
					<Input placeholder="mysite" />
					<InputRightAddon children=".com" />
				</InputGroup>
			</Stack>

			<RadioGroup defaultValue="2">
				<Stack spacing={5} direction="row">
					<Radio colorScheme="red" value="1">
						Radio
					</Radio>
					<Radio colorScheme="green" value="2">
						Radio
					</Radio>
				</Stack>
			</RadioGroup>
			<RadioGroup onChange={setValue} value={value}>
				<Stack direction="row">
					<Radio colorScheme={"blue"} size="md" value="1">
						First
					</Radio>
					<Radio value="2" size={"lg"}>
						Second
					</Radio>
					<Radio value="3">Third</Radio>
				</Stack>
			</RadioGroup>
			<RadioGroup name="form-name">
				<Radio>Radio 1</Radio>
				<Radio>Radio 2</Radio>
			</RadioGroup>
			<Container maxW={"container.xl"}>
				<Slider aria-label="slider-ex-2" colorScheme="pink" defaultValue={30}>
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb boxSize={10}>
						<Box color="tomato" as={PhoneIcon} />
					</SliderThumb>
				</Slider>
				<Slider
					aria-label="slider-ex-3"
					defaultValue={30}
					orientation="vertical"
					minH="32">
					<SliderTrack>
						<SliderFilledTrack />
					</SliderTrack>
					<SliderThumb boxSize={6}>
						<Box color="tomato" as={PhoneIcon} />
					</SliderThumb>
				</Slider>
				<FormControl display="flex" alignItems="center">
					<FormLabel htmlFor="email-alerts" mb="0">
						Enable email alerts?
					</FormLabel>
					<Switch id="email-alerts" />
				</FormControl>
				<Stack align="center" direction="row" p={5}>
					<Switch size="sm" colorScheme={"red"} />
					<Switch size="md" colorScheme={"teal"} />
					<Switch size="lg" colorScheme={"twitter"} />
				</Stack>
				<Stack p={5}>
					<RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
						<Stack direction="row" spacing={5}>
							<Radio value="horizontal">Horizontal</Radio>
							<Radio value="vertical">Vertical</Radio>
							<Radio value="none">None</Radio>
						</Stack>
					</RadioGroup>

					<Textarea
						placeholder="Here is a sample placeholder"
						size="sm"
						resize={resize}
					/>
				</Stack>
				<Box p={5}>
					<Badge>Default</Badge>
					<Badge colorScheme="green">Success</Badge>
					<Badge colorScheme="red">Removed</Badge>
					<Badge colorScheme="purple">New</Badge>
					<Badge variant="outline" colorScheme="green">
						Default
					</Badge>
					<Badge variant="solid" colorScheme="green">
						Success
					</Badge>
					<Badge variant="subtle" colorScheme="green">
						Removed
					</Badge>
				</Box>
				<Text fontSize="xl" fontWeight="bold">
					Segun Adebayo
					<Badge ml="1" fontSize="0.8em" colorScheme="green">
						New
					</Badge>
				</Text>
				<Stack padding={10} bgColor="gray.100">
					<Divider
						borderWidth={3}
						borderRadius={5}
						borderColor={"red"}
						orientation="horizontal"
					/>
				</Stack>
				<Box p={4}>
					<Kbd fontSize={20}>click to join</Kbd>
					<br />
					<br />
					<Kbd>ctrl</Kbd> and <Kbd>H</Kbd>
					<br />
					<span>
						<Kbd bgColor={"blue.200"}>shift</Kbd> +{" "}
						<Kbd mr={"10px"} bgColor={"blue.200"}>
							H
						</Kbd>
					</span>
					<span>
						<Kbd>shift</Kbd> then <Kbd>H</Kbd>
					</span>
				</Box>
				<UnorderedList>
					<ListItem>Lorem ipsum dolor sit amet</ListItem>
					<ListItem>Consectetur adipiscing elit</ListItem>
					<ListItem>Integer molestie lorem at massa</ListItem>
					<ListItem>Facilisis in pretium nisl aliquet</ListItem>
				</UnorderedList>
				<OrderedList>
					<ListItem>Lorem ipsum dolor sit amet</ListItem>
					<ListItem>Consectetur adipiscing elit</ListItem>
					<ListItem>Integer molestie lorem at massa</ListItem>
					<ListItem>Facilisis in pretium nisl aliquet</ListItem>
				</OrderedList>
				<List>
					<ListItem>
						<ListIcon as="CheckIcon" color={"red"} />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</ListItem>
					<ListItem>
						<ListIcon as="CheckIcon" color={"red"} />
						Lorem ipsum dolor sit amet, consectetur adipisicing elit
					</ListItem>
				</List>
				<Stack paddingY={4}>
					<Stat>
						<StatLabel>Collected Fees</StatLabel>
						<StatNumber>£0.00</StatNumber>
						<StatHelpText>Feb 12 - Feb 28</StatHelpText>
					</Stat>
					<StatGroup>
						<Stat>
							<StatLabel>Sent</StatLabel>
							<StatNumber>345,670</StatNumber>
							<StatHelpText>
								<StatArrow type="increase" />
								23.36%
							</StatHelpText>
						</Stat>

						<Stat>
							<StatLabel>Clicked</StatLabel>
							<StatNumber>45</StatNumber>
							<StatHelpText>
								<StatArrow type="decrease" />
								9.05%
							</StatHelpText>
						</Stat>
					</StatGroup>
				</Stack>
				<TableContainer>
					<Table variant={"striped"} colorScheme={"teal"} size="lg">
						<TableCaption>Imperial to metric conversion factors</TableCaption>
						<Thead>
							<Tr>
								<Th>To convert</Th>
								<Th>into</Th>
								<Th isNumeric>multiply by</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>inches</Td>
								<Td>millimetres (mm)</Td>
								<Td isNumeric>25.4</Td>
							</Tr>
							<Tr>
								<Td>feet</Td>
								<Td>centimetres (cm)</Td>
								<Td isNumeric>30.48</Td>
							</Tr>
							<Tr>
								<Td>yards</Td>
								<Td>metres (m)</Td>
								<Td isNumeric>0.91444</Td>
							</Tr>
						</Tbody>
						<Tfoot>
							<Tr>
								<Th>To convert</Th>
								<Th>into</Th>
								<Th isNumeric>multiply by</Th>
							</Tr>
						</Tfoot>
					</Table>
				</TableContainer>
				<TableContainer>
					<Table variant={"simple"} size={"sm"}>
						<TableCaption>Imperial to metric conversion factors</TableCaption>
						<Thead>
							<Tr>
								<Th>Name</Th>
								<Th>Address</Th>
								<Th>Age</Th>
							</Tr>
						</Thead>
						<Tbody>
							<Tr>
								<Td>HJ</Td>
								<Td>Dhj</Td>
								<Td>22</Td>
							</Tr>
							<Tr>
								<Td>HJ</Td>
								<Td>Dhj</Td>
								<Td>22</Td>
							</Tr>
							<Tr>
								<Td>HJ</Td>
								<Td>Dhj</Td>
								<Td>22</Td>
							</Tr>
						</Tbody>
					</Table>
				</TableContainer>
				<Box py={"5"}>
					<Tag>Sample Tag</Tag>
				</Box>
				<HStack spacing={4}>
					{["sm", "md", "lg"].map((size) => (
						<Tag size={size} key={size} variant="subtle" colorScheme="cyan">
							<TagLeftIcon boxSize="12px" as={AddIcon} />
							<TagLabel>Cyan</TagLabel>
						</Tag>
					))}
				</HStack>
				<Stack py="5" spacing={5}>
					<Alert status="error">
						<AlertIcon />
						<AlertTitle>Your browser is outdated!</AlertTitle>
						<AlertDescription>
							Your Chakra experience may be degraded.
						</AlertDescription>
					</Alert>
					<Alert status="success">
						<AlertIcon />
						Data uploaded to the server. Fire on!
					</Alert>

					<Alert status="warning">
						<AlertIcon />
						Seems your account is about expire, upgrade now
					</Alert>

					<Alert status="info">
						<AlertIcon />
						Chakra is going live on August 30th. Get ready!
					</Alert>
				</Stack>
				<HStack>
					<CircularProgress value={80} color="orange.400" thickness="12px">
						<CircularProgressLabel>80%</CircularProgressLabel>
					</CircularProgress>
					<CircularProgress isIndeterminate color={"purple"} />
				</HStack>
				<Stack spacing={5} py="5">
					<Progress value={80} colorScheme="red" />
					<Progress value={60} colorScheme="red" hasStripe />
					<Progress colorScheme="green" size="sm" value={20} />
					<Progress colorScheme="green" size="md" value={20} />
					<Progress colorScheme="green" size="lg" value={20} />
					<Progress colorScheme="green" height="32px" value={20} />
					<Progress value={20} size="xs" colorScheme="pink" />
					<Progress size="xs" isIndeterminate colorScheme={"pink"} />
				</Stack>
				<Stack py="5">
					<Skeleton height="20px" />
					<Skeleton height="20px" />
					<Skeleton height="20px" />
				</Stack>
				<Skeleton>
					<div>contents wrapped</div>
					<div>won't be visible</div>
				</Skeleton>
				<Box padding="6" boxShadow="lg" bg="white">
					<SkeletonCircle startColor="blue.400" endColor="pink.400" size="10" />
					<SkeletonText
						mt="4"
						noOfLines={4}
						spacing="4"
						startColor="red.400"
						endColor="blue.500"
						fadeDuration={10}
						speed={1}
					/>
				</Box>
				<Box padding="6" boxShadow="lg" bg="white">
					<SkeletonCircle startColor="blue.400" endColor="pink.400" size="10" />
					<SkeletonText height="20px" isLoaded>
						some text has been loaded....
					</SkeletonText>
				</Box>
				<Box>
					<Button
						onClick={() =>
							toast({
								title: "Account Created.",
								description: "We've created your account for you.",
								status: "success",
								duration: 9000,
								isClosable: true,
							})
						}>
						Show Toast
					</Button>
					<Button
						onClick={() =>
							toast({
								position: "bottom-left",
								render: () => (
									<Box color="white" bg="blue.500" p={3}>
										Hello Custom
									</Box>
								),
								status: "success",
								duration: 9000,
								isClosable: true,
							})
						}>
						Show Toast
					</Button>
				</Box>
				<Box>
					<Text>Text</Text>
					<Text noOfLines={2}>
						"The quick brown fox jumps over the lazy dog" is an English-language
						pangram—a sentence that contains all of the letters of the English
						alphabet. Owing to its existence, Chakra was created. alphabet.
						Owing to its existence, Chakra was created. alphabet. Owing to its
						existence, Chakra was created. alphabet. Owing to its existence,
						Chakra was created. alphabet. Owing to its existence, Chakra was
						created.
					</Text>
					<Text fontSize={"xl"} noOfLines={[1, 2, 3]}>
						"The quick brown fox jumps over the lazy dog" is an English-language
						pangram—a sentence that contains all of the letters of the English
						alphabet. Owing to its existence, Chakra was created. "The quick
						brown fox jumps over the lazy dog" is an English-language pangram—a
						sentence that contains all of the letters of the English alphabet.
						Owing to its existence, Chakra was created.
					</Text>
					<Highlight
						query={"you can"}
						styles={{ px: "10px", py: "1", bg: "orange.100" }}>
						With the Highlight component, you can spotlight words.
					</Highlight>
					<Heading size="lg" as={"h3"} fontSize="40px" lineHeight="tall">
						<Highlight
							query={"you can"}
							styles={{
								px: "10px",
								py: "1",
								bg: "orange.100",
								rounded: "full",
							}}>
							With the Highlight component, you can spotlight words.
						</Highlight>
					</Heading>
					<Highlight
						query={["spotlight", "emphasize", "Accentuate"]}
						styles={{ px: "2", py: "1", rounded: "full", bg: "teal.100" }}>
						With the Highlight component, you can spotlight, emphasize and
						accentuate words.
					</Highlight>
				</Box>
				<Box>
					<Text>Search result for: "spot"</Text>
					<Text mt="6" fontWeight="bold">
						<Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>
							Spotlight bulb
						</Highlight>
					</Text>
					<Text fontWeight="bold">
						<Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>
							Spot cleaner
						</Highlight>
					</Text>
					<Text fontWeight="bold">
						<Highlight query="spot" styles={{ py: "1", fontWeight: "normal" }}>
							Spot ceiling
						</Highlight>
					</Text>
				</Box>

				<Button colorScheme="red" onClick={onOpen}>
					Delete Customer
				</Button>

				<AlertDialog
					motionPreset="scale"
					isOpen={isOpen}
					leastDestructiveRef={cancelRef}
					onClose={onClose}
					isCentered>
					<AlertDialogOverlay>
						<AlertDialogContent>
							<AlertDialogHeader fontSize="lg" fontWeight="bold">
								Delete Customer
							</AlertDialogHeader>

							<AlertDialogBody>
								Are you sure? You can't undo this action afterwards.
							</AlertDialogBody>

							<AlertDialogFooter>
								<Button ref={cancelRef} onClick={onClose}>
									Cancel
								</Button>
								<Button colorScheme="red" onClick={onClose} ml={3}>
									Delete
								</Button>
							</AlertDialogFooter>
						</AlertDialogContent>
					</AlertDialogOverlay>
				</AlertDialog>
				<Box>
					<Button
						as={IconButton}
						ref={btnRef}
						colorScheme="teal"
						onClick={onOpen}
						icon={<HamburgerIcon />}
					/>

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
				</Box>
				<Stack>
					<Box>
						<Menu>
							<MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
								Actions
							</MenuButton>
							<MenuList>
								<MenuItem>Download</MenuItem>
								<MenuItem>Create a Copy</MenuItem>
								<MenuItem>Mark as Draft</MenuItem>
								<MenuItem>Delete</MenuItem>
								<MenuItem>Attend a Workshop</MenuItem>
								<MenuItem minH="48px">
									<Image
										boxSize="2rem"
										borderRadius="full"
										src="https://placekitten.com/100/100"
										alt="Fluffybuns the destroyer"
										mr="12px"
									/>
									<span>Fluffybuns the Destroyer</span>
								</MenuItem>
								<MenuItem minH="40px">
									<Image
										boxSize="2rem"
										borderRadius="full"
										src="https://placekitten.com/120/120"
										alt="Simon the pensive"
										mr="12px"
									/>
									<span>Simon the pensive</span>
								</MenuItem>
							</MenuList>
						</Menu>
					</Box>
				</Stack>
				<Stack>
					<Box>
						<Popover>
							<PopoverTrigger>
								<Button as={IconButton} icon={<PhoneIcon />} />
							</PopoverTrigger>
							<PopoverContent>
								<PopoverArrow />
								<PopoverCloseButton />
								<PopoverHeader>Confirmation!</PopoverHeader>
								<PopoverBody>
									Are you sure you want to have that milkshake?
								</PopoverBody>
								<PopoverFooter
									border="0"
									display="flex"
									alignItems="center"
									justifyContent="space-between"
									pb={4}>
									<Box fontSize="sm">Step 2 of 4</Box>
									<ButtonGroup size="sm">
										<Button colorScheme="green">Setup Email</Button>
										<Button colorScheme="blue" ref={initialFocusRef}>
											Next
										</Button>
									</ButtonGroup>
								</PopoverFooter>
							</PopoverContent>
						</Popover>
					</Box>
				</Stack>

				<Stack>
					<Box spacing={10} display="flex" alignItems="center">
						<Tooltip label="Hey I'm here!">
							<Avatar mr="15px" name={"Harshal Jadhav"} />
						</Tooltip>
						<Tooltip
							hasArrow
							bg="red.300"
							color="white"
							label="Phone number"
							fontSize="lg">
							<PhoneIcon />
						</Tooltip>
					</Box>
				</Stack>
				<Wrap spacing={6}>
					<WrapItem>
						<Tooltip label="I close on click">
							<Button>Close on Click - true(default)</Button>
						</Tooltip>
					</WrapItem>

					<WrapItem>
						<Tooltip label="I don't close on click" closeOnClick={false}>
							<Button>Close on Click - false</Button>
						</Tooltip>
					</WrapItem>

					<WrapItem>
						<Tooltip label="I am always open" placement="top" isOpen>
							<Button>Always Open</Button>
						</Tooltip>
					</WrapItem>

					<WrapItem>
						<Tooltip
							label="I am open by default"
							placement="left"
							defaultIsOpen>
							<Button>Open on startup</Button>
						</Tooltip>
					</WrapItem>

					<WrapItem>
						<Tooltip label="Opened after 500ms" openDelay={500}>
							<Button colorScheme={"red"}>Delay Open - 500ms</Button>
						</Tooltip>
					</WrapItem>

					<WrapItem>
						<Tooltip label="Closed after 500ms" closeDelay={500}>
							<Button>Delay Close - 500ms</Button>
						</Tooltip>
					</WrapItem>

					<WrapItem>
						<Tooltip label="I have 15px arrow" hasArrow arrowSize={15}>
							<Button>Arrow size - 15px</Button>
						</Tooltip>
					</WrapItem>
				</Wrap>
				<Stack py={5}>
					<Box>
						<Accordion allowToggle>
							<AccordionItem>
								<h2>
									<AccordionButton _expanded={{ bg: "tomato", color: "white" }}>
										<Box flex="1" textAlign="left">
											Section 1 title
										</Box>
										<AccordionIcon />
									</AccordionButton>
								</h2>
								<AccordionPanel pb={4}>
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
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
									Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
									do eiusmod tempor incididunt ut labore et dolore magna aliqua.
									Ut enim ad minim veniam, quis nostrud exercitation ullamco
									laboris nisi ut aliquip ex ea commodo consequat.
								</AccordionPanel>
							</AccordionItem>
						</Accordion>
					</Box>
				</Stack>
				<Stack>
					<Box>
						<Tabs variant={"unstyled"} colorScheme={"blue"}>
							<TabList>
								<Tab _selected={{ color: "white", bg: "blue.500" }}>One</Tab>
								<Tab _selected={{ color: "white", bg: "green.400" }}>Two</Tab>
								<Tab _selected={{ color: "white", bg: "teal.500" }}>Three</Tab>
							</TabList>

							<TabPanels>
								<TabPanel>
									<p>one!</p>
								</TabPanel>
								<TabPanel>
									<p>two!</p>
								</TabPanel>
								<TabPanel>
									<p>three!</p>
								</TabPanel>
							</TabPanels>
						</Tabs>
					</Box>
				</Stack>
				<Stack>
					<Box>
						<Breadcrumb
							fontWeight="bold"
							color={"red.300"}
							fontSize="sm"
							separator={<ChevronRightIcon color="red" />}>
							<BreadcrumbItem>
								<BreadcrumbLink href="#">Home</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem>
								<BreadcrumbLink href="#">Docs</BreadcrumbLink>
							</BreadcrumbItem>

							<BreadcrumbItem isCurrentPage>
								<BreadcrumbLink href="#">Breadcrumb</BreadcrumbLink>
								<BreadcrumbSeparator />
							</BreadcrumbItem>
						</Breadcrumb>
					</Box>
				</Stack>
				<Stack>
					<Box>
						<Link href="https://chakra-ui.com" isExternal>
							Chakra Design system <ExternalLinkIcon mx="2px" />
						</Link>
						<Text>
							Did You Know That
							<Link color={"teal.500"} href="#">
								links can live inline with text
							</Link>
						</Text>
					</Box>
				</Stack>
				<Stack>
					<Box>
						<LinkBox
							as="article"
							maxW="sm"
							p="5"
							borderWidth="1px"
							rounded="md">
							<Box as="time" dateTime="2021-01-15 15:30:00 +0000 UTC">
								13 days ago
							</Box>
							<Heading size="md" my="2">
								<LinkOverlay href="#">
									New Year, New Beginnings: Smashing Workshops & Audits
								</LinkOverlay>
							</Heading>
							<Text mb="3">
								Catch up on what’s been cookin’ at Smashing and explore some of
								the most popular community resources.
							</Text>
							<Box as="a" color="teal.400" href="#" fontWeight="bold">
								Some inner link
							</Box>
						</LinkBox>
					</Box>
				</Stack>
				<Stack>
					<Box>
						<Wrap>
							<WrapItem>
								<Avatar
									size={"2xs"}
									name="Dan Abrahmov"
									src="https://bit.ly/dan-abramov"
								/>
							</WrapItem>
							<WrapItem>
								<Avatar
									name="Kola Tioluwani"
									src="https://bit.ly/tioluwani-kolawole"
								/>
							</WrapItem>
							<WrapItem>
								<Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
							</WrapItem>
							<WrapItem>
								<Avatar
									name="Ryan Florence"
									src="https://bit.ly/ryan-florence"
								/>
							</WrapItem>
							<WrapItem>
								<Avatar
									name="Prosper Otemuyiwa"
									src="https://bit.ly/prosper-baba"
								/>
							</WrapItem>
							<WrapItem>
								<Avatar
									name="Christian Nwamba"
									src="https://bit.ly/code-beast"
								/>
							</WrapItem>
							<WrapItem>
								<Avatar
									name="Segun Adebayo"
									src="https://bit.ly/sage-adebayo"
								/>
							</WrapItem>
							<WrapItem>
								<AvatarGroup spacing="1rem">
									<Avatar
										bg="red.500"
										icon={<PhoneIcon color={"white"} fontSize="1.5rem" />}
									/>
									<Avatar bg="teal.500" />
								</AvatarGroup>
							</WrapItem>
						</Wrap>
					</Box>
					<Stack direction={"row"} spacing={4}>
						<Avatar>
							<AvatarBadge boxSize="24px" bg="green.500" />
						</Avatar>
						<Avatar>
							<AvatarBadge
								boxSize="1.25em"
								borderColor="papayawhip"
								bg="red.500"
							/>
						</Avatar>
					</Stack>
					<AvatarGroup size="sm" max={3}>
						<Avatar name="Ryan Florence" src="https://bit.ly/ryan-florence" />
						<Avatar name="Segun Adebayo" src="https://bit.ly/sage-adebayo" />
						<Avatar name="Kent Dodds" src="https://bit.ly/kent-c-dodds" />
						<Avatar
							name="Prosper Otemuyiwa"
							src="https://bit.ly/prosper-baba"
						/>
						<Avatar name="Christian Nwamba" src="https://bit.ly/code-beast" />
					</AvatarGroup>
				</Stack>
				<HStack>
					{/* The default icon size is 1em (16px) */}
					<Icon as={MdSettings} />

					{/* Use the `boxSize` prop to change the icon size */}
					<Icon as={MdReceipt} w={6} h={6} />

					{/* Use the `color` prop to change the icon color */}
					<Icon as={MdGroupWork} w={8} h={8} color="red.500" />
					<WarningIcon w={8} h={8} color="red.500" />
				</HStack>
				<Stack direction="row">
					<Image
						boxSize="100px"
						objectFit="cover"
						src="https://bit.ly/dan-abramov"
						alt="Dan Abramov"
					/>
					<Image
						borderRadius={"full"}
						boxSize="150px"
						objectFit="cover"
						src="https://bit.ly/dan-abramov"
						alt="Dan Abramov"
					/>
					<Image
						boxSize="200px"
						src="https://bit.ly/dan-abramov"
						alt="Dan Abramov"
					/>
				</Stack>
				<Stack direction="row" spacing={6}>
					<CloseButton size="sm" />
					<CloseButton size="md" />
					<CloseButton size="lg" color={"red"} />
				</Stack>
				<Box bg="red.400" color="white">
					I'm here,
					<Portal>This text is portaled at the end of document.body!</Portal>
				</Box>
				<Box bg="red.400" color="white">
					I'm here,
					<Portal containerRef={ref}>
						Portal: This text is portaled to the yellow box!
					</Portal>
					<Box ref={ref} bg="yellow.500">
						<div>Container: Hey,</div>
					</Box>
				</Box>
				<Portal containerRef={ref}>
					<Box bg="teal.500" color="white">
						Parent: Hey welcome,
						<Portal>Child: I'm attached to my parent portal</Portal>
					</Box>
				</Portal>
				<Box bg="red.400" color="white" ref={ref} />
				<Portal containerRef={ref}>
					<Box bg="teal.500" color="white">
						Parent: Hey welcome,
						<Portal appendToParentPortal={false}>
							Child: I'm going to document.body
						</Portal>
					</Box>
				</Portal>
				<div style={{ background: "red" }} ref={ref} />
				<Show breakpoint="(max-width: 400px)">
					<Box>This text appears only on screens 400px and smaller.</Box>
				</Show>
				<Show above="sm">
					<Box>
						This text appears at the "sm" value screen width or greater.
					</Box>
				</Show>
				<Hide below="md">
					<Box>This text hides at the "md" value screen width and smaller.</Box>
				</Hide>
				
			</Container>
		</>
	);
};

export default Demo1;
