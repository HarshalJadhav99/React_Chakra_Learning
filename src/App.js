import logo from "./logo.svg";
import "./App.css";

import {
	Container,
	Flex,
	VStack,
	Heading,
	Text,
	SimpleGrid,
	GridItem,
	FormControl,
	FormLabel,
	Input,
	Textarea,
	Select,
	Checkbox,
	Button,
	AspectRatio,
	Image,
	Stack,
	Divider,
} from "@chakra-ui/react";

import {BrowserRouter as Router,Routes,Route} from "react-router-dom";

import CartPage from "./pages/CartPage";
import Reusable from "./reusable/Reusable";

function App() {
	return (
		
			

			// <CartPage/>
			<Reusable/>
			
			
		
	);
}

export default App;
