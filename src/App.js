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
import YourDetails from "./components/YourDetails";
import Cart from "./components/Cart";
import Index from "./pages/Index";
import Form from "./pages/Form";
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import PostPage from "./pages/PostPage";
import CartPage from "./pages/CartPage";
import NavBar from "./components/Navigation/NavBar";
import Demo1 from "./demo/Demo1";
function App() {
	return (
		
			// <Container maxWidth="container.xl" p="10">
			// 	<Flex h={{base:'auto',md:'100vh'}} py={[0,10,20]}
			// 	direction={{base:"column-reverse",md:'row'}}>
			// 		<YourDetails/>
			// 		<Cart/>
			// 	</Flex>
			// </Container>

			// <Router>
			// <NavBar/>
			// 	<Routes>
			// 		<Route exact path="/" element={<Home/>}/>
			// 		<Route path="/post" element={<PostPage/>}/>
			// 		<Route path="/cart" element={<CartPage/>}/>
			// 	</Routes>
			// </Router>
			<>
				<Demo1/>
			</>
			
		
	);
}

export default App;
