import {Heading, Image, Text} from '@chakra-ui/react'
import logo from '../assets/light-bulb.svg'

export const Header = () => {
	return (
		<>
			<Image src={logo} alt='logo' width={100} marginBottom='1rem' />
			<Heading color='white' marginBottom='1rem'>
				AI Keyword Extractor
			</Heading>

			<Text fontSize={25} textAlign='center'>
				Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius quaerat, voluptate odit excepturi, tempore at explicabo dignissimos voluptates in doloribus commodi cupiditate fugit magnam corporis molestiae cumque similique amet vero?
			</Text>
		</>
	)
}
