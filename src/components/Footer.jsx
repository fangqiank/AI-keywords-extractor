import {Box, Image, Text, Flex} from '@chakra-ui/react'
import logo from '../assets/openai.png'

export const Footer = () => {
	return (
		<Box marginTop={50}>
			<Flex justifyContent='center' alignItems='center'>
				<Image src={logo} alt='openai' marginRight={1} />
				<Text>
					Powered by OpenAI
				</Text>
			</Flex>
		</Box>
	)
}
